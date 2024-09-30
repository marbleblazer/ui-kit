import { Box, useTheme } from '@mui/material';
import mapboxgl, { MapEventType } from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import bboxTurf from '@turf/bbox';
import circleTurf from '@turf/circle';

import { getUiKitMapStyleId } from '@chirp/ui/helpers/mapUtils';
import { useBreakpoints } from '@chirp/ui/hooks/useBreakpoints';
import * as GeodesicDraw from 'mapbox-gl-draw-geodesic';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import * as S from './style';
import { Coordinates } from './map.types';
import { MapDrawModeTabs } from './map-draw-tabs';
import { AnyObject } from '@chirp/ui/helpers/global';
import { customDrawStyles } from './constance';
import { mapMarkerSvgString } from './mp-marker-string';

mapboxgl.accessToken = import.meta.env.VITE_UI_MAPBOX_TOKEN || '';

type Props = {
    coordinates?: Coordinates;
    scrollZoom?: boolean;
    isDrawable?: boolean;
    isSingleDraw?: boolean; // draw only one feature, after draw mode change - delete all features
    data?: GeoJSON.Feature; // only one feature, if you want provide feature collection - develop it
    onChange?: (value: GeoJSON.Feature[]) => void;
    accessToken?: string;
    getMapStyleId?: (themeMode: string) => string;
};

export const Map: React.FC<Props> = ({
    coordinates,
    scrollZoom = true,
    onChange = () => {},
    data,
    isDrawable = false,
    isSingleDraw = true,
    getMapStyleId = getUiKitMapStyleId,
}) => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const wrapper = useRef<HTMLDivElement | null>(null);
    const map = useRef<mapboxgl.Map>(null);
    const drawRef = useRef<MapboxDraw | null>(null);
    const [_, setActiveDrawMode] = useState('');
    const { isMobile } = useBreakpoints();

    const { palette } = useTheme();

    const customMarker = document && document.createElement('div');
    customMarker.innerHTML = mapMarkerSvgString;

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
                    : [19.56413004748697, 11.65120378622913],
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
                    onChange(e.features as GeoJSON.Feature[]);
                });

                map.current.on('draw.update' as MapEventType, (e: AnyObject) => {
                    console.log('Обновлено:', e.features);
                    onChange(e.features as GeoJSON.Feature[]);
                });

                map.current.on('draw.delete' as MapEventType, (e: AnyObject) => {
                    console.log('Удалено:', e.features);
                    onChange(e.features as GeoJSON.Feature[]);
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

        geolocate.on('geolocate', (e: any) => {
            if (!map.current) return;
            const latlng = new mapboxgl.LngLat(e.coords.longitude as number, e.coords.latitude as number);
            map.current?.flyTo({ center: [latlng.lng, latlng.lat], essential: true });
        });
    }, []);

    useEffect(() => {
        if (!map.current || !data) return;

        map.current.on('load', () => {
            if (!map.current || !data) return;
            if (isDrawable) {
                if (drawRef.current) drawRef.current.add(data);
            } else {
                (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData(data);
            }

            if (GeodesicDraw.isCircle(data)) {
                const circleCenter = GeodesicDraw.getCircleCenter(data);
                const circleRadius = GeodesicDraw.getCircleRadius(data);
                const circle = circleTurf(circleCenter, circleRadius, { units: 'kilometres', steps: 64 });
                const bbox = bboxTurf(circle);
                const [west, south, east, north] = bbox;
                map.current.fitBounds([west, south, east, north], { padding: 50 });
            } else if (data.geometry.type === 'Polygon' || data.geometry.type === 'LineString') {
                const bbox = bboxTurf(data, { recompute: true });
                const [west, south, east, north] = bbox;
                map.current.fitBounds([west, south, east, north], { padding: 50 });
            }
        });
    }, [data, isDrawable]);

    const handleChangeMode = (key: string) => {
        if (!map.current || !drawRef.current) return;
        isSingleDraw && drawRef.current?.deleteAll();
        setActiveDrawMode(key);
        drawRef.current.changeMode(key);
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
