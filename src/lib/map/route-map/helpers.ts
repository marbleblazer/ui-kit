import { Theme } from '@mui/material/styles';
import { mockRouteData } from '../mock';
import { Feature, FeatureCollection, Point } from 'geojson';
import { mapMarkerEndSvgContainer, mapMarkerStartSvgContainer } from '../svg-containers';
import { mapMarkerNumberedSvgString, mapMarkerTruckSvgString } from '../mp-marker-string';

export type TPointType = 'start' | 'end' | 'waypoint_passed' | 'waypoint_next' | 'waypoint_future' | 'driver';

interface ICreateMarkerElementProps {
    theme: Theme;
    pointType: TPointType;
    label: string;
    isRouteCompleted?: boolean;
}

export const processRouteData = (data: typeof mockRouteData): FeatureCollection => {
    const features: Feature[] = [];

    // Текущее положение водителя
    const driverPosition =
        data.completed_route.geometry.coordinates[data.completed_route.geometry.coordinates.length - 1];
    features.push({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: driverPosition,
        },
        properties: {
            featureType: 'point',
            pointType: 'driver',
        },
    });

    // Пройденный маршрут
    features.push({
        type: 'Feature',
        geometry: data.completed_route.geometry as GeoJSON.LineString,
        properties: {
            featureType: 'line',
            user_lineType: 'completed',
        },
    });

    // Точки маршрута
    const waypoints = data.area.features as Feature<Point>[];
    const completedCoordsString = data.completed_route.geometry.coordinates.map((c) => c.join(','));
    let nextWaypointIndex = -1;
    const lastWaypoint = waypoints[waypoints.length - 1];
    const isRouteCompleted = lastWaypoint.geometry.coordinates.join(',') === driverPosition.join(',');

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
                isRouteCompleted: pointType === 'end' ? isRouteCompleted : undefined, // Добавляем флаг для end
            },
        });
    });

    // Следующий и будущий отрезок
    if (nextWaypointIndex !== -1 && !isRouteCompleted) {
        const plannedCoordinates = data.planned_route.geometry.coordinates;

        // Зелёный отрезок
        features.push({
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: [plannedCoordinates[0], plannedCoordinates[1]],
            },
            properties: {
                featureType: 'line',
                user_lineType: 'next_leg',
            },
        });

        // Синий отрезок
        if (plannedCoordinates.length > 2) {
            features.push({
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: plannedCoordinates.slice(1),
                },
                properties: {
                    featureType: 'line',
                    user_lineType: 'future_leg',
                },
            });
        }
    }

    return {
        type: 'FeatureCollection',
        features,
    };
};

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
