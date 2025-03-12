import moment from 'moment';
import 'moment/dist/locale/ru.js';
import 'moment/dist/locale/fr.js';
import 'moment/dist/locale/es.js';
import 'moment/dist/locale/de.js';

export function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export function formatDateString(dateString: string): string {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const day = String(date.getDate()).padStart(2, '0');

    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${year}${month}${day}T${hours}${minutes}${seconds}`;
}

export function formatDateFromCalendarTemplate(isoString?: string, separator: '/' | '-' = '/'): string {
    if (!isoString) {
        return '';
    }
    // Проверяем, что строка имеет нужный формат
    const regex = /^(\d{4})(\d{2})(\d{2})T\d{6}$/;
    const match = isoString.match(regex);

    if (match) {
        const year = match[1];
        const month = match[2];
        const day = match[3];

        // Форматируем дату в нужный вид
        if (separator === '/') {
            return `${day}/${month}/${year}`;
        } else if (separator === '-') {
            return `${year}-${month}-${day}`;
        }
    }

    throw new Error('Invalid date format');
}

export const formatLastSeen = (dateStr: string, lang: string) => {
    const date = moment(dateStr).locale(lang);
    const today = moment().format('YYYY-MM-DD');

    if (date.isSame(today, 'day')) {
        return date.format('HH:mm');
    } else {
        return date.format('MMM D, YY HH:mm');
    }
};
