import { Theme } from '@mui/material/styles';
import { mapMarkerEndSvgContainer, mapMarkerStartSvgContainer } from '../svg-containers';
import { mapMarkerNumberedSvgString, mapMarkerTruckSvgString } from '../mp-marker-string';
import { ICreateMarkerElementProps, RouteMeta, TPointType, TProcessedRoute } from './types';
import { mockRouteData } from '../mock';
import moment from 'moment';

// TODO добавить тип RouteDetail из types.ts
export const processRouteData = (data: typeof mockRouteData): TProcessedRoute => {
    const features: GeoJSON.Feature[] = [];

    if (!data) {
        return {
            features: { type: 'FeatureCollection', features: [] },
            meta: { type: 'planned', estimatedDuration: 0 },
        };
    }

    const driverPosition =
        data.completed_route?.geometry.coordinates[data.completed_route.geometry.coordinates.length - 1];

    if (driverPosition) {
        features.push({
            type: 'Feature',
            geometry: { type: 'Point', coordinates: driverPosition },
            properties: { featureType: 'point', pointType: 'driver' },
        });
    }

    features.push({
        type: 'Feature',
        geometry: data.completed_route.geometry as GeoJSON.LineString,
        properties: { featureType: 'line', user_lineType: 'completed' },
    });

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

    let meta: RouteMeta;
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

    return {
        features: { type: 'FeatureCollection', features },
        meta,
    };
};

/** Создание маркера: начальная/конечная точки, промежуточные точки, иконка водителя */
export const createRouteMarkerElement = ({
    theme,
    pointType,
    label,
    isRouteCompleted,
}: ICreateMarkerElementProps): HTMLDivElement => {
    const el = document.createElement('div');
    let svgString = '';

    const endMarkerColor = isRouteCompleted ? theme.palette.text.titleInput : theme.palette.base.color6;

    switch (pointType) {
        case 'start':
            svgString = mapMarkerStartSvgContainer(
                theme.palette,
                theme.palette.mode === 'light' ? '#FFA824' : '#FFD262',
            );
            break;
        case 'end':
            svgString = mapMarkerEndSvgContainer(theme.palette, endMarkerColor);
            break;
        case 'waypoint_passed':
            svgString = mapMarkerNumberedSvgString(theme.palette.text.titleInput, label);
            el.classList.add('numbered-svg-marker');
            break;
        case 'waypoint_next':
            svgString = mapMarkerNumberedSvgString(theme.palette.base.colorNewGreen, label); // TODO green
            el.classList.add('numbered-svg-marker');
            break;
        case 'waypoint_future':
            svgString = mapMarkerNumberedSvgString(theme.palette.base.color6, label);
            el.classList.add('numbered-svg-marker');
            break;
        case 'driver':
            svgString = mapMarkerTruckSvgString(theme.palette);
            el.classList.add('truck-marker');
            break;
    }
    el.innerHTML = svgString;

    return el;
};

/** Слои с линиями */
export const addRouteLayers = (mapCurrent: mapboxgl.Map, theme: Theme) => {
    if (!mapCurrent.getLayer('route-lines-border-layer')) {
        mapCurrent.addLayer({
            id: 'route-lines-border-layer',
            type: 'line',
            source: 'route-lines-source',
            layout: { 'line-cap': 'round', 'line-join': 'round' },
            paint: {
                'line-width': 6,
                'line-color': [
                    'match',
                    ['get', 'user_lineType'],
                    'completed',
                    theme.palette.base.color1,
                    'next_leg',
                    '#388e3c', // TODO
                    'future_leg',
                    theme.palette.base.color1,
                    theme.palette.base.color1,
                ],
            },
        });
    }

    if (!mapCurrent.getLayer('route-lines-layer')) {
        mapCurrent.addLayer({
            id: 'route-lines-layer',
            type: 'line',
            source: 'route-lines-source',
            layout: { 'line-cap': 'round', 'line-join': 'round' },
            paint: {
                'line-width': 2,
                'line-color': [
                    'match',
                    ['get', 'user_lineType'],
                    'completed',
                    theme.palette.text.titleInput,
                    'next_leg',
                    '#4caf50', // TODO
                    'future_leg',
                    theme.palette.base.color6,
                    theme.palette.text.titleInput,
                ],
            },
        });
    }
};
