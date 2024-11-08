import { Box, useTheme } from '@mui/material';
import mapboxgl, { MapEventType } from 'mapbox-gl';
import { useCallback, useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import bboxTurf from '@turf/bbox';
import circleTurf from '@turf/circle';

import { checkCirclePolygon, getCircleGeometryFromPolygon, getUiKitMapStyleId } from '@chirp/ui/helpers/mapUtils';
import { useBreakpoints } from '@chirp/ui/hooks/useBreakpoints';
import * as GeodesicDraw from 'mapbox-gl-draw-geodesic';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import * as S from './style';
import { Coordinates } from './map.types';
import { MapDrawModeTabs } from './drawable-map/map-draw-tabs';
import { AnyObject } from '@chirp/ui/helpers/global';
import { customDrawStyles } from './constance';
import { mapMarkerArrowSvgString, mapMarkerSvgString } from './mp-marker-string';
import { createPopupContent } from './create-popup-content';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken = import.meta.env.VITE_UI_MAPBOX_TOKEN || '';

type Props = {
    coordinates?: Coordinates;
    scrollZoom?: boolean;
    isDrawable?: boolean;
    isSingleDraw?: boolean; // draw only one feature, after draw mode change - delete all features
    data?: GeoJSON.GeoJSON | null; // only one feature, if you want provide feature collection - develop it
    markerVisibility?: { [key: number]: boolean };
    isLineMarkersNeeded?: boolean;
    onChange?: (value: GeoJSON.GeoJSON) => void;
    accessToken?: string;
    centeringCoordinates?: Coordinates;
    getMapStyleId?: (themeMode: string) => string;
    animateLineId?: number; // id по которому запускается анимация
    animationDuration?: number;
    onAnimationEnd?: () => void;
};

export const Map: React.FC<Props> = ({
    coordinates,
    scrollZoom = true,
    onChange = () => {},
    data,
    isDrawable = false,
    isSingleDraw = true,
    centeringCoordinates,
    isLineMarkersNeeded = true,
    getMapStyleId = getUiKitMapStyleId,
    markerVisibility = {},
    animateLineId,
    animationDuration = 3000,
    onAnimationEnd,
}) => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const wrapper = useRef<HTMLDivElement | null>(null);
    const map = useRef<mapboxgl.Map>(null);
    const drawRef = useRef<MapboxDraw | null>(null);
    const [_, setActiveDrawMode] = useState('');
    const { isMobile } = useBreakpoints();
    const markerRefs = useRef<{ [key: number | string]: mapboxgl.Marker }>({});
    const animationMarkerRef = useRef<mapboxgl.Marker | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const { palette } = useTheme();

    const handleChange = (feature: GeoJSON.Feature) => {
        if (!map.current) return;

        if (feature.properties && 'circleRadius' in feature.properties) {
            const circleCenter = GeodesicDraw.getCircleCenter(feature);
            const circleRadius = GeodesicDraw.getCircleRadius(feature);
            const circle = circleTurf(circleCenter, circleRadius, { units: 'kilometres', steps: 64 });
            onChange(circle);
        } else {
            onChange(feature);
        }
    };

    useEffect(() => {
        if (!map.current) return;

        map.current.setStyle(getMapStyleId(palette.mode));
    }, [palette.mode]);

    useEffect(() => {
        if (map.current) return;
        // @ts-ignore

        map.current = new mapboxgl.Map({
            container: mapContainer.current || '',
            style: getMapStyleId(palette.mode),
            zoom: 6,
            minZoom: 4,
            projection: { name: 'equirectangular' },
            scrollZoom,
            logoPosition: 'bottom-right',
            maxBounds: [
                [-180, -72],
                [180, 72],
            ],
            center:
                coordinates?.lat && coordinates?.lon
                    ? [coordinates.lon, coordinates.lat]
                    : [19.56413004748697, 11.65120378622913],
            trackResize: true,
            crossSourceCollisions: false,
            cooperativeGestures: isMobile,
        });

        // Инициализация контролов рисования
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

        map.current.on('load', () => {
            if (map.current) {
                map.current.addControl(draw, 'top-left');
                // Слушаем события создания, обновления и удаления
                map.current.on('draw.create' as MapEventType, (e: AnyObject) => {
                    const features = e.features as GeoJSON.Feature[];
                    // console.log('Создано:', features);
                    handleChange(features[0]);
                });

                map.current.on('draw.update' as MapEventType, (e: AnyObject) => {
                    const features = e.features as GeoJSON.Feature[];
                    // console.log('Обновлено:', e.features);
                    handleChange(features[0]);
                });

                map.current.on('draw.delete' as MapEventType, (e: AnyObject) => {
                    const features = e.features as GeoJSON.Feature[];
                    // console.log('Удалено:', e.features);
                    handleChange(features[0]);
                });
            }
        });

        map.current.addControl(
            new mapboxgl.FullscreenControl({ container: wrapper.current ?? undefined }),
            'bottom-right',
        );
        map.current.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'bottom-right');
        map.current.addControl(
            new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                placeholder: 'Search location',
                collapsed: true,
            }),
            'bottom-right',
        );

        const geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true,
            },
            showUserHeading: false,
            fitBoundsOptions: {
                animate: false,
            },
        });

        map.current.addControl(geolocate, 'bottom-right');
        map.current.getCanvas().style.cursor = 'pointer';

        geolocate.on('geolocate', (e: any) => {
            if (!map.current) return;
            const latlng = new mapboxgl.LngLat(e.coords.longitude as number, e.coords.latitude as number);
            map.current?.flyTo({ center: [latlng.lng, latlng.lat], essential: true });
        });
    }, []);

    const addDataToMap = useCallback(() => {
        if (!map.current) return;
        let singleMarkerCenter: number[] | null = null;

        if (!data) {
            if (isDrawable) {
                if (drawRef.current) {
                    drawRef.current.deleteAll();
                }
            } else {
                (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData({
                    type: 'FeatureCollection',
                    features: [],
                });
            }

            return;
        }

        const isCircleData = checkCirclePolygon(data);
        // draw logic
        if (isCircleData) {
            const resolvedCircleGeometry = getCircleGeometryFromPolygon(data);
            if (resolvedCircleGeometry) {
                const { center, radius } = resolvedCircleGeometry;
                if (isDrawable) {
                    if (drawRef.current) {
                        if (isCircleData) {
                            const circle = GeodesicDraw.createCircle(center, radius);
                            drawRef.current.add(circle);
                        }
                    }
                } else {
                    const circle = circleTurf(center, radius, { units: 'kilometres', steps: 64 });
                    (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData(circle);
                }
            }
        } else {
            if (isDrawable) {
                if (drawRef.current) {
                    drawRef.current.add(data);
                }
            } else {
                if (data.type === 'FeatureCollection') {
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
                                const popup = new mapboxgl.Popup({ anchor: 'top-left' }).setHTML(
                                    createPopupContent(popupData),
                                );
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
                            const sourceId = `route-${lineId}`;
                            if (markerVisibility[lineId] !== undefined) {
                                if (map.current.getSource(sourceId)) {
                                    // Visibility линий
                                    if (markerVisibility[lineId]) {
                                        map.current.setLayoutProperty(sourceId, 'visibility', 'visible');
                                    } else {
                                        map.current.setLayoutProperty(sourceId, 'visibility', 'none');
                                    }

                                    (map.current.getSource(sourceId) as mapboxgl.GeoJSONSource).setData({
                                        type: 'FeatureCollection',
                                        features: [marker],
                                    });
                                } else {
                                    map.current.addSource(sourceId, {
                                        type: 'geojson',
                                        data: {
                                            type: 'FeatureCollection',
                                            features: [marker],
                                        },
                                    });

                                    map.current.addLayer({
                                        id: sourceId,
                                        type: 'line',
                                        source: sourceId,
                                        layout: {
                                            'line-join': 'round',
                                            'line-cap': 'round',
                                        },
                                        paint: {
                                            'line-color': '#FF4D14',
                                            'line-width': 1,
                                        },
                                    });
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
                                            markerElement.classList.add('start-line-marker');
                                        } else if (index === markerGeometry.coordinates.length - 1) {
                                            markerElement.classList.add('end-line-marker');
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
                } else if (typeof markerVisibility === 'object' && Object.keys(markerVisibility)?.length) {
                    (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData(data);
                }
            }
        }

        map.current.on('style.load', () => {
            addDataToMap();
        });

        if (singleMarkerCenter?.length === 2) {
            map.current.flyTo({ center: singleMarkerCenter as [number, number], essential: true });
        }
        // bbox logic
        else {
            const bbox = bboxTurf(data, { recompute: true });
            const [west, south, east, north] = bbox;
            map.current.fitBounds([west, south, east, north], { padding: 50 });
        }
    }, [data, isDrawable, markerVisibility]);

    useEffect(() => {
        if (!map.current) return;

        if (map.current.isStyleLoaded()) {
            addDataToMap();
        } else
            map.current.on('load', () => {
                addDataToMap();
            });
    }, [data, isDrawable, markerVisibility]);

    const handleChangeMode = (key: string) => {
        if (!map.current || !drawRef.current) return;
        isSingleDraw && drawRef.current?.deleteAll();
        setActiveDrawMode(key);
        drawRef.current.changeMode(key);
    };

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
        if (map.current && centeringCoordinates?.lat && centeringCoordinates?.lon) {
            map.current.flyTo({ center: [centeringCoordinates?.lon, centeringCoordinates?.lat], essential: true });
        }
    }, [centeringCoordinates]);

    return (
        <S.MapContainer width="100%" height="100%" position="relative" className="wrapper" ref={wrapper}>
            <Box width="100%" height="100%" ref={mapContainer} className="map-container" />
            {isDrawable && (
                <MapDrawModeTabs activeMode={drawRef?.current?.getMode?.()} onChangeMode={handleChangeMode} />
            )}
        </S.MapContainer>
    );
};
