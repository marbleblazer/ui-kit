import { Box, useTheme } from '@mui/material';
import mapboxgl, { LngLat, MapEventType } from 'mapbox-gl';
import { useEffect, useMemo, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

import { getMapStyleId } from '@chirp/ui/helpers/mapUtils';
import { useBreakpoints } from '@chirp/ui/hooks/useBreakpoints';
import * as GeodesicDraw from 'mapbox-gl-draw-geodesic';
import MapboxDraw from '@mapbox/mapbox-gl-draw';

import * as S from './style';
import { Coordinates } from './map.types';
import { MapDrawModeTabs } from './map-draw-tabs';
import { AnyObject } from '@chirp/ui/helpers/global';
import { customDrawStyles } from './constance';

mapboxgl.accessToken = import.meta.env.VITE_UI_MAPBOX_TOKEN || '';

type Props = {
    coordinates?: Coordinates;
    scrollZoom?: boolean;
    isDrawable?: boolean;

    setCoordinates: (coords: Coordinates) => void;
    onChange?: () => void;
};

export const Map: React.FC<Props> = ({
    coordinates,
    scrollZoom = true,
    setCoordinates,
    onChange = () => {},
    isDrawable = false,
}) => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const wrapper = useRef<HTMLDivElement | null>(null);
    const map = useRef<mapboxgl.Map>(null);
    const drawRef = useRef<MapboxDraw | null>(null);
    const [_, setActiveDrawMode] = useState('');
    const { isMobile } = useBreakpoints();
    const [newCoordinates, setNewCoordinates] = useState<LngLat | null>(null);

    const { palette } = useTheme();

    const svg = `<svg width="154" height="154" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.05" cx="76.9788" cy="76.9788" r="76.9788" fill="#FF4D14" />
    <circle opacity="0.05" cx="76.9787" cy="76.9787" r="40.2658" fill="#FF4D14" />
    <g filter="url(#filter0_f_168_47899)">
        <circle cx="76.8285" cy="76.8295" r="19.391" fill="#FF4D14" />
    </g>
    <circle cx="76.3866" cy="76.3868" r="11.5468" fill="#FF4D14" stroke="#101010" stroke-width="0.592144" />
    <path
        d="M79.6839 74.6045C79.5225 72.9444 78.1789 71.6494 76.5459 71.6494C75.6775 71.6494 74.9345 71.9703 74.3204 72.6084C73.7063 73.2465 72.2085 74.9414 71.6494 80.5278L78.527 80.5316C78.6505 79.2997 78.8607 78.2306 79.1131 77.313L82.308 76.5065L79.6839 74.6045ZM76.7082 76.1441C76.0752 76.1441 75.5621 75.6087 75.5621 74.948C75.5621 74.2873 76.0752 73.7518 76.7082 73.7518C77.3412 73.7518 77.8543 74.2873 77.8543 74.948C77.8534 75.6087 77.3403 76.1441 76.7082 76.1441Z"
        fill="#101010" />
    <defs>
        <filter id="filter0_f_168_47899" x="46.3569" y="46.3579" width="60.9431" height="60.9434"
            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="5.54028" result="effect1_foregroundBlur_168_47899" />
        </filter>
    </defs>
</svg>`;

    const customMarker = document && document.createElement('div');
    customMarker.innerHTML = svg;
    const marker = useMemo(() => new mapboxgl.Marker(customMarker), []);

    useEffect(() => {
        if (map.current) return;
        // @ts-ignore
        map.current = new mapboxgl.Map({
            container: mapContainer.current || '',
            style: getMapStyleId(palette.mode),
            zoom: 6,
            minZoom: 4,
            scrollZoom,
            logoPosition: 'bottom-right',
            maxBounds: [
                [-180, -72],
                [180, 72],
            ],
            center:
                coordinates?.lat && coordinates?.lon
                    ? [coordinates.lon, coordinates.lat]
                    : [9.56413004748697, 51.65120378622913],
            trackResize: true,
            crossSourceCollisions: false,
            cooperativeGestures: isMobile,
        });
        // Инициализация контролов рисования
        let modes = MapboxDraw.modes;
        modes = GeodesicDraw.enable(modes);
        const draw = new MapboxDraw({
            displayControlsDefault: false,
            modes: {
                ...modes,
            },
            styles: customDrawStyles,
        });

        drawRef.current = draw;

        map.current.on('load', () => {
            if (map.current) {
                map.current.addControl(draw, 'top-left');
                // Слушаем события создания, обновления и удаления
                map.current.on('draw.create' as MapEventType, (e: AnyObject) => {
                    console.log('Создано:', e.features);
                });

                map.current.on('draw.update' as MapEventType, (e: AnyObject) => {
                    console.log('Обновлено:', e.features);
                });

                map.current.on('draw.delete' as MapEventType, (e: AnyObject) => {
                    console.log('Удалено:', e.features);
                });
            }
        });

        map.current.addControl(
            new mapboxgl.FullscreenControl({ container: wrapper.current ?? undefined }),
            'bottom-right',
        );
        map.current.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'bottom-right');

        const geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true,
            },
            showUserHeading: false,
            fitBoundsOptions: {
                animate: false,
            },
        });

        map.current.addControl(geolocate, 'bottom-right');
        map.current.getCanvas().style.cursor = 'pointer';

        const addMarker = (event: mapboxgl.MapTouchEvent | mapboxgl.MapMouseEvent) => {
            if (!map.current) return;
            const coords = event.lngLat;
            const latlng = new mapboxgl.LngLat(coords.lng, coords.lat);
            setCoordinates({ lat: coords.lat, lon: coords.lng });
            setNewCoordinates(latlng);
        };

        geolocate.on('geolocate', (e: any) => {
            if (!map.current) return;
            const latlng = new mapboxgl.LngLat(e.coords.longitude as number, e.coords.latitude as number);
            map.current?.flyTo({ center: [latlng.lng, latlng.lat], essential: true });
        });

        // map.current.on('click', addMarker);
    }, []);

    useEffect(() => {
        if (!newCoordinates || !map.current) return;

        marker.setLngLat(newCoordinates).addTo(map.current);
        onChange();
    }, [marker, newCoordinates]);

    const handleChangeMode = (key: string) => {
        if (!map.current) return;

        setActiveDrawMode(key);
        drawRef.current?.changeMode(key);
    };

    return (
        <S.MapContainer width="100%" height="100%" position="relative" className="wrapper" ref={wrapper}>
            <Box width="100%" height="100%" ref={mapContainer} className="map-container" />
            {isDrawable && (
                <MapDrawModeTabs activeMode={drawRef?.current?.getMode?.()} onChangeMode={handleChangeMode} />
            )}
        </S.MapContainer>
    );
};
