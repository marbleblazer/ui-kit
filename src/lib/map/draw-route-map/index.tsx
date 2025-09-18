import mapboxgl, { MapEventType } from 'mapbox-gl';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import bboxTurf from '@turf/bbox';

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Coordinates } from '../map.types';
import { AnyObject } from '@chirp/ui/helpers/global';
import { customRouteDrawStyles, typedGeodesicDraw } from '../constance';
import { BaseMap, IBaseMapProps } from '../base-map';
import { mapMarkerEndSvgContainer, mapMarkerStartSvgContainer } from '../svg-containers';
import { useTheme } from '@mui/material';
import { customDrawLineStringMode } from './custom-modes/custom-draw-line-string-mode';

mapboxgl.accessToken = (import.meta.env.VITE_UI_MAPBOX_TOKEN || '') as string;

const drawMode = 'draw_line_string';

// if you want display array of geojson - develop it
interface IDrawRouteMapProps extends Omit<IBaseMapProps, 'mapRef' | 'onMapLoad'> {
    coordinates?: Coordinates;
    scrollZoom?: boolean;
    data?: GeoJSON.GeoJSON | null; // only one feature, if you want provide feature collection - develop it
    isSingleDraw?: boolean; // чdraw only one feature, after draw mode change - delete all features
    shouldFinishDrawing?: boolean;
    getMapStyleId?: (themeMode: string) => string;
    onChange?: (value: GeoJSON.GeoJSON) => void;
    onDrawingFinished?: () => void;
}

export const DrawRouteMap: React.FC<IDrawRouteMapProps> = memo((props) => {
    const { data, onChange = () => {}, shouldFinishDrawing, onDrawingFinished, ...baseProps } = props;

    const theme = useTheme();
    const markersRef = useRef<HTMLDivElement[]>([]);
    const map = useRef<mapboxgl.Map>(null);
    const drawRef = useRef<MapboxDraw | null>(null);
    const deleteLastPointMarkerRef = useRef<mapboxgl.Marker | null>(null);
    const [_, setActiveDrawMode] = useState('');

    const handleChange = (feature: GeoJSON.Feature) => {
        if (!map.current) return;

        onChange(feature);
        setActiveDrawMode('');
    };

    const onMapLoad = (defaultDrawMode?: string) => {
        if (!map.current) return;

        // Инициализация контролов рисования
        let modes = MapboxDraw.modes;
        modes = {
            ...typedGeodesicDraw.enable(modes),
            draw_line_string: customDrawLineStringMode,
        };

        const draw = new MapboxDraw({
            displayControlsDefault: false,
            modes: {
                ...modes,
            },
            styles: customRouteDrawStyles(theme.palette),
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
            deleteLastPointMarkerRef.current?.remove();
        });

        map.current.on('draw.delete' as MapEventType, (e: AnyObject) => {
            const features = e.features as GeoJSON.Feature[];
            handleChange(features[0]);
            deleteLastPointMarkerRef.current?.remove();
        });

        map.current.on('draw.modechange' as MapEventType, (e: AnyObject) => {
            if (e.mode === 'simple_select') {
                drawRef.current?.changeMode('draw_line_string');
            }
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

        if (data.type === 'Feature') {
            if (data.geometry.type === 'LineString') {
                // Добавляем номера к точкам маршрута
                data.properties = data.properties || {};
                data.properties.points = data.geometry.coordinates.map((_, index) => ({
                    number: index + 1,
                }));
                const coordsLen = data.geometry.coordinates.length;

                const [startPoint, endPoint] = [
                    data.geometry.coordinates[0],
                    data.geometry.coordinates[data.geometry.coordinates.length - 1],
                ];
                markersRef.current.forEach((marker) => marker.remove());
                // Создаем стартовый маркер
                const startMarker = document.createElement('div');
                startMarker.classList.add('start-end-line-marker');
                startMarker.innerHTML = mapMarkerStartSvgContainer(theme.palette, theme.palette.base.colorPointA);

                const currentMap = map.current;

                if (!currentMap) return;

                // Создаем массив для хранения всех маркеров
                const allMarkers: HTMLDivElement[] = [];

                // Добавляем нумерацию к точкам маршрута
                data.properties = data.properties || {};
                data.properties.points = data.geometry.coordinates.map((_, index) => ({
                    number: index + 1,
                }));

                // Добавляем стартовый маркер
                new mapboxgl.Marker(startMarker).setLngLat(startPoint as [number, number]).addTo(currentMap);
                allMarkers.push(startMarker);

                // Добавляем нумерованные маркеры для промежуточных точек
                data.geometry.coordinates.slice(1, -1).forEach((coord, index) => {
                    const marker = document.createElement('div');
                    marker.classList.add('numbered-marker');
                    const numberSpan = document.createElement('span');
                    numberSpan.textContent = (index + 1).toString();
                    marker.appendChild(numberSpan);
                    new mapboxgl.Marker(marker).setLngLat(coord as [number, number]).addTo(currentMap);
                    allMarkers.push(marker);
                });

                // Создаем и добавляем конечный маркер при условии, что более 1 точки
                if (coordsLen > 1) {
                    const endMarker = document.createElement('div');
                    endMarker.classList.add('start-end-line-marker');
                    endMarker.innerHTML = mapMarkerEndSvgContainer(theme.palette, theme.palette.base.color9);
                    new mapboxgl.Marker(endMarker).setLngLat(endPoint as [number, number]).addTo(currentMap);
                    allMarkers.push(endMarker);
                }

                markersRef.current = allMarkers;
            }
        }
        drawRef.current.add(data);

        const bbox = bboxTurf(data, { recompute: true });
        const [west, south, east, north] = bbox;
        map.current.fitBounds([west, south, east, north], { padding: 50 });
    }, [theme.palette, data]);

    const showDeleteLastPointMarker = useCallback((feature: GeoJSON.Feature) => {
        if (
            !map.current ||
            !drawRef.current ||
            (feature.geometry.type !== 'LineString' && feature.geometry.type !== 'Polygon')
        )
            return;

        const coords = [...(feature.geometry.coordinates as [number, number][])];

        if (coords.length <= 3) {
            if (coords?.[0]?.[0] === coords?.[1]?.[0] && coords?.[0]?.[1] === coords?.[1]?.[1]) return;
        }

        const lastPoint = coords[coords.length - 2];

        if (
            !lastPoint?.length ||
            (lastPoint[0] === deleteLastPointMarkerRef.current?.getLngLat().lng &&
                lastPoint[1] === deleteLastPointMarkerRef.current?.getLngLat().lat)
        )
            return; // Удалить предыдущий маркер, если есть
        else deleteLastPointMarkerRef.current?.remove();

        const markerEl = document.createElement('div');
        markerEl.className = 'delete-marker';

        markerEl.style.pointerEvents = 'auto'; // 🔹 по умолчанию у mapboxgl.Marker — none

        const marker = new mapboxgl.Marker(markerEl).setLngLat(lastPoint).addTo(map.current) as mapboxgl.Marker;
        deleteLastPointMarkerRef.current = marker;

        markerEl.onclick = () => {
            deleteLastPointMarkerRef.current = null;
            markerEl.remove();
        };
    }, []);

    useEffect(() => {
        const mapCurrent = map?.current;

        if (!mapCurrent) return;

        const onMouseMove = () => {
            if (!drawRef.current || !map.current) return;
            const mode = drawRef.current.getMode();
            const features = drawRef.current.getAll().features;

            if (!features.length) return;
            const feature = features[0];

            if (
                !feature ||
                (mode !== 'draw_line_string' &&
                    mode !== 'draw_polygon' &&
                    features[0]?.properties &&
                    (!feature.properties || !('circleRadius' in feature.properties)))
            )
                return;

            if (feature.geometry.type !== 'LineString') return;

            // Добавляем номера к точкам при движении мыши
            feature.properties = feature.properties || {};
            feature.properties.points = feature.geometry.coordinates.map((_, index) => ({
                number: index + 1,
            }));

            showDeleteLastPointMarker(feature); // обновляем позицию крестика
        };

        mapCurrent?.on('mousemove', onMouseMove);

        return () => {
            mapCurrent?.off('mousemove', onMouseMove);
        };
    }, [showDeleteLastPointMarker]);

    // Функция для завершения рисования
    const finishDrawing = useCallback(() => {
        if (!drawRef.current || !map.current) return;

        const currentMode = drawRef.current.getMode();
        deleteLastPointMarkerRef.current?.remove();

        if (currentMode === 'draw_line_string') {
            if (drawMode) {
                drawRef.current.changeMode(drawMode);
            } else {
                drawRef.current.changeMode('simple_select');
            }

            const features = drawRef.current.getAll().features;

            if (features.length > 1) {
                onChange(features[0]);
                drawMode && addDataToMap();
            } else {
                markersRef.current.forEach((marker) => marker.remove());
                drawRef.current?.deleteAll();
                drawMode && drawRef.current.changeMode(drawMode);
            }
        }
    }, [addDataToMap, onChange]);

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

    return <BaseMap {...baseProps} mapRef={map} onMapLoad={() => onMapLoad(drawMode)} />;
});
