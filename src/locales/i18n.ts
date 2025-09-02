import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { languages } from './languages';
import resources from './resources';
import LanguageDetector from 'i18next-browser-languagedetector';

const LANGUAGE_COOKIE_KEY = 'language';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        supportedLngs: Object.keys(languages),
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['cookie'],
            lookupCookie: LANGUAGE_COOKIE_KEY,
            caches: ['cookie'],
        },
    });

export const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
};

export { languages };

export default i18n;
