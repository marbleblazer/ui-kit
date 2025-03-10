import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { TFunction } from 'i18next';

export const updateControlTexts = (
    trans: TFunction<['uiKit', ...never[]], undefined>,
    mapControls: mapboxgl.IControl[],
) => {
    // Обновляем кнопку "Моё местоположение"
    const geolocateButton = document.querySelector('.mapboxgl-ctrl-icon') as HTMLElement;

    if (geolocateButton) {
        geolocateButton.setAttribute('title', trans('uiKit:map.FindMyLocation'));
    }

    // Обновляем кнопки зума
    const zoomInButton = document.querySelector('.mapboxgl-ctrl-zoom-in') as HTMLElement;
    const zoomOutButton = document.querySelector('.mapboxgl-ctrl-zoom-out') as HTMLElement;

    if (zoomInButton) {
        const zoomInButtonIcon = zoomInButton.querySelector('.mapboxgl-ctrl-icon') as HTMLElement;

        if (zoomInButtonIcon) zoomInButtonIcon.setAttribute('title', trans('uiKit:map.ZoomIn'));
    }

    if (zoomOutButton) {
        const zoomOutButtonIcon = zoomOutButton.querySelector('.mapboxgl-ctrl-icon') as HTMLElement;

        if (zoomOutButtonIcon) zoomOutButtonIcon.setAttribute('title', trans('uiKit:map.ZoomOut'));
    }
    // Обновляем кнопку полноэкранного режима
    const fullscreenButton = document.querySelector('.mapboxgl-ctrl-fullscreen') as HTMLElement;

    if (fullscreenButton) {
        const isFullscreen = document.fullscreenElement !== null;
        const fullscreenButtonIcon = fullscreenButton.querySelector('.mapboxgl-ctrl-icon') as HTMLElement;

        fullscreenButtonIcon.setAttribute('title', isFullscreen ? trans('uiKit:map.Exit') : trans('uiKit:map.Enter'));
    }

    const geocoderControl = mapControls?.find((control) => control instanceof MapboxGeocoder);

    if (geocoderControl) {
        geocoderControl.setPlaceholder(trans('uiKit:map.Search'));
    }

    const mapboxglScrollZoomBlocker = document.querySelector('.mapboxgl-scroll-zoom-blocker') as HTMLElement;

    if (mapboxglScrollZoomBlocker) {
        mapboxglScrollZoomBlocker.innerHTML = trans('uiKit:map.CtrlMessage');
    }
    const mapboxglTouchPanBlocker = document.querySelector('.mapboxgl-touch-pan-blocker') as HTMLElement;

    if (mapboxglTouchPanBlocker) {
        mapboxglTouchPanBlocker.innerHTML = trans('uiKit:map.Message');
    }
};
