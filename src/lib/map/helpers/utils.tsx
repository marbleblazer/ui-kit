import mapboxgl from 'mapbox-gl';
import moment from 'moment';
import { LineString, Point } from 'geojson';
import { RefObject } from 'react';
import { mapMarkerEndSvgContainer, mapMarkerStartSvgContainer } from '../svg-containers';
import { Palette, Theme } from '@mui/material';
import { mapMarkerSvgString } from '../mp-marker-string';

interface IPixelCoordType {
    x: number;
    y: number;
}

interface IRenderPoints {
    geometry: Point;
    popupMarkup: string;
    map: RefObject<mapboxgl.Map | null>;
    markersRef: RefObject<mapboxgl.Marker[]>;
    theme: Theme;
    specificMarkerIcon?: (theme: Palette) => string;
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
 * @param serverTimes - массив времени сервера для каждой точки.
 * @param zoom - текущий уровень зума.
 */
export const createPopupsForLineString = (
    map?: mapboxgl.Map,
    coordinates?: [number, number][],
    speeds?: (number | null)[],
    serverTimes?: (string | null)[],
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
                const serverTime = serverTimes ? serverTimes[index] : null;

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
export const renderPoints = ({ geometry, popupMarkup, map, markersRef, theme, specificMarkerIcon }: IRenderPoints) => {
    const markerElement = document.createElement('div');

    let popup: mapboxgl.Popup | null = null;

    if (specificMarkerIcon) {
        markerElement.innerHTML = specificMarkerIcon(theme.palette);
    } else {
        markerElement.innerHTML = mapMarkerSvgString(theme.palette);
    }

    const markerInstance = new mapboxgl.Marker({ element: markerElement }).setLngLat(
        geometry.coordinates as [number, number],
    );

    if (popupMarkup) {
        popup = new mapboxgl.Popup({ anchor: 'top-left' }).setHTML(popupMarkup);
    }

    if (markerElement) {
        markerElement.addEventListener('mouseover', () => {
            if (popup) {
                popup.addTo(map.current!);
            }
        });

        markerElement.addEventListener('mouseout', () => {
            if (popup) {
                popup.remove();
            }
        });
    }

    if (popup) {
        markerInstance.setPopup(popup);
    }

    if (map.current) {
        markerInstance.addTo(map.current);
    }

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
