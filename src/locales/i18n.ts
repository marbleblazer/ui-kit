import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { languages } from './languages';
import resources from './resources';

const LANGUAGE_COOKIE_KEY = 'language';

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'ru',
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

export { languages };

export default i18n;
