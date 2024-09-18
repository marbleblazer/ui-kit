import { PaletteMode } from '@mui/material';

import { CurrentTheme } from '../styles/constants';

export type MapPoint = {
    lat: number;
    lon: number;
    [key: string]: any;
};

type Coordinates = [number, number];

export const addSource = (map: mapboxgl.Map, id: string, source: mapboxgl.AnySourceData) => {
    if (!map.getSource(id)) {
        map.addSource(id, source);
    }
};

export const addLayer = (map: mapboxgl.Map, id: string, layer: mapboxgl.AnyLayer, before?: string) => {
    if (!map.getLayer(id)) {
        map.addLayer(layer, before);
    }
};

export const setPointerOnHover = (map: mapboxgl.Map, layerId: string) => {
    map.on('mouseenter', layerId, () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', layerId, () => {
        map.getCanvas().style.cursor = '';
    });
};

export const getSWCoordinates = (coordinatesCollection: Array<MapPoint>): Coordinates => {
    const lowestLng = Math.min(...coordinatesCollection.map((point) => point.lon));
    const lowestLat = Math.min(...coordinatesCollection.map((point) => point.lat));

    return [lowestLng, lowestLat];
};

export const getNECoordinates = (coordinatesCollection: Array<MapPoint>): Coordinates => {
    const highestLng = Math.max(...coordinatesCollection.map((point) => point.lon));
    const highestLat = Math.max(...coordinatesCollection.map((point) => point.lat));

    return [highestLng, highestLat];
};

export const calcBoundsFromCoordinates = (coordinatesCollection: Array<MapPoint>): Coordinates[] => {
    return [getSWCoordinates(coordinatesCollection), getNECoordinates(coordinatesCollection)];
};

export const getCoverageZoomLvl = (zoom: number) => {
    if (zoom >= 0 && zoom <= 7) {
        return 0;
    } else if (zoom >= 8 && zoom <= 9) {
        return 2;
    } else {
        return 3;
    }
};

export const getMapStyleId = (themeMode: PaletteMode): string => {
    return `mapbox://styles/${import.meta.env.VITE_UI_MAPBOX_USER_NAME}/${
        themeMode === CurrentTheme.Dark
            ? import.meta.env.VITE_UI_DARK_MAP_STYLE_ID
            : import.meta.env.VITE_UI_LIGHT_MAP_STYLE_ID
    }`;
};

export const removeMapLayer = (map: mapboxgl.Map, name: string) => {
    if (!map.getLayer(name)) return;
    map.removeLayer(name);
};

export const removeMapSource = (map: mapboxgl.Map, name: string) => {
    if (!map.getSource(name)) return;
    map.removeSource(name);
};
