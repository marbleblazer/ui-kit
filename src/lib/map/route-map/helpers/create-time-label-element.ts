import { Theme } from '@mui/material/styles';
import { mapTimeLabelSvgString } from '../../mp-marker-string';

export const addTimeLabelsLayer = async (map: mapboxgl.Map, features: GeoJSON.Feature[], theme: Theme) => {
    if (map.getLayer('route-labels-layer')) {
        map.removeLayer('route-labels-layer');
    }

    if (map.getSource('route-labels')) {
        map.removeSource('route-labels');
    }

    const uniqueIcons = new Map<string, { color: string; text: string; flip: boolean }>();

    features.forEach((feature) => {
        const props = feature.properties ?? {};
        const color = props.color === 'green' ? theme.palette.base.colorNewGreen : theme.palette.base.color6; // TODO
        const text = (props.text || '') as string;
        const flip = props.orientation === 'left';
        const iconId = `time-label-${color.replace('#', '')}-${text}-${flip ? 'left' : 'right'}`;

        props.iconId = iconId;

        if (!uniqueIcons.has(iconId) && !map.hasImage(iconId)) {
            uniqueIcons.set(iconId, { color, text, flip });
        }
    });

    await Promise.all(
        Array.from(uniqueIcons.entries()).map(([iconId, { color, text, flip }]) => {
            return new Promise<void>((resolve) => {
                const img = new Image();

                img.onload = () => {
                    if (!map.hasImage(iconId)) {
                        map.addImage(iconId, img);
                    }
                    resolve();
                };
                img.onerror = () => resolve();
                img.src = svgToBase64(mapTimeLabelSvgString(color, text, flip, theme));
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
            'icon-rotation-alignment': 'map',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true,
            'icon-offset': ['get', 'offset'],
        },
    });
};

const svgToBase64 = (svg: string) => {
    const encoder = new TextEncoder();
    const svgBuffer = encoder.encode(svg); // Uint8Array
    let binary = '';
    svgBuffer.forEach((b) => (binary += String.fromCharCode(b)));

    return 'data:image/svg+xml;base64,' + btoa(binary);
};
