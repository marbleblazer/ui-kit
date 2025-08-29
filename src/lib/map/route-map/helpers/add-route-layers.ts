import { Theme } from '@mui/material/styles';

interface IAddRouteLayers {
    mapCurrent: mapboxgl.Map;
    theme: Theme;
}

/** Слои с линиями */
export const addRouteLayers = ({ mapCurrent, theme }: IAddRouteLayers) => {
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
                    theme.palette.base.colorNewGrey,
                    'next_leg',
                    theme.palette.base.colorGreenBorderMap,
                    'future_leg',
                    theme.palette.base.colorBlueBorderMap,
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
                    theme.palette.base.color9,
                    'future_leg',
                    theme.palette.base.color6,
                    theme.palette.text.titleInput,
                ],
            },
        });
    }

    if (!mapCurrent.getLayer('alt-route-base')) {
        mapCurrent.addLayer({
            id: 'alt-route-base',
            type: 'line',
            source: 'route-lines-source',
            layout: {
                'line-cap': 'round',
                'line-join': 'round',
            },
            paint: {
                'line-color': theme.palette.base.color6,
                'line-width': 4,
                'line-opacity': 1,
            },
            filter: ['==', ['get', 'user_lineType'], 'alt_route'],
        });
    }

    if (!mapCurrent.getLayer('alt-route-gap')) {
        mapCurrent.addLayer({
            id: 'alt-route-gap',
            type: 'line',
            source: 'route-lines-source',
            layout: {
                'line-cap': 'round',
                'line-join': 'round',
            },
            paint: {
                'line-color': theme.palette.base.color1,
                'line-width': 2,
                'line-dasharray': [1, 2],
                'line-opacity': 1,
            },
            filter: ['==', ['get', 'user_lineType'], 'alt_route'],
        });
    }
};
