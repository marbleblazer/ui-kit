import { Palette } from '@mui/material';
import { GeodesicDrawType } from './map.types';
import * as GeodesicDraw from 'mapbox-gl-draw-geodesic';

export const customDrawStyles = (theme: Palette) => [
    {
        id: 'gl-draw-line-inactive',
        type: 'line',
        filter: ['all', ['==', '$type', 'LineString'], ['!=', 'active', 'true']],
        paint: {
            'line-color': `${theme.base.color6}`,
            'line-width': 1,
        },
    },
    {
        id: 'gl-draw-polygon-fill-inactive',
        type: 'fill',
        filter: ['all', ['==', '$type', 'Polygon'], ['!=', 'active', 'true']],
        paint: {
            'fill-color': `${theme.base.color6}`,
            'fill-opacity': 0.1,
        },
    },
    {
        id: 'gl-draw-polygon-outline-inactive',
        type: 'line',
        filter: ['all', ['==', '$type', 'Polygon'], ['!=', 'active', 'true']],
        paint: {
            'line-color': `${theme.base.color6}`,
            'line-width': 1,
        },
    },
    {
        id: 'gl-draw-point-inactive',
        type: 'circle',
        filter: ['all', ['==', '$type', 'Point'], ['!=', 'active', 'true']],
        paint: {
            'circle-radius': 4,
            'circle-color': `${theme.base.color6}`,
        },
    },
    {
        id: 'gl-draw-line-active',
        type: 'line',
        filter: ['all', ['==', '$type', 'LineString'], ['==', 'active', 'true']],
        paint: {
            'line-color': `${theme.base.color6}`,
            'line-width': 1,
        },
    },
    {
        id: 'gl-draw-polygon-fill-active',
        type: 'fill',
        filter: ['all', ['==', '$type', 'Polygon'], ['==', 'active', 'true']],
        paint: {
            'fill-color': `${theme.base.color6}`,
            'fill-opacity': 0.1,
        },
    },
    {
        id: 'gl-draw-polygon-outline-active',
        type: 'line',
        filter: ['all', ['==', '$type', 'Polygon'], ['==', 'active', 'true']],
        paint: {
            'line-color': `${theme.base.color6}`,
            'line-width': 1,
        },
    },
    {
        id: 'gl-draw-point-active',
        type: 'circle',
        filter: ['all', ['==', '$type', 'Point'], ['==', 'active', 'true']],
        paint: {
            'circle-radius': 4,
            'circle-color': `${theme.base.color6}`,
        },
    },
];

export const typedGeodesicDraw = GeodesicDraw as unknown as GeodesicDrawType;

export const customTripDrawStyles = (theme: Palette) => {
    return [
        {
            id: 'gl-draw-line-inactive-border',
            type: 'line',
            filter: ['all', ['==', '$type', 'LineString'], ['!=', 'active', 'true']],
            paint: {
                'line-color': '#BABABA',
                'line-width': 6,
            },
        },
        {
            id: 'gl-draw-line-inactive',
            type: 'line',
            filter: ['all', ['==', '$type', 'LineString'], ['!=', 'active', 'true']],
            paint: {
                'line-color': theme.text.titleInput,
                'line-width': 2,
            },
        },
        {
            id: 'gl-draw-point-active',
            type: 'circle',
            filter: ['==', '$type', 'Point'],
            paint: {
                'circle-radius': 12,
                'circle-color': theme.base.color6,
                'circle-stroke-color': theme.background.default,
                'circle-stroke-width': 2,
                // 'circle-radius': 10,
                // 'circle-color': `${theme.base.color6}`,
            },
        },
    ];
};
