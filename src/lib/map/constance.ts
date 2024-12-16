import { Palette } from '@mui/material';

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
