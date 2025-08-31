import { RouteStatuses, TPointType, TProcessedRoute } from '../types';

export const processPreliminaryRoute = (drawedData: GeoJSON.Feature<GeoJSON.LineString>): TProcessedRoute => {
    const coords = drawedData.geometry.coordinates as [number, number][];

    const features: GeoJSON.Feature[] = [];

    features.push({
        type: 'Feature',
        geometry: { type: 'LineString', coordinates: coords },
        properties: { featureType: 'line', user_lineType: 'future_leg' },
    });

    coords.forEach((c, i) => {
        let pointType: TPointType;
        let label: string;

        if (i === 0) {
            pointType = 'start';
            label = 'A';
        } else if (i === coords.length - 1) {
            pointType = 'end';
            label = 'B';
        } else {
            pointType = 'waypoint_future';
            label = i.toString();
        }

        features.push({
            type: 'Feature',
            geometry: { type: 'Point', coordinates: c },
            properties: {
                featureType: 'point',
                pointType,
                label,
            },
        });
    });

    return {
        features: { type: 'FeatureCollection', features },
        meta: {
            type: RouteStatuses.Todo,
            estimatedDuration: 0,
            distance: 0,
            arrivalTime: undefined,
        },
    };
};
