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
import { customDrawLineStringMode } from './custom-modes/custom-draw-line-string-mode';
import { customDrawPolygonMode } from './custom-modes/custom-draw-polygon-mode';

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
    shouldFinishDrawing?: boolean;
    onDrawingFinished?: () => void;
}

export const DrawableMap: React.FC<IDrawableMapProps> = memo((props) => {
    const {
        data,
        isSingleDraw = true,
        onChange = () => {},
        withStartEndLineIndicators,
        drawMode,
        shouldFinishDrawing,
        onDrawingFinished,
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
        modes = {
            ...typedGeodesicDraw.enable(modes),
            draw_line_string: customDrawLineStringMode,
            draw_polygon: customDrawPolygonMode,
        };
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

    const addDataToMap = useCallback(() => {
        if (!map.current || !drawRef.current) return;

        drawRef.current.deleteAll();

        if (drawMode) {
            markersRef.current.forEach((marker) => marker.remove());
            drawRef.current.deleteAll();
            drawRef.current.changeMode(drawMode);
        }

        if (!data) {
            drawMode && drawRef.current.changeMode(drawMode);

            return;
        }

        const isCircleData = checkCirclePolygon(data);

        // draw logic
        if (isCircleData) {
            const resolvedCircleGeometry = getCircleGeometryFromPolygon(data);

            if (resolvedCircleGeometry) {
                const { center, radius } = resolvedCircleGeometry;

                if (isCircleData) {
                    const circle = typedGeodesicDraw.createCircle(center, radius);
                    drawRef.current.add(circle);
                }
            }
        } else {
            if (data.type === 'Feature' && withStartEndLineIndicators) {
                if (data.geometry.type === 'LineString') {
                    const [startPoint, endPoint] = [
                        data.geometry.coordinates[0],
                        data.geometry.coordinates[data.geometry.coordinates.length - 1],
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
            drawRef.current.add(data);
        }

        const bbox = bboxTurf(data, { recompute: true });
        const [west, south, east, north] = bbox;
        map.current.fitBounds([west, south, east, north], { padding: 50 });
    }, [drawMode, theme.palette, withStartEndLineIndicators, data]);

    // Функция для завершения рисования
    const finishDrawing = useCallback(() => {
        if (!drawRef.current || !map.current) return;

        const currentMode = drawRef.current.getMode();

        if (currentMode === 'draw_line_string' || currentMode === 'draw_polygon') {
            if (drawMode) {
                drawRef.current.changeMode(drawMode);
            } else {
                drawRef.current.changeMode('simple_select');
            }

            const features = drawRef.current.getAll().features;

            if (features.length > 0) {
                onChange(features[0]);
                drawMode && addDataToMap();
            }
        }
    }, [addDataToMap, drawMode, onChange]);

    useEffect(() => {
        if (!map.current || !drawRef.current) return;

        if (map.current.isStyleLoaded()) {
            addDataToMap();
        } else {
            map.current.on('style.load', () => {
                addDataToMap();
            });
        }
    }, [addDataToMap]);

    useEffect(() => {
        if (shouldFinishDrawing) {
            finishDrawing();
            onDrawingFinished?.();
        }
    }, [finishDrawing, shouldFinishDrawing, onDrawingFinished]);

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
