import { PaletteMode } from '@mui/material';
import centroid from '@turf/centroid';
import { CurrentTheme } from '../styles/constants';
import distance from '@turf/distance';

export type MapPoint = {
    lat: number;
    lon: number;
    [key: string]: number | string;
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

export const getUiKitMapStyleId = (themeMode: PaletteMode): string => {
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

export const checkCirclePolygon = (data: GeoJSON.GeoJSON) => {
    const center = centroid(data).geometry.coordinates;

    if (data.type === 'Feature' && data.geometry.type === 'Polygon') {
        const coordinates = data.geometry?.coordinates[0];
        const distances = coordinates.map((coord) => distance(center, coord, { units: 'kilometers' }));
        const averageDistance = distances.reduce((sum, dist) => sum + dist, 0) / distances.length;
        const isCircle =
            distances.every((dist) => Math.abs(dist - averageDistance) < averageDistance / 10) &&
            coordinates.length === 65;

        return isCircle;
    }

    return false;
};

export const getCircleGeometryFromPolygon = (data: GeoJSON.GeoJSON) => {
    const center = centroid(data).geometry.coordinates;

    if (data.type === 'Feature' && data.geometry.type === 'Polygon') {
        const firstPoint = data.geometry.coordinates[0][0];

        const radius = distance(center, firstPoint, { units: 'kilometers' });

        return { center, radius };
    }
};
