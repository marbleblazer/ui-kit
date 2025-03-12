import { Box, PaletteMode, SxProps, useTheme } from '@mui/material';
import mapboxgl from 'mapbox-gl';
import { FC, PropsWithChildren, RefObject, useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import { getUiKitMapStyleId } from '@chirp/ui/helpers/map-utils';
import { useBreakpoints } from '@chirp/ui/hooks/use-breakpoints';
import * as S from './style';

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Coordinates } from './map.types';
import { HelpControl } from './map-controls/help-control/help-control';
import { useTranslation } from 'react-i18next';
import { updateControlTexts } from './helpers/update-controls-text';

mapboxgl.accessToken = (import.meta.env.VITE_UI_MAPBOX_TOKEN || '') as string;

export interface IBaseMapProps {
    mapRef: RefObject<mapboxgl.Map | null>;
    coordinates?: Coordinates;
    scrollZoom?: boolean;
    getMapStyleId?: (themeMode: PaletteMode) => string;
    onMapLoad: () => void;
    sx?: SxProps;
}

export const BaseMap: FC<PropsWithChildren<IBaseMapProps>> = ({
    coordinates,
    scrollZoom = true,
    getMapStyleId = getUiKitMapStyleId,
    mapRef,
    onMapLoad,
    sx,
    children,
}) => {
    const { i18n } = useTranslation('uiKit', { keyPrefix: 'map' });
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const wrapper = useRef<HTMLDivElement | null>(null);
    const { isMobile } = useBreakpoints();

    const { palette } = useTheme();

    useEffect(() => {
        if (!mapRef || !mapRef.current) return;

        mapRef.current.setStyle(getMapStyleId(palette.mode));

        // Для обновления цветов в HelpControl
        if (mapRef.current && mapRef.current._controls) {
            const helpControl = mapRef.current._controls.find((control) => control instanceof HelpControl);
            helpControl && helpControl.updatePalette(palette);
        }
    }, [i18n.language, mapRef, getMapStyleId, palette]);

    useEffect(() => {
        if (mapRef.current) return;

        mapRef.current = new mapboxgl.Map({
            container: mapContainer.current || '',
            style: getMapStyleId(palette.mode),
            zoom: 6,
            minZoom: 1,
            projection: { name: 'mercator' },
            scrollZoom,

            logoPosition: 'bottom-right',
            maxBounds: [
                [-180, -72],
                [180, 72],
            ],
            center:
                coordinates?.lat && coordinates?.lon
                    ? [coordinates.lon, coordinates.lat]
                    : [19.56413004748697, 11.65120378622913],
            trackResize: true,
            crossSourceCollisions: false,
            cooperativeGestures: isMobile,
        });
        mapRef.current.on('load', onMapLoad);

        mapRef.current.addControl(
            new mapboxgl.FullscreenControl({ container: wrapper.current ?? undefined }),
            'bottom-right',
        );
        mapRef.current.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'bottom-right');
        const geolocate = new mapboxgl.GeolocateControl({
            positionOptions: { enableHighAccuracy: true },
            showUserHeading: false,
            fitBoundsOptions: { animate: false },
        });

        mapRef.current.setLanguage(i18n.language);

        mapRef.current.addControl(geolocate, 'bottom-right');
        mapRef.current.addControl(
            new MapboxGeocoder({
                accessToken: mapboxgl.accessToken || '',
                marker: false,
                placeholder: i18n.t('uiKit:map.Search location'),
                collapsed: true,
                render: (item) => {
                    // Кастомная структура HTML для предложений
                    const title = item.text || '';
                    const address = item.place_name || '';

                    return `
                      <div class="mapboxgl-ctrl-geocoder--suggestion">
                        <div class="custom-suggestion">
                          <div class="address">${title}&nbsp;${address}</div>
                          <div class="selected-icon"></div>
                        </div>
                      </div>
                    `;
                },
            }),
            'bottom-right',
        );

        const mapControls = mapRef.current._controls;
        const geocoderControl = mapControls.find((control) => control instanceof MapboxGeocoder);

        if (geocoderControl) {
            geocoderControl.setPlaceholder(i18n.t('uiKit:map.Search'));
        }

        mapRef.current.getCanvas().style.cursor = 'pointer';

        geolocate.on('geolocate', (e: GeolocationPosition) => {
            if (!mapRef.current) return;
            const latlng = new mapboxgl.LngLat(e.coords.longitude as number, e.coords.latitude as number);
            mapRef.current?.flyTo({ center: [latlng.lng, latlng.lat], essential: true });
        });

        const helpControl = new HelpControl(palette);
        mapRef.current.addControl(helpControl, 'bottom-left');

        return () => {
            mapRef.current?.off('load', onMapLoad);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!wrapper.current) return;

        const resizeObserver = new ResizeObserver(() => {
            if (mapRef.current === null) return;
            mapRef.current.resize();
        });
        resizeObserver.observe(wrapper.current);

        return () => resizeObserver.disconnect(); // clean up
    }, [mapRef]);

    useEffect(() => {
        const localMapRef = mapRef.current;

        if (!localMapRef) return;

        localMapRef.setLanguage(i18n.language);
        updateControlTexts(i18n.t, localMapRef._controls);
    }, [i18n, mapRef]);

    return (
        <S.MapContainer sx={{ ...sx }} width="100%" height="100%" position="relative" className="wrapper" ref={wrapper}>
            <Box width="100%" height="100%" ref={mapContainer} className="mapRef-container" />
            {children}
        </S.MapContainer>
    );
};
