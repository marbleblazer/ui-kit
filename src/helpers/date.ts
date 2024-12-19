export const checkDeviceStatus = (lastSeen: number) => {
    const offlineTimeGap = 1000 * 60 * 1;
    const isOnline = Date.now() - lastSeen * 1000 < offlineTimeGap;

    return isOnline;
};

export const formatDate = (timestamp: number, format: Intl.DateTimeFormatOptions, locale = 'en-US') => {
    const millisecondsDate = timestamp * 1000;

    const formattedDate = new Intl.DateTimeFormat(locale, format).format(millisecondsDate);

    return formattedDate;
};

export const msToTime = (duration: number) => {
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));

    return { seconds, minutes, hours, days };
};

export const relativeTime = (ms: number, locale = 'en-US') => {
    const { seconds, minutes, hours, days } = msToTime(ms);
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

    if (days > 0) {
        return rtf.format(-days, 'day');
    }

    if (hours > 0) {
        return rtf.format(-hours, 'hour');
    }

    if (minutes > 0) {
        return rtf.format(-minutes, 'minute');
    }

    return rtf.format(-seconds, 'second');
};

export const isTodayDate = (date: Date) => {
    const now = new Date();

    return (
        date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
    );
};
