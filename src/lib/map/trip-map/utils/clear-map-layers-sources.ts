import {
    CLUSTER_COUNT_LAYER_KEY,
    CLUSTERS_LAYER_KEY,
    LINE_POINTS_LAYER_KEY,
    LINE_POINTS_SOURCE_KEY,
} from '../constance';

export const clearMapLayersSources = (mapCurrent: mapboxgl.Map) => {
    if (mapCurrent.getLayer(LINE_POINTS_LAYER_KEY)) {
        mapCurrent.removeLayer(LINE_POINTS_LAYER_KEY);
    }

    if (mapCurrent.getLayer(CLUSTER_COUNT_LAYER_KEY)) {
        mapCurrent.removeLayer(CLUSTER_COUNT_LAYER_KEY);
    }

    if (mapCurrent.getLayer(CLUSTERS_LAYER_KEY)) {
        mapCurrent.removeLayer(CLUSTERS_LAYER_KEY);
    }

    if (mapCurrent!.getSource(LINE_POINTS_SOURCE_KEY)) {
        mapCurrent!.removeSource(LINE_POINTS_SOURCE_KEY);
    }
};
