import mapboxgl from 'mapbox-gl';
import { LineString, Point } from 'geojson';
import { RefObject } from 'react';
import {
    mapMarkerEndSvgContainer,
    mapMarkerStartSvgContainer,
    specificMarkerIconWithDiffusion,
} from '../svg-containers';
import { Palette, Theme } from '@mui/material';
import { mapMarkerSvgString } from '../mp-marker-string';
import { IFeatureMapVariants } from '../map.types';

interface IPixelCoordType {
    x: number;
    y: number;
}

interface IRenderPoints {
    geometry: Point;
    popupNode: Node;
    map: RefObject<mapboxgl.Map | null>;
    markersRef: RefObject<mapboxgl.Marker[]>;
    theme: Theme;
    specificMarkerIcon?: (theme: Palette) => string;
    variant: IFeatureMapVariants;
}

interface IRenderTripLineStringPoints {
    geometry: LineString;
    map: RefObject<mapboxgl.Map | null>;
    markersRef: RefObject<mapboxgl.Marker[]>;
    theme: Theme;
}

interface IRenderLineStringPoints {
    geometry: LineString;
    map: RefObject<mapboxgl.Map | null>;
    markersRef: RefObject<mapboxgl.Marker[]>;
    isLineMarkersNeeded: boolean;
    theme: Theme;
    isTrip?: boolean;
}

const isTooCloseOnScreen = (
    pixelPoint: IPixelCoordType,
    existingPopups: IPixelCoordType[],
    minDistance: number,
): boolean => {
    return existingPopups.some((popupPoint) => {
        const dx = pixelPoint.x - popupPoint.x;
        const dy = pixelPoint.y - popupPoint.y;

        return Math.sqrt(dx * dx + dy * dy) < minDistance;
    });
};

// Функция для получения границ текущей области карты
const getMapBounds = (map: mapboxgl.Map) => {
    const bounds = map.getBounds();

    if (!bounds) return;

    return {
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        east: bounds.getEast(),
        west: bounds.getWest(),
    };
};

// Проверка, находится ли точка в пределах экрана
const isPointInBounds = (point: [number, number], bounds: ReturnType<typeof getMapBounds>) => {
    const [lon, lat] = point;

    if (!bounds) return false;

    return lon >= bounds.west && lon <= bounds.east && lat >= bounds.south && lat <= bounds.north;
};

export const ZOOM_BREAKPOINTS = {
    HIGH: 14,
    MEDIUM: 11,
    LOW: 8,
    NONE: 7.5,
};

// массив для хранения активных попапов
let activePopups: mapboxgl.Popup[] = [];
let activePixelPopups: IPixelCoordType[] = [];

const clear = () => {
    activePopups.forEach((popup) => popup.remove());
    activePixelPopups = [];
    activePopups = []; // Очищаем массив
};

/** Рендеринг элементов типа "Point" */
export const renderPoints = ({
    geometry,
    popupNode,
    map,
    markersRef,
    theme,
    specificMarkerIcon,
    variant,
}: IRenderPoints) => {
    const markerElement = document.createElement('div');

    if (variant === 'base') {
        markerElement.innerHTML = specificMarkerIcon
            ? specificMarkerIcon(theme.palette)
            : mapMarkerSvgString(theme.palette);
    } else if (variant === 'single-point' && specificMarkerIcon) {
        markerElement.innerHTML = specificMarkerIcon
            ? specificMarkerIconWithDiffusion(theme.palette, specificMarkerIcon)
            : mapMarkerSvgString(theme.palette);
    }

    const markerInstance = new mapboxgl.Marker({ element: markerElement }).setLngLat(
        geometry.coordinates as [number, number],
    );

    if (popupNode) {
        const popup = new mapboxgl.Popup({
            closeButton: false,
        })
            .setDOMContent(popupNode)
            .trackPointer();
        markerInstance.setPopup(popup);

        let isHovered = false;
        let closeTimeout: ReturnType<typeof setTimeout>;

        const openPopup = () => {
            isHovered = true;
            clearTimeout(closeTimeout);
            popup.addTo(map.current!);
        };

        const closePopup = () => {
            isHovered = false;
            closeTimeout = setTimeout(() => {
                if (!isHovered) popup.remove();
            }, 100);
        };

        markerElement.addEventListener('mouseenter', openPopup);

        markerElement.addEventListener('mouseleave', closePopup);

        popup.on('open', () => {
            const popupElement = popup.getElement();

            if (!popupElement) return;

            const handlePopupMouseEnter = () => {
                isHovered = true;
                clearTimeout(closeTimeout);
            };

            const handlePopupMouseLeave = () => {
                isHovered = false;
                closePopup();
            };

            popupElement.addEventListener('mouseenter', handlePopupMouseEnter);
            popupElement.addEventListener('mouseleave', handlePopupMouseLeave);

            popup.on('close', () => {
                popupElement.removeEventListener('mouseenter', handlePopupMouseEnter);
                popupElement.removeEventListener('mouseleave', handlePopupMouseLeave);
            });
        });

        markerInstance.on('remove', () => {
            markerElement.removeEventListener('mouseenter', openPopup);
            markerElement.removeEventListener('mouseleave', closePopup);
        });
    }

    markerInstance.addTo(map.current!);
    markersRef.current.push(markerInstance);
};

/** Рендеринг маркеров при типе "LineString" */
export const renderLineStringPoints = ({
    geometry,
    map,
    markersRef,
    isLineMarkersNeeded,
    theme,
    isTrip = false,
}: IRenderLineStringPoints) => {
    if (geometry.coordinates && Array.isArray(geometry.coordinates)) {
        geometry.coordinates.forEach((coordinate, index) => {
            if (Array.isArray(coordinate) && coordinate.length === 2) {
                let markerElement = null;

                if (index === 0) {
                    markerElement = document.createElement('div');
                    markerElement.classList.add(isTrip ? 'start-trip-end-line-marker' : 'start-end-line-marker');
                    markerElement.innerHTML = mapMarkerStartSvgContainer(theme.palette, isTrip);
                } else if (index === geometry.coordinates.length - 1) {
                    markerElement = document.createElement('div');
                    markerElement.classList.add(isTrip ? 'start-trip-end-line-marker' : 'start-end-line-marker');
                    markerElement.innerHTML = mapMarkerEndSvgContainer(theme.palette, isTrip);
                } else if (isLineMarkersNeeded) {
                    markerElement = document.createElement('div');
                    markerElement.classList.add(isTrip ? 'common-trip-line-marker' : 'common-line-marker');
                }

                if (markerElement) {
                    const markerInstance = new mapboxgl.Marker(markerElement).setLngLat(coordinate as [number, number]);

                    map.current && markerInstance.addTo(map.current);
                    markersRef.current.push(markerInstance);
                }
            }
        });
    }
};

/** Рендеринг маркеров поезжки при типе "LineString" */
export const renderTripLineStringPoints = ({ geometry, map, markersRef, theme }: IRenderTripLineStringPoints) => {
    if (geometry.coordinates && Array.isArray(geometry.coordinates)) {
        geometry.coordinates.forEach((coordinate, index) => {
            if (Array.isArray(coordinate) && coordinate.length === 2) {
                let markerElement = null;

                if (index === 0) {
                    markerElement = document.createElement('div');
                    markerElement.classList.add('start-trip-end-line-marker');
                    markerElement.innerHTML = mapMarkerStartSvgContainer(theme.palette, true);
                } else if (index === geometry.coordinates.length - 1) {
                    markerElement = document.createElement('div');
                    markerElement.classList.add('start-trip-end-line-marker');
                    markerElement.innerHTML = mapMarkerEndSvgContainer(theme.palette, true);
                }

                if (markerElement) {
                    const markerInstance = new mapboxgl.Marker(markerElement).setLngLat(coordinate as [number, number]);

                    map.current && markerInstance.addTo(map.current);
                    markersRef.current.push(markerInstance);
                }
            }
        });
    }
};
