import { parsePhoneNumber } from 'libphonenumber-js';

export const isCountryCodeValid = (validCountryCodes: string[], countryCode: string) =>
    validCountryCodes.includes(countryCode);

export function getParsedNumber(validCountryCodes: string[], phoneNumberStr: string) {
    if (phoneNumberStr.length < 3) {
        return { countryCode: '', countryCallingCode: '', number: '' };
    }

    // Парсинг номера телефона
    const parsedNumber = parsePhoneNumber(`+${phoneNumberStr}`);

    // Получение кода страны
    const countryCode = parsedNumber.country?.toLowerCase();

    if (!isCountryCodeValid(validCountryCodes, countryCode || '')) {
        return { countryCode: '', countryCallingCode: '1', number: '' };
    }

    const countryCallingCode = parsedNumber.countryCallingCode;

    const number = parsedNumber.nationalNumber;

    return { countryCode, countryCallingCode, number };
}
