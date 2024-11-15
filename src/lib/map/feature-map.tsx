import mapboxgl from 'mapbox-gl';
import { useCallback, useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import bboxTurf from '@turf/bbox';
import 'mapbox-gl/dist/mapbox-gl.css';

import * as GeodesicDraw from 'mapbox-gl-draw-geodesic';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Coordinates } from './map.types';
import { mapMarkerArrowSvgString, mapMarkerSvgString } from './mp-marker-string';
import { mapMarkerEndSvgContainer, mapMarkerStartSvgContainer } from './svg-containers';
import { createPopupsForLineString } from './utils';
import { BaseMap, IBaseMapProps } from './base-map';
import { customDrawStyles } from './constance';

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
    const [isAnimating, setIsAnimating] = useState(false);

    const markersRef = useRef<mapboxgl.Marker[]>([]);
    const map = useRef<mapboxgl.Map>(null);
    const animationMarkerRef = useRef<mapboxgl.Marker | null>(null);
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
            styles: customDrawStyles,
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

                    const markerElement = document && document.createElement('div');
                    markerElement.innerHTML = mapMarkerSvgString;

                    const markerInstance = new mapboxgl.Marker(markerElement).setLngLat(
                        geometry.coordinates as [number, number],
                    );

                    if (popupMarkup) {
                        const popup = new mapboxgl.Popup({ anchor: 'top-left' }).setHTML(popupMarkup);
                        markerInstance.setPopup(popup);
                    }

                    markerInstance.addTo(map.current);
                    markersRef.current.push(markerInstance);
                } else if (geometry.type === 'LineString') {
                    // Отрисовка маркеров на линии
                    if (geometry.coordinates && Array.isArray(geometry.coordinates)) {
                        geometry.coordinates.forEach((coordinate, index) => {
                            if (Array.isArray(coordinate) && coordinate.length === 2) {
                                const markerElement = document.createElement('div');

                                if (index === 0) {
                                    markerElement.classList.add('start-end-line-marker');
                                    markerElement.innerHTML = mapMarkerStartSvgContainer;
                                } else if (index === geometry.coordinates.length - 1) {
                                    markerElement.classList.add('start-end-line-marker');
                                    markerElement.innerHTML = mapMarkerEndSvgContainer;
                                } else if (isLineMarkersNeeded) {
                                    markerElement.classList.add('common-line-marker');
                                }

                                const markerInstance = new mapboxgl.Marker(markerElement).setLngLat(
                                    coordinate as [number, number],
                                );

                                map.current && markerInstance.addTo(map.current);
                                markersRef.current.push(markerInstance);
                            }
                        });
                    }
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
    }, [data]);

    useEffect(() => {
        if (!map.current) return;

        if (map.current.isStyleLoaded()) {
            addDataToMap();
        } else {
            map.current.on('style.load', () => {
                addDataToMap();
            });
        }
    }, [data]);

    // Функция для запуска анимации
    const startAnimation = useCallback(() => {
        if (!map.current || isAnimating || !data || animateLineId == null) return;

        if (data.type === 'FeatureCollection') {
            const lineFeature = data.features.find(
                (feature) => feature.geometry.type === 'LineString' && feature.properties?.lineId === animateLineId,
            );

            if (!lineFeature) {
                console.warn(`No LineString found in data with lineId ${animateLineId} for animation.`);
                setIsAnimating(false);
                return;
            }

            setIsAnimating(true);

            const coordinates =
                lineFeature.geometry.type === 'LineString'
                    ? (lineFeature.geometry.coordinates as [number, number][])
                    : [];
            const totalFrames = animationDuration / 16; // 60 FPS
            let frame = 0;

            // Создаем кастомный HTML-элемент для маркера со стрелкой
            const arrowElement = document.createElement('div');
            arrowElement.innerHTML = mapMarkerArrowSvgString;
            arrowElement.style.width = '34px';
            arrowElement.style.height = '34px';
            arrowElement.style.transformOrigin = 'center'; // устанавливаем центр как точку вращения

            // svg внутри элемента
            const svgElement = arrowElement.querySelector('svg');

            if (animationMarkerRef.current) {
                animationMarkerRef.current.remove();
            }

            // Создаём маркер с кастомной иконкой
            animationMarkerRef.current = new mapboxgl.Marker({ element: arrowElement })
                .setLngLat(coordinates[0])
                .addTo(map.current);

            const animate = () => {
                // завершение анимации
                if (frame >= totalFrames) {
                    setIsAnimating(false);
                    animationMarkerRef.current?.remove();
                    onAnimationEnd && onAnimationEnd();
                    return;
                }

                const progress = frame / totalFrames;
                const pointIndex = Math.floor(progress * (coordinates.length - 1));
                const nextPointIndex = Math.min(pointIndex + 1, coordinates.length - 1);

                const [lng, lat] = coordinates[pointIndex];
                const [nextLng, nextLat] = coordinates[nextPointIndex];

                // Устанавливаем позицию маркера
                animationMarkerRef.current?.setLngLat([lng, lat]);

                // Рассчитываем угол между текущей и следующей точкой
                const angle = Math.atan2(nextLat - lat, nextLng - lng) * (180 / Math.PI) + 210;

                if (svgElement) {
                    svgElement.style.transform = `rotate(-${angle}deg)`;
                }

                frame++;
                requestAnimationFrame(animate);
            };

            animate();
        } else {
            console.warn('Data is not a valid FeatureCollection with a LineString for animation.');
        }
    }, [data, animationDuration, isAnimating, onAnimationEnd]);

    // Вызов анимации при изменении shouldAnimate
    useEffect(() => {
        if (animateLineId) {
            startAnimation();
        }
    }, [animateLineId, startAnimation]);

    useEffect(() => {
        if (!map.current) return;

        const updatePopups = () => {
            const zoom = map.current?.getZoom();

            if (data && data.type === 'FeatureCollection') {
                data.features.forEach((feature) => {
                    if (feature.geometry.type === 'LineString') {
                        const { coordinates } = feature.geometry;
                        const { speeds, serverTimes } = feature.properties as {
                            speeds: (number | null)[];
                            serverTimes: (string | null)[];
                        };

                        if (speeds && serverTimes) {
                            createPopupsForLineString(
                                map.current!,
                                coordinates as [number, number][],
                                speeds,
                                serverTimes,
                                zoom,
                            );
                        }
                    }
                });
            }
        };

        map.current.on('zoom', updatePopups);
        updatePopups(); // Initial call

        return () => {
            map.current?.off('zoom', updatePopups);
        };
    }, [data]);

    // Центрирование карты по координатам centeringCoordinates
    useEffect(() => {
        if (map.current && centeringCoordinates?.lat && centeringCoordinates?.lon) {
            map.current.flyTo({ center: [centeringCoordinates?.lon, centeringCoordinates?.lat], essential: true });
        }
    }, [centeringCoordinates]);

    return <BaseMap {...baseProps} mapRef={map} onMapLoad={() => onMapLoad()} />;
};
