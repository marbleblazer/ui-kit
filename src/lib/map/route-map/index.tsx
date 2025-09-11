import mapboxgl from 'mapbox-gl';
import { BaseMap, IBaseMapProps } from '../base-map';
import { DataType } from '../map.types';
import { debounce, useTheme } from '@mui/material';
import { useCallback, useEffect, useRef } from 'react';
import bboxTurf from '@turf/bbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { TPointType, TProcessedRoute } from './types';
import { RouteInfoControl } from './route-info-control';
import { useTranslation } from 'react-i18next';
import {
    addRouteLayers,
    addRouteMarkerLayers,
    addRouteMarkerImages,
    addRouteClusterLayers,
} from './helpers/add-route-layers';
import { createTimeLabelElement } from './helpers/create-time-label-element';
import { createRouteMarkerElement } from './helpers/create-route-marker-element';

mapboxgl.accessToken = (import.meta.env.VITE_UI_MAPBOX_TOKEN || '') as string;

interface IRouteMapProps extends Omit<IBaseMapProps, 'mapRef' | 'onMapLoad'> {
    data?: TProcessedRoute | null;
}

export const RouteMap: React.FC<IRouteMapProps> = ({ data, ...baseProps }) => {
    const theme = useTheme();
    const { t } = useTranslation('uiKit');

    const map = useRef<mapboxgl.Map>(null);
    const markersRef = useRef<mapboxgl.Marker[]>([]);
    const pendingData = useRef<DataType | null>(null);
    const controlRef = useRef<RouteInfoControl | null>(null);
    const hasFitted = useRef(false);
    const currentRouteId = useRef<number | null>(null);

    const clearMap = useCallback(() => {
        if (!map.current) return;

        markersRef.current.forEach((marker) => marker.remove());
        markersRef.current = [];

        const lineSource = map.current.getSource('route-lines-source') as mapboxgl.GeoJSONSource;
        const pointsSource = map.current.getSource('route-points-source') as mapboxgl.GeoJSONSource;

        if (lineSource) {
            lineSource.setData({
                type: 'FeatureCollection',
                features: [],
            });
        }

        if (pointsSource) {
            pointsSource.setData({
                type: 'FeatureCollection',
                features: [],
            });
        }

        if (map.current.getLayer('route-labels-layer')) {
            map.current.removeLayer('route-labels-layer');
        }

        if (map.current.getSource('route-labels')) {
            map.current.removeSource('route-labels');
        }
    }, []);

    const addDataToMap = useCallback(
        (localData?: DataType) => {
            if (!map.current) return;

            // Добавляем источники данных
            if (!map.current.getSource('route-lines-source')) {
                map.current.addSource('route-lines-source', {
                    type: 'geojson',
                    data: { type: 'FeatureCollection', features: [] },
                });
            }

            if (!map.current.getSource('route-points-source')) {
                map.current.addSource('route-points-source', {
                    type: 'geojson',
                    data: { type: 'FeatureCollection', features: [] },
                    filter: [
                        'in',
                        ['get', 'pointType'],
                        ['literal', ['waypoint_passed', 'waypoint_next', 'waypoint_future']],
                    ],
                    cluster: true,
                    clusterMaxZoom: 18,
                    clusterRadius: 50,
                });
            }

            clearMap();

            // Добавляем слои и изображения после очистки
            addRouteLayers({ mapCurrent: map.current, theme });
            addRouteMarkerImages({ mapCurrent: map.current, theme });
            addRouteMarkerLayers({ mapCurrent: map.current, theme });
            addRouteClusterLayers({ mapCurrent: map.current, theme });

            const lineSource = map.current.getSource('route-lines-source') as mapboxgl.GeoJSONSource;
            const pointsSource = map.current.getSource('route-points-source') as mapboxgl.GeoJSONSource;

            if (!lineSource || !pointsSource) {
                console.error('Sources not found');

                return;
            }

            if (!localData || localData.type !== 'FeatureCollection') {
                lineSource.setData({ type: 'FeatureCollection', features: [] });
                pointsSource.setData({ type: 'FeatureCollection', features: [] });

                return;
            }

            const lineFeatures: GeoJSON.Feature[] = [];
            const pointFeatures: GeoJSON.Feature[] = [];
            const timeLabelFeatures: GeoJSON.Feature[] = [];

            for (const feature of localData.features) {
                const props = feature.properties;

                if (props?.featureType === 'point' && feature.geometry.type === 'Point') {
                    if (props.pointType === 'time_label') {
                        timeLabelFeatures.push(feature);
                    } else {
                        // Добавляем точки маршрута в источник для стилей карты
                        pointFeatures.push({
                            ...feature,
                            properties: {
                                ...props,
                                pointType: props.pointType,
                                label: props.label,
                            },
                        });
                    }

                    const markerElement = createRouteMarkerElement({
                        theme,
                        pointType: props.pointType as TPointType,
                        status: data?.meta.type,
                    });
                    const marker = new mapboxgl.Marker({ element: markerElement })
                        .setLngLat(feature.geometry.coordinates as [number, number])
                        .addTo(map.current!);
                    markersRef.current.push(marker);
                } else if (props?.featureType === 'line') {
                    lineFeatures.push(feature);
                }
            }

            lineSource.setData({
                type: 'FeatureCollection',
                features: lineFeatures,
            });

            pointsSource.setData({
                type: 'FeatureCollection',
                features: pointFeatures,
            });

            if (timeLabelFeatures.length > 0) {
                createTimeLabelElement({ map: map.current, features: timeLabelFeatures, theme });
            }

            if (localData.features.length > 0 && !hasFitted.current) {
                const bbox = bboxTurf(localData);
                map.current.fitBounds(bbox as [number, number, number, number], { padding: 80, maxZoom: 15 });
                hasFitted.current = true;
            }
        },
        [clearMap, data, theme],
    );

    const onMapLoad = useCallback(() => {
        if (!map.current) return;

        const finalData = pendingData.current || data?.features;
        pendingData.current = null;
        addDataToMap(finalData);
    }, [addDataToMap, data]);

    useEffect(() => {
        if (!data) return;

        const newId = data.meta?.id;

        if (!newId) {
            hasFitted.current = false;

            return;
        }

        if (newId !== currentRouteId.current) {
            currentRouteId.current = newId;
            hasFitted.current = false;
        }
    }, [data]);

    useEffect(() => {
        const mapInstance = map.current;

        if (!mapInstance) return;

        const stopAutoFit = () => {
            hasFitted.current = true;
        };

        mapInstance.on('dragstart', stopAutoFit);
        mapInstance.on('zoomstart', stopAutoFit);

        return () => {
            mapInstance.off('dragstart', stopAutoFit);
            mapInstance.off('zoomstart', stopAutoFit);
        };
    }, []);

    useEffect(() => {
        if (!map.current) return;

        if (data) {
            if (!controlRef.current) {
                controlRef.current = new RouteInfoControl(data.meta, t);
                map.current.addControl(controlRef.current, 'bottom-left');
            } else {
                controlRef.current.update(data.meta);
            }
        } else {
            if (controlRef.current) {
                map.current.removeControl(controlRef.current);
                controlRef.current = null;
            }
        }
    }, [data, t]);

    useEffect(() => {
        const mapCurrent = map.current;

        if (!mapCurrent) return;

        const debouncedUpdate = debounce(() => {
            addDataToMap(data?.features);
        }, 100);

        if (mapCurrent?.isStyleLoaded()) {
            debouncedUpdate();
        } else {
            pendingData.current = data?.features || null;
        }

        mapCurrent.on('style.load', debouncedUpdate);

        return () => {
            debouncedUpdate.clear();
            mapCurrent.off('style.load', debouncedUpdate);

            if (mapCurrent) mapCurrent.stop();
        };
    }, [addDataToMap, data]);

    return <BaseMap {...baseProps} mapRef={map} onMapLoad={onMapLoad} />;
};
