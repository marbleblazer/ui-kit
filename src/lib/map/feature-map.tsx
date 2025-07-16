import { useCallback, useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import bboxTurf from '@turf/bbox';
import 'mapbox-gl/dist/mapbox-gl.css';

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Coordinates, IFeatureMapVariants } from './map.types';
import { BaseMap, IBaseMapProps } from './base-map';
import { debounce, Palette, useTheme } from '@mui/material';
import { renderLineStringPoints, renderPoints } from './helpers/utils';
import { customDrawStyles, typedGeodesicDraw } from './constance';

type DataType = GeoJSON.GeoJSON<GeoJSON.Geometry, GeoJSON.GeoJsonProperties> | null;

interface IFeatureMapProps extends Omit<IBaseMapProps, 'mapRef' | 'onMapLoad'> {
    data?: GeoJSON.GeoJSON | null; // only one feature, if you want provide feature collection - develop it
    coordinates?: Coordinates;
    isLineMarkersNeeded?: boolean;
    accessToken?: string;
    centeringCoordinates?: Coordinates;
    isFirstFocusOnly?: boolean;
    variant?: IFeatureMapVariants;
}

export const FeatureMap: React.FC<IFeatureMapProps> = ({
    data,
    isFirstFocusOnly,
    centeringCoordinates, // Координаты, по которым происходит центрирование
    isLineMarkersNeeded = true, // Флаг на отображение точек между стартовой и конечной на LineString
    variant = 'base',
    ...baseProps
}) => {
    const theme = useTheme();

    const map = useRef<mapboxgl.Map>(null);
    const markersRef = useRef<mapboxgl.Marker[]>([]);
    const drawRef = useRef<MapboxDraw | null>(null);

    /** В некоторых случаях данные устанавливаются быстрее, чем карта успевает загрузиться */
    const pendingData = useRef<DataType | undefined>(undefined);

    const [isMapFittedBounds, setIsMapFittedBounds] = useState(false);

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
                    const popupNode = feature?.properties?.popupNode as Node;
                    const specificMarkerIcon = feature?.properties?.specificMarkerIcon as (theme: Palette) => string;

                    if (geometry.type === 'Point') {
                        if (localData.features.length === 1) {
                            singleMarkerCenter = geometry.coordinates;
                        }
                        renderPoints({
                            geometry,
                            popupNode,
                            map,
                            markersRef,
                            theme,
                            specificMarkerIcon,
                            variant,
                        });
                    } else if (geometry.type === 'LineString') {
                        renderLineStringPoints({
                            geometry,
                            map,
                            markersRef,
                            isLineMarkersNeeded,
                            theme,
                        });
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
            } else if (!isMapFittedBounds) {
                // bbox logic
                setIsMapFittedBounds(true);
                const bbox = bboxTurf(localData);
                const [west, south, east, north] = bbox;
                map.current.fitBounds([west, south, east, north], { padding: 50, duration: 100, essential: true });
            }
        },
        [isLineMarkersNeeded, isMapFittedBounds, theme, variant],
    );

    const onMapLoad = useCallback(() => {
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

        const finalData = pendingData.current || data;
        pendingData.current = null;

        addDataToMap(finalData);
    }, [addDataToMap, data, theme.palette]);

    useEffect(() => {
        const mapCurrent = map.current;

        if (!mapCurrent) return;

        if (mapCurrent?.isStyleLoaded()) {
            addDataToMap(data);
        } else {
            pendingData.current = data || null;
        }

        const debouncedUpdate = debounce(() => {
            addDataToMap(data);
        }, 100);

        mapCurrent.on('style.load', debouncedUpdate);

        return () => {
            !isFirstFocusOnly && setIsMapFittedBounds(false);
            debouncedUpdate.clear();
            mapCurrent.off('style.load', debouncedUpdate);
        };
    }, [addDataToMap, data, theme, isFirstFocusOnly]);

    // Центрирование карты по координатам centeringCoordinates
    useEffect(() => {
        if (map.current && centeringCoordinates?.lat && centeringCoordinates?.lon) {
            map.current.flyTo({ center: [centeringCoordinates?.lon, centeringCoordinates?.lat], essential: true });
        }
    }, [centeringCoordinates]);

    return <BaseMap {...baseProps} mapRef={map} onMapLoad={onMapLoad} />;
};
