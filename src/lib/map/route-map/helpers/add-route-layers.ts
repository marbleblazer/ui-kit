import { Theme } from '@mui/material';

interface IAddRouteLayers {
    mapCurrent: mapboxgl.Map;
    theme: Theme;
}

interface IAddRouteMarkerImages {
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

    if (!mapCurrent.getLayer('rejected-routes-base')) {
        mapCurrent.addLayer({
            id: 'rejected-routes-base',
            type: 'line',
            source: 'route-lines-source',
            layout: {
                'line-cap': 'round',
                'line-join': 'round',
            },
            paint: {
                'line-color': theme.palette.base.colorNewGrey,
                'line-width': 4,
                'line-opacity': 1,
            },
            filter: ['==', ['get', 'user_lineType'], 'rejected'],
        });
    }

    if (!mapCurrent.getLayer('rejected-routes-gap')) {
        mapCurrent.addLayer({
            id: 'rejected-routes-gap',
            type: 'line',
            source: 'route-lines-source',
            layout: {
                'line-cap': 'round',
                'line-join': 'round',
            },
            paint: {
                'line-color': theme.palette.text.titleInput,
                'line-width': 2,
                'line-dasharray': [1, 2],
                'line-opacity': 1,
            },
            filter: ['==', ['get', 'user_lineType'], 'rejected'],
        });
    }
};

/** Слои с маркерами точек маршрута */
export const addRouteMarkerLayers = ({ mapCurrent }: IAddRouteLayers) => {
    // Слой для пройденных точек маршрута
    if (!mapCurrent.getLayer('route-waypoints-passed')) {
        mapCurrent.addLayer({
            id: 'route-waypoints-passed',
            type: 'symbol',
            source: 'route-points-source',
            layout: {
                'icon-offset': [0, -15],
                'icon-image': 'numbered-marker-passed',
                'icon-size': 1,
                'icon-allow-overlap': true,
                'icon-ignore-placement': true,
            },
            filter: ['==', ['get', 'pointType'], 'waypoint_passed'],
        });
    }

    // Слой для следующих точек маршрута
    if (!mapCurrent.getLayer('route-waypoints-next')) {
        mapCurrent.addLayer({
            id: 'route-waypoints-next',
            type: 'symbol',
            source: 'route-points-source',
            layout: {
                'icon-image': 'numbered-marker-next',
                'icon-offset': [0, -15],
                'icon-size': 1,
                'icon-allow-overlap': true,
                'icon-ignore-placement': true,
            },
            filter: ['==', ['get', 'pointType'], 'waypoint_next'],
        });
    }

    // Слой для будущих точек маршрута
    if (!mapCurrent.getLayer('route-waypoints-future')) {
        mapCurrent.addLayer({
            id: 'route-waypoints-future',
            type: 'symbol',
            source: 'route-points-source',
            layout: {
                'icon-image': 'numbered-marker-future',
                'icon-size': 1,
                'icon-offset': [0, -15],
                'icon-allow-overlap': true,
                'icon-ignore-placement': true,
            },
            filter: ['==', ['get', 'pointType'], 'waypoint_future'],
        });
    }

    // Слой для текста пройденных точек маршрута
    if (!mapCurrent.getLayer('route-waypoints-passed-text')) {
        mapCurrent.addLayer({
            id: 'route-waypoints-passed-text',
            type: 'symbol',
            source: 'route-points-source',
            layout: {
                'text-field': ['get', 'label'],
                'text-size': 14,
                'text-anchor': 'center',
                'text-offset': [0, -1.5],
                'text-allow-overlap': true,
                'text-ignore-placement': true,
            },
            paint: {
                'text-color': '#ffffff',
            },
            filter: ['==', ['get', 'pointType'], 'waypoint_passed'],
        });
    }

    // Слой для текста следующих точек маршрута
    if (!mapCurrent.getLayer('route-waypoints-next-text')) {
        mapCurrent.addLayer({
            id: 'route-waypoints-next-text',
            type: 'symbol',
            source: 'route-points-source',
            layout: {
                'text-field': ['get', 'label'],
                'text-size': 14,
                'text-anchor': 'center',
                'text-offset': [0, -1.5],
                'text-allow-overlap': true,
                'text-ignore-placement': true,
            },
            paint: {
                'text-color': '#ffffff',
            },
            filter: ['==', ['get', 'pointType'], 'waypoint_next'],
        });
    }

    // Слой для текста будущих точек маршрута
    if (!mapCurrent.getLayer('route-waypoints-future-text')) {
        mapCurrent.addLayer({
            id: 'route-waypoints-future-text',
            type: 'symbol',
            source: 'route-points-source',
            layout: {
                'text-field': ['get', 'label'],
                'text-size': 14,
                'text-anchor': 'center',
                'text-offset': [0, -1.5],
                'text-allow-overlap': true,
                'text-ignore-placement': true,
            },
            paint: {
                'text-color': '#ffffff',
            },
            filter: ['==', ['get', 'pointType'], 'waypoint_future'],
        });
    }
};

/** Слои с кластеризацией для пронумерованных точек маршрута */
export const addRouteClusterLayers = ({ mapCurrent, theme }: IAddRouteLayers) => {
    // Добавляет слой, только если он ещё не был добавлен
    if (!mapCurrent.getLayer('route-clusters'))
        mapCurrent.addLayer({
            id: 'route-clusters',
            type: 'circle',
            source: 'route-points-source',
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

    if (!mapCurrent.getLayer('route-cluster-count'))
        mapCurrent.addLayer({
            id: 'route-cluster-count',
            type: 'symbol',
            source: 'route-points-source',
            filter: ['has', 'point_count'],
            layout: {
                'text-field': ['get', 'point_count_abbreviated'],
                'text-size': 12,
            },
            paint: {
                'text-color': theme.palette.base.color1,
            },
        });

    // Слой кластеров
    // if (!mapCurrent.getLayer('route-clusters')) {
    //     mapCurrent.addLayer({
    //         id: 'route-clusters',
    //         type: 'circle',
    //         source: 'route-points-source',
    //         filter: ['has', 'point_count'],
    //         paint: {
    //             'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
    //             'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
    //         },
    //     });
    // }

    // // Слой счетчика кластеров
    // if (!mapCurrent.getLayer('route-cluster-count')) {
    //     mapCurrent.addLayer({
    //         id: 'route-cluster-count',
    //         type: 'symbol',
    //         source: 'route-points-source',
    //         filter: ['has', 'point_count'],
    //         layout: {
    //             'text-field': '{point_count_abbreviated}',
    //             'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    //             'text-size': 12,
    //         },
    //     });
    // }
};

/** Добавление изображений маркеров в стиль карты */
export const addRouteMarkerImages = ({ mapCurrent, theme }: IAddRouteMarkerImages) => {
    // Простая функция для добавления SVG изображения
    const addSvgImage = (name: string, svgString: string) => {
        if (!mapCurrent.hasImage(name)) {
            const img = new Image();
            img.onload = () => mapCurrent.addImage(name, img);
            img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
        }
    };

    // Добавляем базовые изображения маркеров (пронумерованные)
    // Для стилей карты используем базовые изображения с номером "1"
    // Реальные номера будут отображаться через текстовые слои
    const numberedMarkerSvg = (color: string) =>
        `<svg width="44" height="49" viewBox="0 0 44 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_19262_211442)">
        <mask id="path-1-outside-1_19262_211442" maskUnits="userSpaceOnUse" x="4" y="0" width="36" height="41"
            fill="black">
            <rect fill="white" x="4" width="36" height="41" />
            <path
                d="M22 2C30.8366 2 38 8.96457 38 17.5557C37.9999 24.9747 32.6574 31.1792 25.5088 32.7344L22 37L18.4902 32.7344C11.3421 31.1789 6.00005 24.9744 6 17.5557C6 8.96457 13.1634 2 22 2Z" />
        </mask>
        <path
            d="M22 2C30.8366 2 38 8.96457 38 17.5557C37.9999 24.9747 32.6574 31.1792 25.5088 32.7344L22 37L18.4902 32.7344C11.3421 31.1789 6.00005 24.9744 6 17.5557C6 8.96457 13.1634 2 22 2Z"
            fill="${color}" />
        <path
            d="M38 17.5557L40 17.5557V17.5557H38ZM25.5088 32.7344L25.0836 30.7801L24.4052 30.9277L23.9642 31.4638L25.5088 32.7344ZM22 37L20.4556 38.2707L22.0002 40.148L23.5446 38.2705L22 37ZM18.4902 32.7344L20.0346 31.4636L19.5937 30.9277L18.9155 30.7801L18.4902 32.7344ZM6 17.5557H4V17.5557L6 17.5557ZM22 2V4C29.7855 4 36 10.1219 36 17.5557H38H40C40 7.80728 31.8877 0 22 0V2ZM38 17.5557L36 17.5556C36 23.9769 31.3699 29.4125 25.0836 30.7801L25.5088 32.7344L25.9339 34.6887C33.9448 32.9459 39.9999 25.9725 40 17.5557L38 17.5557ZM25.5088 32.7344L23.9642 31.4638L20.4554 35.7295L22 37L23.5446 38.2705L27.0534 34.0049L25.5088 32.7344ZM22 37L23.5444 35.7293L20.0346 31.4636L18.4902 32.7344L16.9458 34.0051L20.4556 38.2707L22 37ZM18.4902 32.7344L18.9155 30.7801C12.6297 29.4122 8.00005 23.9767 8 17.5556L6 17.5557L4 17.5557C4.00006 25.9721 10.0546 32.9455 18.065 34.6886L18.4902 32.7344ZM6 17.5557H8C8 10.1219 14.2145 4 22 4V2V0C12.1123 0 4 7.80728 4 17.5557H6Z"
            fill="white" mask="url(#path-1-outside-1_19262_211442)" />
    </g>
    <defs>
        <filter id="filter0_d_19262_211442" x="0" y="0" width="44" height="48.1484" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.360784 0 0 0 0 0.360784 0 0 0 0 0.360784 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19262_211442" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19262_211442" result="shape" />
        </filter>
    </defs>
</svg>`;

    addSvgImage('numbered-marker-passed', numberedMarkerSvg(theme.palette.text.titleInput));
    addSvgImage('numbered-marker-next', numberedMarkerSvg(theme.palette.base.color9));
    addSvgImage('numbered-marker-future', numberedMarkerSvg(theme.palette.base.color6));
};
