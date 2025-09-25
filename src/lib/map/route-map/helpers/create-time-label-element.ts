import { Theme } from '@mui/material';
import { dynamicTimeLabelSvg, estimateLabelWidth } from './dynamic-time-label-svg';

interface ICreateTimeLabelElement {
    map: mapboxgl.Map;
    features: GeoJSON.Feature[];
    theme: Theme;
}

export const createTimeLabelElement = async ({ map, features, theme }: ICreateTimeLabelElement) => {
    if (map.getLayer('route-labels-layer')) {
        map.removeLayer('route-labels-layer');
    }

    if (map.getSource('route-labels')) {
        map.removeSource('route-labels');
    }

    const uniqueIcons = new Map<string, { type: string; text: string; flip: boolean }>();
    const scale = Math.max(2, window.devicePixelRatio || 2);

    features.forEach((feature) => {
        const props = feature.properties ?? {};
        const type = props.type === 'planned' ? theme.palette.base.color9 : theme.palette.base.color6;
        const text = (props.text || '') as string;
        const flip = props.orientation === 'left';
        const fontSize = theme.typography.body1.fontSize ?? 14;

        const width = estimateLabelWidth(text, Number(fontSize));

        const iconId = `time-label-${type.replace('#', '')}-${text}-${flip ? 'left' : 'right'}`;
        props.iconId = iconId;

        props.offset = flip ? [width / 2, 0] : [-(width / 2), 0];

        if (!uniqueIcons.has(iconId) && !map.hasImage(iconId)) {
            uniqueIcons.set(iconId, { type, text, flip });
        }
    });

    await Promise.all(
        Array.from(uniqueIcons.entries()).map(async ([iconId, { type, text, flip }]) => {
            const svgString = await dynamicTimeLabelSvg(type, text, flip, theme, scale);

            return new Promise<void>((resolve) => {
                const img = new Image();

                img.onload = () => {
                    if (!map.hasImage(iconId)) {
                        map.addImage(iconId, img, { pixelRatio: scale, sdf: false });
                    }
                    resolve();
                };
                img.onerror = () => resolve();
                img.src = svgToBase64(svgString);
            });
        }),
    );

    map.addSource('route-labels', {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features,
        },
    });

    map.addLayer({
        id: 'route-labels-layer',
        type: 'symbol',
        source: 'route-labels',
        layout: {
            'icon-image': ['get', 'iconId'],
            'icon-rotation-alignment': 'viewport',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true,
            'icon-offset': ['get', 'offset'],
            'icon-anchor': 'bottom',
            'icon-size': 1,
        },
    });
};

const svgToBase64 = (svg: string) => {
    return (
        'data:image/svg+xml;base64,' +
        btoa(new TextEncoder().encode(svg).reduce((data, byte) => data + String.fromCharCode(byte), ''))
    );
};
