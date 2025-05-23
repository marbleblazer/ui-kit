import mapboxgl from 'mapbox-gl';
import moment from 'moment';
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

interface IRenderLineStringPoints {
    geometry: LineString;
    map: RefObject<mapboxgl.Map | null>;
    markersRef: RefObject<mapboxgl.Marker[]>;
    isLineMarkersNeeded: boolean;
    theme: Theme;
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

/**
 * Создает попапы с данными о скорости и времени для каждой точки маршрута в зависимости от уровня зума.
 * @param map - объект карты Mapbox.
 * @param coordinates - массив координат [долгота, широта] для LineString.
 * @param speeds - массив скоростей для каждой точки.
 * @param time - массив времени сервера для каждой точки.
 * @param zoom - текущий уровень зума.
 */
export const createPopupsForLineString = (
    map?: mapboxgl.Map,
    coordinates?: [number, number][],
    speeds?: (number | null)[],
    time?: (string | null)[],
    zoom?: number,
) => {
    clear();

    if (!zoom || !map || !coordinates) return;

    // если зум ниже порога ZOOM_BREAKPOINTS.NONE, удаляем все активные попапы и return
    if (zoom < ZOOM_BREAKPOINTS.NONE) {
        return;
    }

    // интервал для отбражения попапов на основе уровня зума
    let popupInterval = 15; // Показывать 10 папов

    if (zoom >= ZOOM_BREAKPOINTS.HIGH) {
        popupInterval = 20; // Показывать 10 папов
    } else if (zoom >= ZOOM_BREAKPOINTS.MEDIUM) {
        popupInterval = 30; // Показывать 15 папов
    } else if (zoom >= ZOOM_BREAKPOINTS.LOW) {
        popupInterval = 40; // Показывать 20 папов
    }

    // очищаем все предыдущие попапы перед созданием новых
    const bounds = getMapBounds(map);

    const filteredCoordinates = coordinates.filter((coord) => {
        return isPointInBounds(coord, bounds);
    });

    const coollectionLength = filteredCoordinates.length;
    // создаем новые попапы
    filteredCoordinates.forEach((coordinate, index) => {
        if (Math.round(index % Math.round(coollectionLength / popupInterval)) === 0) {
            const pixelCoordinates = map.project(coordinate);

            if (!isTooCloseOnScreen(pixelCoordinates, activePixelPopups, 50)) {
                // Добавляем попап только если он не слишком близко к другим

                const speed = speeds ? speeds[index] : null;
                const serverTime = time ? time[index] : null;

                const popupContent = `
                <div>${serverTime ? moment(serverTime).format('YYYY.MM.DD HH:mm') : 'N/A'}</div>
                <div class="speed">${speed !== null ? `${speed.toFixed(2)} km/h` : 'Speed N/A'}</div>
                `;

                const popup = new mapboxgl.Popup({ closeButton: false, className: 'speed-popup' })
                    .setLngLat(coordinate)
                    .setHTML(popupContent);

                popup.addTo(map);
                activePopups.push(popup); // добавляем попап в массив активных попапов
                activePixelPopups.push(pixelCoordinates); // Добавляем точку в список
            }
        }
    });
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
}: IRenderLineStringPoints) => {
    if (geometry.coordinates && Array.isArray(geometry.coordinates)) {
        geometry.coordinates.forEach((coordinate, index) => {
            if (Array.isArray(coordinate) && coordinate.length === 2) {
                let markerElement = null;

                if (index === 0) {
                    markerElement = document.createElement('div');
                    markerElement.classList.add('start-end-line-marker');
                    markerElement.innerHTML = mapMarkerStartSvgContainer(theme.palette);
                } else if (index === geometry.coordinates.length - 1) {
                    markerElement = document.createElement('div');
                    markerElement.classList.add('start-end-line-marker');
                    markerElement.innerHTML = mapMarkerEndSvgContainer(theme.palette);
                } else if (isLineMarkersNeeded) {
                    markerElement = document.createElement('div');
                    markerElement.classList.add('common-line-marker');
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
