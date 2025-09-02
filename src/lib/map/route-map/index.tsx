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
import { addRouteLayers } from './helpers/add-route-layers';
import { createRouteMarkerElement } from './helpers/create-route-marker-element';
import { createTimeLabelElement } from './helpers/create-time-label-element';

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

    const clearMap = useCallback(() => {
        if (!map.current) return;

        markersRef.current.forEach((marker) => marker.remove());
        markersRef.current = [];

        const source = map.current.getSource('route-lines-source') as mapboxgl.GeoJSONSource;

        if (source) {
            source.setData({
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

            if (!map.current.getSource('route-lines-source')) {
                map.current.addSource('route-lines-source', {
                    type: 'geojson',
                    data: { type: 'FeatureCollection', features: [] },
                });
            }

            addRouteLayers({ mapCurrent: map.current, theme });

            clearMap();

            const source = map.current.getSource('route-lines-source') as mapboxgl.GeoJSONSource;

            if (!source) {
                console.error('Source route-lines-source not found');

                return;
            }

            if (!localData || localData.type !== 'FeatureCollection') {
                source.setData({ type: 'FeatureCollection', features: [] });

                return;
            }

            const lineFeatures: GeoJSON.Feature[] = [];
            const timeLabelFeatures: GeoJSON.Feature[] = [];

            for (const feature of localData.features) {
                const props = feature.properties;

                if (props?.featureType === 'point' && feature.geometry.type === 'Point') {
                    if (props.pointType === 'time_label') {
                        timeLabelFeatures.push(feature);
                    }

                    const markerElement = createRouteMarkerElement({
                        theme,
                        pointType: props.pointType as TPointType,
                        label: props.label as string,
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

            source.setData({
                type: 'FeatureCollection',
                features: lineFeatures,
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

        if (mapCurrent?.isStyleLoaded()) {
            addDataToMap(data?.features);
        } else {
            pendingData.current = data?.features || null;
        }

        const debouncedUpdate = debounce(() => {
            addDataToMap(data?.features);
        }, 100);

        mapCurrent.on('style.load', debouncedUpdate);

        return () => {
            debouncedUpdate.clear();
            mapCurrent.off('style.load', debouncedUpdate);

            if (mapCurrent) mapCurrent.stop();
        };
    }, [addDataToMap, data]);

    return <BaseMap {...baseProps} mapRef={map} onMapLoad={onMapLoad} />;
};
