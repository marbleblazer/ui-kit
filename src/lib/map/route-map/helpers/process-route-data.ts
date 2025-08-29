import { IRouteDetail, IRouteMeta, RouteStatuses, TPointType, TProcessedRoute } from '../types';
import moment from 'moment';
import { formatDuration } from './format-duration';
import { remainingToWaypoint } from './remaining-to-waypoint';

interface IProcessRouteData {
    data: IRouteDetail;
}

export const processRouteData = ({ data }: IProcessRouteData): TProcessedRoute => {
    const features: GeoJSON.Feature[] = [];

    if (!data) {
        return {
            features: { type: 'FeatureCollection', features: [] },
            meta: { type: RouteStatuses.Todo, estimatedDuration: 0 },
        };
    }

    const completedCoords: [number, number][] = (data.completed_route ?? []).map((p) => [p.longitude, p.latitude]);

    // Позиция водителя (последняя точка completed_route)
    const driverPosition = completedCoords[completedCoords.length - 1];

    if (driverPosition) {
        features.push({
            type: 'Feature',
            geometry: { type: 'Point', coordinates: driverPosition },
            properties: { featureType: 'point', pointType: 'driver' },
        });
    }

    //  Пройденный участок маршрута
    features.push({
        type: 'Feature',
        geometry: { type: 'LineString', coordinates: completedCoords },
        properties: { featureType: 'line', user_lineType: 'completed' },
    });

    // Обработка промежуточных точек маршрута (waypoints)
    const areaCoordinates = data.area.geometry.type === 'LineString' ? data.area.geometry.coordinates : [];
    const waypoints: GeoJSON.Feature<GeoJSON.Point>[] = areaCoordinates.map((coordinates) => ({
        type: 'Feature',
        geometry: { type: 'Point', coordinates },
        properties: {},
    }));

    let nextWaypointIndex = -1;
    let nextWaypointLabel = '';

    waypoints.forEach((waypoint, index) => {
        const coordString = waypoint.geometry.coordinates.join(',');
        let pointType: TPointType;
        let label: string;

        if (index === 0) {
            label = 'A';
        } else if (index === waypoints.length - 1) {
            label = 'B';
        } else {
            label = index.toString();
        }

        if (completedCoords.some((c) => c.join(',') === coordString)) {
            pointType = index === 0 ? 'start' : 'waypoint_passed';
        } else if (nextWaypointIndex === -1) {
            pointType = 'waypoint_next';
            nextWaypointIndex = index;
            nextWaypointLabel = label;
        } else {
            pointType = 'waypoint_future';
        }

        if (index === waypoints.length - 1) {
            pointType = 'end';
        }

        features.push({
            ...waypoint,
            properties: {
                featureType: 'point',
                pointType,
                label,
                isRouteCompleted: pointType === 'end' ? data.status === RouteStatuses.Done : undefined,
            },
        });
    });

    // Текущий и будущий участок запланированного маршрута
    if (nextWaypointIndex !== -1 && data.status !== RouteStatuses.Done) {
        const plannedCoordinates = data.planned_route?.geometry.coordinates ?? [];
        features.push({
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [plannedCoordinates[0], plannedCoordinates[1]] },
            properties: { featureType: 'line', user_lineType: 'next_leg' },
        });

        if (plannedCoordinates.length > 2) {
            features.push({
                type: 'Feature',
                geometry: { type: 'LineString', coordinates: plannedCoordinates.slice(1) },
                properties: { featureType: 'line', user_lineType: 'future_leg' },
            });
        }
    }

    // Альтернативный маршрут
    if (data.alt_route) {
        features.push({
            type: 'Feature',
            geometry: data.alt_route.geometry,
            properties: { featureType: 'line', user_lineType: 'alt_route' },
        });
    }

    // Расчёт метаданных (ETA, длительность, статус маршрута)
    let meta: IRouteMeta;
    const currentTime = moment();

    if (data.status === RouteStatuses.Todo) {
        const totalDuration = data.planned_route?.duration;
        const totalDistance = data.planned_route?.distance;

        const arrivalTime = currentTime.clone().add(totalDuration, 'seconds');

        meta = {
            type: RouteStatuses.Todo,
            estimatedDuration: totalDuration,
            distance: totalDistance,
            arrivalTime: arrivalTime.format('HH:mm'),
        };
    } else if (data.status === RouteStatuses.Done) {
        meta = { type: RouteStatuses.Done };
    } else {
        const nextStopLabel = nextWaypointLabel;

        const cumDist = data.cumulative_values.distance;
        const cumTime = data.cumulative_values.duration;
        const polyline: [number, number][] = data.cumulative_values.points.map((p) => [p[0], p[1]] as [number, number]);

        let remainingDuration = 0;
        let remainingDistance = 0;

        if (driverPosition && nextWaypointIndex >= 0) {
            const res = remainingToWaypoint(
                driverPosition[0],
                driverPosition[1],
                polyline,
                cumDist,
                cumTime,
                nextWaypointIndex,
            );

            if (res.onRoute) {
                remainingDuration = res.remainingTimeS ?? 0;
                remainingDistance = res.remainingDistanceM ?? 0;
            }
        }

        const eta = currentTime.clone().add(remainingDuration, 'seconds');

        meta = {
            type: RouteStatuses.InProgress,
            eta: eta.toDate(),
            estimatedDuration: remainingDuration,
            nextStopIndex: nextWaypointIndex,
            nextStopLabel,
            distance: remainingDistance,
            arrivalTime: eta.format('HH:mm'),
        };
    }

    // Добавление меток времени для разветвления маршрута
    if (data.alt_route && data.status !== RouteStatuses.Done && driverPosition) {
        // Середина сегмента от текущей позиции до следующего waypoint
        const nextWaypoint = waypoints[nextWaypointIndex];

        if (nextWaypoint) {
            const plannedMidpoint: [number, number] = [
                (driverPosition[0] + nextWaypoint.geometry.coordinates[0]) / 2,
                (driverPosition[1] + nextWaypoint.geometry.coordinates[1]) / 2,
            ];

            const remainingTimeToNextStop = meta.estimatedDuration;

            features.push({
                type: 'Feature',
                geometry: { type: 'Point', coordinates: plannedMidpoint },
                properties: {
                    featureType: 'point',
                    pointType: 'time_label',
                    text: formatDuration({ totalSeconds: remainingTimeToNextStop || 0, withSpace: true }),
                    color: 'green',
                    orientation: 'left',
                },
            });
        }

        const altMidpoint = getLineMidpoint(
            (data.alt_route.geometry.coordinates as number[][]).map((c) => [c[0], c[1]] as [number, number]),
        );

        features.push({
            type: 'Feature',
            geometry: { type: 'Point', coordinates: altMidpoint },
            properties: {
                featureType: 'point',
                pointType: 'time_label',
                text: formatDuration({ totalSeconds: data.alt_route.duration, withSpace: true }),
                color: 'blue',
                orientation: 'right',
            },
        });
    }

    // Отклонённые маршруты
    if (data.rejected_routes && data.rejected_routes.length > 0) {
        data.rejected_routes.forEach((rej) => {
            features.push({
                type: 'Feature',
                geometry: rej.area.geometry,
                properties: { featureType: 'line', user_lineType: 'rejected' },
            });
        });
    }

    return {
        features: { type: 'FeatureCollection', features },
        meta,
    };
};

/** Средняя точка массива координат */
const getLineMidpoint = (coords: [number, number][]): [number, number] => coords[Math.floor(coords.length / 2)];
