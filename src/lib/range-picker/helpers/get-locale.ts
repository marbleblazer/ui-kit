import { enUS, ru, fr, de, es, Locale } from 'date-fns/locale';

const localeMap: Record<string, Locale> = {
    en: enUS,
    ru: ru,
    fr: fr,
    de: de,
    es: es,
};

export const getLocaleObj = (lang: string) => {
    const localeKey = lang.split('-')[0];

    return localeMap[localeKey] || enUS;
};
