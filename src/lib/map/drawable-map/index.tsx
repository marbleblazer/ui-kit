import mapboxgl, { MapEventType } from 'mapbox-gl';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import bboxTurf from '@turf/bbox';
import circleTurf from '@turf/circle';

import { checkCirclePolygon, getCircleGeometryFromPolygon } from '@chirp/ui/helpers/map-utils';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Coordinates } from '../map.types';
import { MapDrawModeTabs } from './map-draw-tabs';
import { AnyObject } from '@chirp/ui/helpers/global';
import { customDrawStyles, typedGeodesicDraw } from '../constance';
import { BaseMap, IBaseMapProps } from '../base-map';
import { mapMarkerEndSvgContainer, mapMarkerStartSvgContainer } from '../svg-containers';
import { useTheme } from '@mui/material';

mapboxgl.accessToken = (import.meta.env.VITE_UI_MAPBOX_TOKEN || '') as string;

// FYI: withStartEndLineIndicators - for display one single line.
// if you want display array of geojson - develop it
interface IDrawableMapProps extends Omit<IBaseMapProps, 'mapRef' | 'onMapLoad'> {
    coordinates?: Coordinates;
    scrollZoom?: boolean;
    data?: GeoJSON.GeoJSON | null; // only one feature, if you want provide feature collection - develop it
    isSingleDraw?: boolean; // draw only one feature, after draw mode change - delete all features
    drawMode?: 'draw_line_string'; // if you want change default draw mode, tab modes will not show
    onChange?: (value: GeoJSON.GeoJSON) => void;
    withStartEndLineIndicators?: boolean; // for display custom start and end marker indicators
    getMapStyleId?: (themeMode: string) => string;
}

export const DrawableMap: React.FC<IDrawableMapProps> = memo((props) => {
    const {
        data,
        isSingleDraw = true,
        onChange = () => {},
        withStartEndLineIndicators,
        drawMode,
        ...baseProps
    } = props;

    const theme = useTheme();
    const markersRef = useRef<HTMLDivElement[]>([]);
    const map = useRef<mapboxgl.Map>(null);
    const drawRef = useRef<MapboxDraw | null>(null);
    const [_, setActiveDrawMode] = useState('');

    const handleChange = (feature: GeoJSON.Feature) => {
        if (!map.current) return;

        if (feature.properties && 'circleRadius' in feature.properties) {
            const circleCenter = typedGeodesicDraw.getCircleCenter(feature);
            const circleRadius = typedGeodesicDraw.getCircleRadius(feature);
            const circle = circleTurf(circleCenter, circleRadius, { units: 'kilometres', steps: 64 });
            onChange(circle);
        } else {
            onChange(feature);
        }
    };

    const onMapLoad = (defaultDrawMode?: string) => {
        if (!map.current) return;

        // Инициализация контролов рисования
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
        map.current.addControl(draw, 'top-left');
        // Слушаем события создания, обновления и удаления
        map.current.on('draw.create' as MapEventType, (e: AnyObject) => {
            const features = e.features as GeoJSON.Feature[];
            handleChange(features[0]);
        });

        map.current.on('draw.update' as MapEventType, (e: AnyObject) => {
            const features = e.features as GeoJSON.Feature[];
            handleChange(features[0]);
        });

        map.current.on('draw.delete' as MapEventType, (e: AnyObject) => {
            const features = e.features as GeoJSON.Feature[];
            handleChange(features[0]);
        });

        if (defaultDrawMode) {
            drawRef.current.changeMode(defaultDrawMode);
        }
        addDataToMap();
    };

    const addDataToMap = useCallback(
        (geoData: GeoJSON.GeoJSON | null = null) => {
            console.log('addDataToMap');

            if (!map.current || !drawRef.current) return;

            drawRef.current.deleteAll();

            if (drawMode) {
                markersRef.current.forEach((marker) => marker.remove());
                drawRef.current.deleteAll();
                drawRef.current.changeMode(drawMode);
            }

            if (!geoData) {
                drawMode && drawRef.current.changeMode(drawMode);

                return;
            }

            const isCircleData = checkCirclePolygon(geoData);

            // draw logic
            if (isCircleData) {
                const resolvedCircleGeometry = getCircleGeometryFromPolygon(geoData);

                if (resolvedCircleGeometry) {
                    const { center, radius } = resolvedCircleGeometry;

                    if (isCircleData) {
                        const circle = typedGeodesicDraw.createCircle(center, radius);
                        drawRef.current.add(circle);
                    }
                }
            } else {
                if (geoData.type === 'Feature' && withStartEndLineIndicators) {
                    if (geoData.geometry.type === 'LineString') {
                        const [startPoint, endPoint] = [
                            geoData.geometry.coordinates[0],
                            geoData.geometry.coordinates[geoData.geometry.coordinates.length - 1],
                        ];
                        markersRef.current.forEach((marker) => marker.remove());
                        const startMarker = document.createElement('div');
                        startMarker.classList.add('start-end-line-marker');
                        startMarker.innerHTML = mapMarkerStartSvgContainer(theme.palette);
                        const endMarker = document.createElement('div');
                        endMarker.classList.add('start-end-line-marker');
                        endMarker.innerHTML = mapMarkerEndSvgContainer(theme.palette);
                        new mapboxgl.Marker(startMarker).setLngLat(startPoint as [number, number]).addTo(map.current);
                        new mapboxgl.Marker(endMarker).setLngLat(endPoint as [number, number]).addTo(map.current);
                        markersRef.current = [startMarker, endMarker];
                    }
                }
                drawRef.current.add(geoData);
            }

            const bbox = bboxTurf(geoData, { recompute: true });
            const [west, south, east, north] = bbox;
            map.current.fitBounds([west, south, east, north], { padding: 50 });
        },
        [drawMode, theme.palette, withStartEndLineIndicators],
    );

    useEffect(() => {
        console.log('1useEffect(() => {addDataToMap, data}');

        if (!map.current || !drawRef.current) return;

        if (map.current.isStyleLoaded()) {
            addDataToMap(data);
        } else {
            map.current.on('style.load', () => {
                addDataToMap(data);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const handleChangeMode = (key: string) => {
        if (!map.current || !drawRef.current) return;

        if (isSingleDraw) {
            drawRef.current?.deleteAll();
        }
        markersRef.current.forEach((marker) => marker.remove());
        setActiveDrawMode(key);
        drawRef.current.changeMode(key);
    };

    return (
        <BaseMap {...baseProps} mapRef={map} onMapLoad={() => onMapLoad(drawMode)}>
            {!drawMode ? (
                <MapDrawModeTabs activeMode={drawRef?.current?.getMode?.()} onChangeMode={handleChangeMode} />
            ) : null}
        </BaseMap>
    );
});
