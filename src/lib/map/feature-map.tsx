import mapboxgl from 'mapbox-gl';
import { useCallback, useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import bboxTurf from '@turf/bbox';
import 'mapbox-gl/dist/mapbox-gl.css';

import * as GeodesicDraw from 'mapbox-gl-draw-geodesic';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Coordinates } from './map.types';
import { renderLineStringPoints, renderPoints } from './trip-map/utils';
import { BaseMap, IBaseMapProps } from './base-map';
import { customDrawStyles } from './constance';
import { useTheme } from '@mui/material';

mapboxgl.accessToken = import.meta.env.VITE_UI_MAPBOX_TOKEN || '';

interface IFeatureMapProps extends Omit<IBaseMapProps, 'mapRef' | 'onMapLoad'> {
    data?: GeoJSON.GeoJSON | null; // only one feature, if you want provide feature collection - develop it
    coordinates?: Coordinates;
    scrollZoom?: boolean;
    isLineMarkersNeeded?: boolean;
    accessToken?: string;
    centeringCoordinates?: Coordinates;
    animateLineId?: number; // id по которому запускается анимация
    animationDuration?: number;
    onAnimationEnd?: () => void;
}

export const FeatureMap: React.FC<IFeatureMapProps> = ({
    data,
    coordinates,
    scrollZoom = true,
    centeringCoordinates, // Координаты, по которым происходит центрирование
    isLineMarkersNeeded = true, // Флаг на отображение точек между стартовой и конечной на LineString
    animateLineId,
    animationDuration = 3000,
    onAnimationEnd,
    ...baseProps
}) => {
    const theme = useTheme();
    const markersRef = useRef<mapboxgl.Marker[]>([]);
    const map = useRef<mapboxgl.Map>(null);
    const drawRef = useRef<MapboxDraw | null>(null);

    const onMapLoad = () => {
        if (!map.current) return;

        // Для работы с источником mapbox-gl-draw-cold
        let modes = MapboxDraw.modes;
        modes = GeodesicDraw.enable(modes);
        const draw = new MapboxDraw({
            displayControlsDefault: false,
            modes: {
                ...modes,
            },
            styles: customDrawStyles(theme.palette),
        });

        drawRef.current = draw;
        map.current.addControl(draw);

        addDataToMap();
    };

    const clearMap = useCallback(() => {
        if (!map.current) return;

        // Удаление всех маркеров
        markersRef.current.forEach((marker) => marker.remove());
        markersRef.current = []; // Очистка массива маркеров после их удаления

        drawRef.current && drawRef.current.deleteAll();
    }, []);

    const addDataToMap = useCallback(() => {
        if (!map.current) return;

        clearMap();

        let singleMarkerCenter: number[] | null = null;

        if (!data) {
            (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData({
                type: 'FeatureCollection',
                features: [],
            });

            return;
        }

        if (data.type === 'FeatureCollection') {
            for (const feature of data.features) {
                const geometry = feature.geometry;
                const popupMarkup: string = feature?.properties?.popupMarkup;

                if (geometry.type === 'Point') {
                    if (data.features.length === 1) {
                        singleMarkerCenter = geometry.coordinates;
                    }
                    renderPoints(geometry, popupMarkup, map, markersRef, theme);
                } else if (geometry.type === 'LineString') {
                    // Отрисовка маркеров на линии
                    renderLineStringPoints(geometry, map, markersRef, isLineMarkersNeeded, theme);
                }
            }
            (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData({
                type: 'FeatureCollection',
                features: data.features,
            });
        } else {
            (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData(data);
        }

        if (singleMarkerCenter?.length === 2) {
            map.current.flyTo({ center: singleMarkerCenter as [number, number], essential: true });
        } else {
            // bbox logic
            const bbox = bboxTurf(data, { recompute: true });
            const [west, south, east, north] = bbox;
            map.current.fitBounds([west, south, east, north], { padding: 50 });
        }
    }, [data, theme]);

    useEffect(() => {
        if (!map.current) return;

        if (map.current.isStyleLoaded()) {
            addDataToMap();
        }

        map.current.on('style.load', () => {
            addDataToMap();
        });
    }, [data, theme]);

    // Центрирование карты по координатам centeringCoordinates
    useEffect(() => {
        if (map.current && centeringCoordinates?.lat && centeringCoordinates?.lon) {
            map.current.flyTo({ center: [centeringCoordinates?.lon, centeringCoordinates?.lat], essential: true });
        }
    }, [centeringCoordinates]);

    return <BaseMap {...baseProps} mapRef={map} onMapLoad={() => onMapLoad()} />;
};
