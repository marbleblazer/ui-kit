import { Theme } from '@mui/material';
import {
    CLUSTER_COUNT_LAYER_KEY,
    CLUSTERS_LAYER_KEY,
    LINE_POINTS_LAYER_KEY,
    LINE_POINTS_SOURCE_KEY,
} from '../constance';

export const addTripMapLayers = (mapCurrent: mapboxgl.Map, theme: Theme) => {
    if (!mapCurrent.getLayer(LINE_POINTS_LAYER_KEY))
        mapCurrent!.addLayer({
            id: LINE_POINTS_LAYER_KEY,
            type: 'circle',
            source: LINE_POINTS_SOURCE_KEY,
            paint: {
                'circle-radius': 5,
                'circle-color': theme.palette.text.titleInput,
                'circle-stroke-color': theme.palette.base.color1,
                'circle-stroke-width': 2,
            },
        });

    // Добавляет слой, только если он ещё не был добавлен
    if (!mapCurrent.getLayer(CLUSTERS_LAYER_KEY))
        mapCurrent.addLayer({
            id: CLUSTERS_LAYER_KEY,
            type: 'circle',
            source: LINE_POINTS_SOURCE_KEY,
            filter: ['has', 'point_count'],
            paint: {
                'circle-color': [
                    'step',
                    ['get', 'point_count'],
                    theme.palette.text.titleInput,
                    100,
                    theme.palette.text.titleInput,
                    750,
                    theme.palette.text.titleInput,
                ],
                'circle-radius': ['step', ['get', 'point_count'], 15, 100, 20, 750, 25],
                'circle-emissive-strength': 1,
            },
        });

    if (!mapCurrent.getLayer(CLUSTER_COUNT_LAYER_KEY))
        mapCurrent.addLayer({
            id: CLUSTER_COUNT_LAYER_KEY,
            type: 'symbol',
            source: LINE_POINTS_SOURCE_KEY,
            filter: ['has', 'point_count'],
            layout: {
                'text-field': ['get', 'point_count_abbreviated'],
                'text-size': 12,
            },
            paint: {
                'text-color': theme.palette.base.color1,
            },
        });
};
