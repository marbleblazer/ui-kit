import { useCallback, useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import bboxTurf from '@turf/bbox';
import 'mapbox-gl/dist/mapbox-gl.css';

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Coordinates } from './map.types';
import { renderLineStringPoints, renderPoints } from './trip-map/utils';
import { BaseMap, IBaseMapProps } from './base-map';
import { customDrawStyles, typedGeodesicDraw } from './constance';
import { debounce, useTheme } from '@mui/material';

type DataType = GeoJSON.GeoJSON<GeoJSON.Geometry, GeoJSON.GeoJsonProperties> | null;

interface IFeatureMapProps extends Omit<IBaseMapProps, 'mapRef' | 'onMapLoad'> {
    data?: GeoJSON.GeoJSON | null; // only one feature, if you want provide feature collection - develop it
    coordinates?: Coordinates;
    isLineMarkersNeeded?: boolean;
    accessToken?: string;
    centeringCoordinates?: Coordinates;
}

export const FeatureMap: React.FC<IFeatureMapProps> = ({
    data,
    centeringCoordinates, // Координаты, по которым происходит центрирование
    isLineMarkersNeeded = true, // Флаг на отображение точек между стартовой и конечной на LineString
    ...baseProps
}) => {
    const theme = useTheme();
    const themeRef = useRef(theme);

    const map = useRef<mapboxgl.Map>(null);

    const markersRef = useRef<mapboxgl.Marker[]>([]);
    const drawRef = useRef<MapboxDraw | null>(null);

    const isMapFittedBoundsRef = useRef(false);

    const onMapLoad = (localData?: DataType) => {
        if (!map.current) return;
        // Для работы с источником mapbox-gl-draw-cold
        let modes = MapboxDraw.modes;
        modes = typedGeodesicDraw.enable(modes);
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
                    const popupMarkup: string = feature?.properties?.popupMarkup as string;

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
            } else if (!isMapFittedBoundsRef.current) {
                // bbox logic
                isMapFittedBoundsRef.current = true;
                const bbox = bboxTurf(localData);
                const [west, south, east, north] = bbox;
                map.current.fitBounds([west, south, east, north], { padding: 50, duration: 100, essential: true });
            }
        },
        [isLineMarkersNeeded],
    );

    useEffect(() => {
        themeRef.current = theme;
    }, [theme]);

    useEffect(() => {
        const mapCurrent = map.current;

        if (!mapCurrent) return;

        const updateMap = debounce(() => {
            if (mapCurrent?.isStyleLoaded()) {
                addDataToMap(data);
            }

            mapCurrent?.on('style.load', () => addDataToMap(data));
        }, 100);

        updateMap();

        return () => {
            updateMap?.clear();

            if (mapCurrent) mapCurrent.stop();
        };
    }, [addDataToMap, data, theme]);

    // Центрирование карты по координатам centeringCoordinates
    useEffect(() => {
        if (map.current && centeringCoordinates?.lat && centeringCoordinates?.lon) {
            map.current.flyTo({ center: [centeringCoordinates?.lon, centeringCoordinates?.lat], essential: true });
        }
    }, [centeringCoordinates]);

    return <BaseMap {...baseProps} mapRef={map} onMapLoad={() => onMapLoad(data)} />;
};
