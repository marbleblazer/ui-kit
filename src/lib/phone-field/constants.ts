import { TFunction } from 'i18next';

/** Мапа для соответствия ISO-кодов стран и их телефонных кодов */
export const COUNTRIES = (
    countriesT: TFunction<'uiKit', 'PhoneField.countries'>,
): Record<string, { dialCode: string; name: string }> => ({
    us: { dialCode: '+1', name: countriesT('USA') },
    ru: { dialCode: '+7', name: countriesT('Russia') },
    de: { dialCode: '+49', name: countriesT('Germany') },
    pt: { dialCode: '+351', name: countriesT('Portugal') },
    es: { dialCode: '+34', name: countriesT('Spain') },
    fr: { dialCode: '+33', name: countriesT('France') },
});
