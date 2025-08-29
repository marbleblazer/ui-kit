import { IRouteMeta, TPointType, TProcessedRoute } from '../types';
import { mockRouteData } from '../../mock';
import moment from 'moment';
import { formatDuration } from './format-duration';

interface IProcessRouteData {
    data: typeof mockRouteData; // TODO добавить тип RouteDetail из types.ts
}

export const processRouteData = ({ data }: IProcessRouteData): TProcessedRoute => {
    const features: GeoJSON.Feature[] = [];

    if (!data) {
        return {
            features: { type: 'FeatureCollection', features: [] },
            meta: { type: 'planned', estimatedDuration: 0 },
        };
    }

    // Позиция водителя (последняя точка completed_route)
    const driverPosition =
        data.completed_route?.geometry.coordinates[data.completed_route.geometry.coordinates.length - 1];

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
        geometry: data.completed_route.geometry as GeoJSON.LineString,
        properties: { featureType: 'line', user_lineType: 'completed' },
    });

    // Обработка промежуточных точек маршрута (waypoints)
    const waypoints = data.area.features as GeoJSON.Feature<GeoJSON.Point>[];
    const completedCoordsString = data.completed_route.geometry.coordinates.map((c) => c.join(','));

    let nextWaypointIndex = -1;
    let nextWaypointLabel = '';

    const lastWaypoint = waypoints[waypoints.length - 1];
    const isRouteCompleted = lastWaypoint.geometry.coordinates.join(',') === driverPosition?.join(',');

    waypoints.forEach((waypoint, index) => {
        const coordString = waypoint.geometry.coordinates.join(',');
        let pointType: TPointType;
        let label: string;

        if (index === 0) {
            pointType = 'start';
            label = 'A';
        } else if (index === waypoints.length - 1) {
            pointType = 'end';
            label = 'B';
        } else {
            label = index.toString();

            if (completedCoordsString.includes(coordString)) {
                pointType = 'waypoint_passed';
            } else if (nextWaypointIndex === -1) {
                pointType = 'waypoint_next';
                nextWaypointIndex = index;
                nextWaypointLabel = label;
            } else {
                pointType = 'waypoint_future';
            }
        }

        features.push({
            ...waypoint,
            properties: {
                featureType: 'point',
                pointType,
                label,
                isRouteCompleted: pointType === 'end' ? isRouteCompleted : undefined,
            },
        });
    });

    // Текущий и будущий участок запланированного маршрута
    if (nextWaypointIndex !== -1 && !isRouteCompleted) {
        const plannedCoordinates = data.planned_route.geometry.coordinates;
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
            geometry: data.alt_route.geometry as GeoJSON.LineString,
            properties: { featureType: 'line', user_lineType: 'alt_route' },
        });
    }

    // Расчёт метаданных (ETA, длительность, статус маршрута)
    let meta: IRouteMeta;
    const currentTime = moment('2025-08-18T14:25:00+03:00');

    if (data.completed_route.geometry.coordinates.length <= 1 || !data.is_active) {
        const totalDuration = data.planned_route.duration;
        const totalDistance = data.planned_route.distance;

        const arrivalTime = currentTime.clone().add(totalDuration, 'seconds');

        meta = {
            type: 'planned',
            estimatedDuration: totalDuration,
            distance: totalDistance,
            isRouteActive: data.is_active,
            arrivalTime: arrivalTime.format('HH:mm'),
        };
    } else if (isRouteCompleted) {
        meta = { type: 'done' };
    } else {
        const nextStopLabel = nextWaypointLabel;
        const durationToNext = data.planned_route.legs[nextWaypointIndex - 1]?.duration ?? 0;
        const distanceToNext = data.planned_route.legs[nextWaypointIndex - 1]?.distance ?? 0;

        const eta = currentTime.clone().add(durationToNext, 'seconds');

        meta = {
            type: 'active',
            eta: eta.toDate(),
            estimatedDuration: durationToNext,
            nextStopIndex: nextWaypointIndex,
            isRouteActive: data.is_active,
            nextStopLabel,
            distance: distanceToNext,
            arrivalTime: eta.format('HH:mm'),
        };
    }

    // Добавление меток времени для разветвления маршрута
    if (data.alt_route && !isRouteCompleted && driverPosition) {
        // Середина сегмента от текущей позиции до следующего waypoint
        const nextWaypoint = waypoints[nextWaypointIndex];

        if (nextWaypoint) {
            const plannedMidpoint: [number, number] = [
                (driverPosition[0] + nextWaypoint.geometry.coordinates[0]) / 2,
                (driverPosition[1] + nextWaypoint.geometry.coordinates[1]) / 2,
            ];
            const durationToNext =
                data.planned_route.legs[nextWaypointIndex - 1]?.duration ?? data.planned_route.duration;

            features.push({
                type: 'Feature',
                geometry: { type: 'Point', coordinates: plannedMidpoint },
                properties: {
                    featureType: 'point',
                    pointType: 'time_label',
                    text: formatDuration({ totalSeconds: durationToNext, withSpace: true }),
                    color: 'green',
                    orientation: 'left',
                },
            });
        }

        const altMidpoint = getLineMidpoint(data.alt_route.geometry.coordinates as [number, number][]);

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

    return {
        features: { type: 'FeatureCollection', features },
        meta,
    };
};

/** Средняя точка массива координат */
const getLineMidpoint = (coords: [number, number][]): [number, number] => coords[Math.floor(coords.length / 2)];
