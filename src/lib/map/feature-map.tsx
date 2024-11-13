import { useTheme } from '@mui/material';
import mapboxgl from 'mapbox-gl';
import { useCallback, useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import bboxTurf from '@turf/bbox';

import { getUiKitMapStyleId } from '@chirp/ui/helpers/mapUtils';
import { Coordinates } from './map.types';
import { mapMarkerArrowSvgString, mapMarkerSvgString } from './mp-marker-string';
import { createPopupContent } from './create-popup-content';
import { mapMarkerEndSvgContainer, mapMarkerStartSvgContainer } from './svg-containers';
import { createPopupsForLineString } from './utils';
import { BaseMap, IBaseMapProps } from './base-map';

mapboxgl.accessToken = import.meta.env.VITE_UI_MAPBOX_TOKEN || '';

interface IFeatureMapProps extends Omit<IBaseMapProps, 'mapRef' | 'onMapLoad'> {
    data?: GeoJSON.GeoJSON | null; // only one feature, if you want provide feature collection - develop it
    coordinates?: Coordinates;
    scrollZoom?: boolean;
    markerVisibility?: { [key: number]: boolean };
    isLineMarkersNeeded?: boolean;
    accessToken?: string;
    centeringCoordinates?: Coordinates;
    getMapStyleId?: (themeMode: string) => string;
    animateLineId?: number; // id по которому запускается анимация
    animationDuration?: number;
    onAnimationEnd?: () => void;
}

export const FeatureMap: React.FC<IFeatureMapProps> = ({
    data,
    coordinates,
    scrollZoom = true,
    centeringCoordinates,
    isLineMarkersNeeded = true,
    getMapStyleId = getUiKitMapStyleId,
    markerVisibility = {},
    animateLineId,
    animationDuration = 3000,
    onAnimationEnd,
    ...baseProps
}) => {
    const { palette } = useTheme();

    const [isAnimating, setIsAnimating] = useState(false);

    const map = useRef<mapboxgl.Map>(null);
    const markerRefs = useRef<{ [key: number | string]: mapboxgl.Marker }>({});
    const animationMarkerRef = useRef<mapboxgl.Marker | null>(null);

    useEffect(() => {
        if (!map.current) return;

        map.current.setStyle(getMapStyleId(palette.mode));
    }, [palette.mode]);

    const addDataToMap = useCallback(() => {
        if (!map.current) return;

        let singleMarkerCenter: number[] | null = null;

        if (!data) {
            (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData({
                type: 'FeatureCollection',
                features: [],
            });

            Object.keys(markerRefs.current).forEach((key) => {
                markerRefs.current[key].remove();
                delete markerRefs.current[key];
            });

            return;
        }

        if (data.type === 'FeatureCollection') {
            const visibleMarkers = [];

            for (const marker of data.features) {
                const markerGeometry = marker.geometry;
                const popupData: Record<string, string> = marker?.properties?.popupData;
                const device_id = marker.properties?.device_id;
                const lineId = marker.properties?.lineId;

                if (markerGeometry.type === 'Point') {
                    if (data.features.length === 1) {
                        singleMarkerCenter = markerGeometry.coordinates;
                    }

                    const customEachMarker = document && document.createElement('div');
                    customEachMarker.innerHTML = mapMarkerSvgString;

                    const markerInstance = new mapboxgl.Marker(customEachMarker).setLngLat(
                        markerGeometry.coordinates as [number, number],
                    );

                    if (popupData) {
                        const popup = new mapboxgl.Popup({ anchor: 'top-left' }).setHTML(createPopupContent(popupData));
                        markerInstance.setPopup(popup);
                    }

                    if (!markerVisibility[device_id]) {
                        if (!markerRefs.current[device_id]) {
                            markerInstance.addTo(map.current);
                            markerRefs.current[device_id] = markerInstance;
                        }
                    } else {
                        if (markerRefs.current[device_id]) {
                            markerRefs.current[device_id].remove();
                            delete markerRefs.current[device_id];
                        }
                    }
                } else if (markerGeometry.type === 'LineString') {
                    if (markerVisibility[lineId] !== undefined) {
                        if (markerVisibility[lineId]) {
                            visibleMarkers.push(marker);
                        }
                    }

                    // Очистка маркеров перед обновлением массива data
                    Object.keys(markerRefs.current).forEach((key) => {
                        if (key.startsWith(`${lineId}-`)) {
                            markerRefs.current[key].remove();
                            delete markerRefs.current[key];
                        }
                    });

                    // Отрисовка маркеров на линии
                    if (markerGeometry.coordinates && Array.isArray(markerGeometry.coordinates)) {
                        markerGeometry.coordinates.forEach((coordinate, index) => {
                            if (Array.isArray(coordinate) && coordinate.length === 2) {
                                const markerElement = document.createElement('div');

                                if (index === 0) {
                                    markerElement.classList.add('start-end-line-marker');
                                    markerElement.innerHTML = mapMarkerStartSvgContainer;
                                } else if (index === markerGeometry.coordinates.length - 1) {
                                    markerElement.classList.add('start-end-line-marker');
                                    markerElement.innerHTML = mapMarkerEndSvgContainer;
                                } else if (isLineMarkersNeeded) {
                                    markerElement.classList.add('common-line-marker');
                                }

                                if (map.current) {
                                    const markerKey = `${lineId}-${index}`;
                                    if (markerVisibility[lineId]) {
                                        if (!markerRefs.current[markerKey]) {
                                            const lineMarker = new mapboxgl.Marker(markerElement)
                                                .setLngLat(coordinate as [number, number])
                                                .addTo(map.current);
                                            markerRefs.current[markerKey] = lineMarker;
                                        }
                                    } else {
                                        if (markerRefs.current[markerKey]) {
                                            markerRefs.current[markerKey].remove();
                                            delete markerRefs.current[markerKey];
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
            }

            (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData({
                type: 'FeatureCollection',
                features: visibleMarkers,
            });
        } else if (!Object.keys(markerVisibility)?.length) {
            (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData(data);
        }

        if (singleMarkerCenter?.length === 2) {
            map.current.flyTo({ center: singleMarkerCenter as [number, number], essential: true });
        }
        // bbox logic
        else {
            const bbox = bboxTurf(data, { recompute: true });
            const [west, south, east, north] = bbox;
            map.current.fitBounds([west, south, east, north], { padding: 50 });
        }
    }, [data]);

    useEffect(() => {
        if (!map.current) return;

        if (map.current.isStyleLoaded()) {
            addDataToMap();
        } else
            map.current.on('style.load', () => {
                addDataToMap();
            });
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

    useEffect(() => {
        if (map.current && centeringCoordinates?.lat && centeringCoordinates?.lon) {
            map.current.flyTo({ center: [centeringCoordinates?.lon, centeringCoordinates?.lat], essential: true });
        }
    }, [centeringCoordinates]);

    return <BaseMap {...baseProps} mapRef={map} onMapLoad={() => addDataToMap()} />;
};
