import mapboxgl from 'mapbox-gl';
import moment from 'moment';

const ZOOM_BREAKPOINTS = {
    HIGH: 14, // показывать каждый 2-й попап
    MEDIUM: 11, // показывать каждый 10-й попап
    LOW: 8, // показывать каждый 40-й попап
    NONE: 7.5, // ничего не показывать
};

// массив для хранения активных попапов
let activePopups: mapboxgl.Popup[] = [];

/**
 * Создает попапы с данными о скорости и времени для каждой точки маршрута в зависимости от уровня зума.
 * @param map - объект карты Mapbox.
 * @param coordinates - массив координат [долгота, широта] для LineString.
 * @param speeds - массив скоростей для каждой точки.
 * @param serverTimes - массив времени сервера для каждой точки.
 * @param zoom - текущий уровень зума.
 */
export const createPopupsForLineString = (
    map: mapboxgl.Map,
    coordinates: [number, number][],
    speeds: (number | null)[],
    serverTimes: (string | null)[],
    zoom?: number,
) => {
    if (!zoom || !map || !coordinates) return;

    // если зум ниже порога ZOOM_BREAKPOINTS.NONE, удаляем все активные попапы и return
    if (zoom < ZOOM_BREAKPOINTS.NONE) {
        activePopups.forEach((popup) => popup.remove());
        activePopups = []; // Очищаем массив
        return;
    }

    // интервал для отбражения попапов на основе уровня зума
    let popupInterval = 40; // По умолчанию каждые 40 точек

    if (zoom >= ZOOM_BREAKPOINTS.HIGH) {
        popupInterval = 2; // Показывать каждый 2-й попап
    } else if (zoom >= ZOOM_BREAKPOINTS.MEDIUM) {
        popupInterval = 10; // Показывать каждый 10-й попап
    } else if (zoom >= ZOOM_BREAKPOINTS.LOW) {
        popupInterval = 40; // Показывать каждый 40-й попап
    }
    // очищаем все предыдущие попапы перед созданием новых
    activePopups.forEach((popup) => popup.remove());
    activePopups = [];

    // создаем новые попапы
    coordinates.forEach((coordinate, index) => {
        if (index % popupInterval === 0) {
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
        }
    });
};
