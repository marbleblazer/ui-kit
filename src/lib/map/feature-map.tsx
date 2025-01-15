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
import { debounce, useTheme } from '@mui/material';

mapboxgl.accessToken = import.meta.env.VITE_UI_MAPBOX_TOKEN || '';

type DataType = GeoJSON.GeoJSON<GeoJSON.Geometry, GeoJSON.GeoJsonProperties> | null;

interface IFeatureMapProps extends Omit<IBaseMapProps, 'mapRef' | 'onMapLoad'> {
    data?: GeoJSON.GeoJSON | null; // only one feature, if you want provide feature collection - develop it
    coordinates?: Coordinates;
    scrollZoom?: boolean;
    isLineMarkersNeeded?: boolean;
    accessToken?: string;
    centeringCoordinates?: Coordinates;
}

export const FeatureMap: React.FC<IFeatureMapProps> = ({
    data,
    coordinates,
    scrollZoom = true,
    centeringCoordinates, // Координаты, по которым происходит центрирование
    isLineMarkersNeeded = true, // Флаг на отображение точек между стартовой и конечной на LineString
    ...baseProps
}) => {
    const theme = useTheme();
    const markersRef = useRef<mapboxgl.Marker[]>([]);
    const map = useRef<mapboxgl.Map>(null);
    const drawRef = useRef<MapboxDraw | null>(null);
    const themeRef = useRef(theme);

    const onMapLoad = (localData?: DataType) => {
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

        addDataToMap(localData);
    };

    const clearMap = () => {
        if (!map.current) return;

        // Удаление всех маркеров
        markersRef.current.forEach((marker) => marker.remove());
        markersRef.current = []; // Очистка массива маркеров после их удаления

        drawRef.current && drawRef.current.deleteAll();
    };

    const addDataToMap = useCallback(
        (localData?: DataType) => {
            if (!map.current) return;

            clearMap();

            let singleMarkerCenter: number[] | null = null;

            if (!localData) {
                (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData({
                    type: 'FeatureCollection',
                    features: [],
                });

                return;
            }

            if (localData.type === 'FeatureCollection') {
                for (const feature of localData.features) {
                    const geometry = feature.geometry;
                    const popupMarkup: string = feature?.properties?.popupMarkup;

                    if (geometry.type === 'Point') {
                        if (localData.features.length === 1) {
                            singleMarkerCenter = geometry.coordinates;
                        }
                        renderPoints(geometry, popupMarkup, map, markersRef, themeRef.current);
                    } else if (geometry.type === 'LineString') {
                        // Отрисовка маркеров на линии
                        renderLineStringPoints(geometry, map, markersRef, isLineMarkersNeeded, themeRef.current);
                    }
                }
                (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData({
                    type: 'FeatureCollection',
                    features: localData.features,
                });
            } else {
                (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData(localData);
            }

            if (singleMarkerCenter?.length === 2) {
                map.current.flyTo({ center: singleMarkerCenter as [number, number], essential: true });
            } else {
                // bbox logic
                const bbox = bboxTurf(localData);
                const [west, south, east, north] = bbox;
                map.current.fitBounds([west, south, east, north], { padding: 50, duration: 100, essential: true });
            }
        },
        [theme],
    );

    useEffect(() => {
        themeRef.current = theme;
    }, [theme]);

    useEffect(() => {
        if (!map.current) return;

        const handleStyleLoad = () => addDataToMap(data);

        const updateMap = debounce(() => {
            if (map.current?.isStyleLoaded()) {
                addDataToMap(data);
            } else {
                map.current?.on('style.load', handleStyleLoad);
            }
        }, 100);

        updateMap();

        return () => {
            map.current?.off('style.load', handleStyleLoad);
            updateMap?.clear();
            if (map.current) map.current.stop();
        };
    }, [data, theme]);

    // Центрирование карты по координатам centeringCoordinates
    useEffect(() => {
        if (map.current && centeringCoordinates?.lat && centeringCoordinates?.lon) {
            map.current.flyTo({ center: [centeringCoordinates?.lon, centeringCoordinates?.lat], essential: true });
        }
    }, [centeringCoordinates]);

    return <BaseMap {...baseProps} mapRef={map} onMapLoad={() => onMapLoad(data)} />;
};
