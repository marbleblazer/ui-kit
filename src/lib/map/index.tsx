import { Box, useTheme } from '@mui/material';
import mapboxgl, { MapEventType } from 'mapbox-gl';
import { useCallback, useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import bboxTurf from '@turf/bbox';
import circleTurf from '@turf/circle';

import { checkCirclePolygon, getCircleGeometryFromPolygon, getUiKitMapStyleId } from '@chirp/ui/helpers/mapUtils';
import { useBreakpoints } from '@chirp/ui/hooks/useBreakpoints';
import * as GeodesicDraw from 'mapbox-gl-draw-geodesic';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import * as S from './style';
import { Coordinates } from './map.types';
import { MapDrawModeTabs } from './map-draw-tabs';
import { AnyObject } from '@chirp/ui/helpers/global';
import { customDrawStyles } from './constance';
import { mapMarkerSvgString } from './mp-marker-string';
import { createPopupContent } from './create-popup-content';

mapboxgl.accessToken = import.meta.env.VITE_UI_MAPBOX_TOKEN || '';

type Props = {
    coordinates?: Coordinates;
    scrollZoom?: boolean;
    isDrawable?: boolean;
    isSingleDraw?: boolean; // draw only one feature, after draw mode change - delete all features
    data?: GeoJSON.GeoJSON | null; // only one feature, if you want provide feature collection - develop it
    onChange?: (value: GeoJSON.GeoJSON) => void;
    accessToken?: string;
    centeringCoordinates?: Coordinates;
    getMapStyleId?: (themeMode: string) => string;
};

export const Map: React.FC<Props> = ({
    coordinates,
    scrollZoom = true,
    onChange = () => {},
    data,
    isDrawable = false,
    isSingleDraw = true,
    centeringCoordinates,
    getMapStyleId = getUiKitMapStyleId,
}) => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const wrapper = useRef<HTMLDivElement | null>(null);
    const map = useRef<mapboxgl.Map>(null);
    const drawRef = useRef<MapboxDraw | null>(null);
    const [_, setActiveDrawMode] = useState('');
    const { isMobile } = useBreakpoints();

    const { palette } = useTheme();

    const customMarker = document && document.createElement('div');
    customMarker.innerHTML = mapMarkerSvgString;

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
                        if (markerGeometry.type === 'Point') {
                            if (data.features.length === 1) {
                                singleMarkerCenter = markerGeometry.coordinates;
                            }
                            const customEachMarker = document && document.createElement('div');
                            customEachMarker.innerHTML = mapMarkerSvgString;

                            const popup = new mapboxgl.Popup({ anchor: 'top-left' }).setHTML(
                                createPopupContent(popupData),
                            );

                            new mapboxgl.Marker(customEachMarker)
                                .setLngLat(markerGeometry.coordinates as [number, number])
                                .setPopup(popup)
                                .addTo(map.current);
                        }
                    }
                }

                (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData(data);
            }
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
    }, [data, isDrawable]);

    useEffect(() => {
        if (!map.current) return;

        if (map.current.isStyleLoaded()) {
            addDataToMap();
        } else
            map.current.on('load', () => {
                addDataToMap();
            });
    }, [data, isDrawable]);

    const handleChangeMode = (key: string) => {
        if (!map.current || !drawRef.current) return;
        isSingleDraw && drawRef.current?.deleteAll();
        setActiveDrawMode(key);
        drawRef.current.changeMode(key);
    };

    useEffect(() => {
        if (map.current && centeringCoordinates?.lat && centeringCoordinates?.lon) {
            map.current.flyTo({ center: [centeringCoordinates?.lat, centeringCoordinates?.lon], essential: true });
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
