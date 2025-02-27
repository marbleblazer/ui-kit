export const setObjectIntoStorage = (key: string, value: object) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getObjectFromStorage = (key: string) => {
    try {
        const value = localStorage.getItem(key);

        return value ? JSON.parse(value) : value;
    } catch (e) {
        console.error('getObjectFromStorage error', e);
    }
};

export const graphTimeFormat = {
    hour: '%H',
    day: '%d %b',
    week: '%d %b',
    month: '%b',
};
