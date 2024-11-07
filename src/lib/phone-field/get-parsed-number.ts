import { parsePhoneNumber } from 'libphonenumber-js';

export function getParsedNumber(phoneNumberStr: string) {
    // Парсинг номера телефона
    const parsedNumber = parsePhoneNumber(`+${phoneNumberStr}`);

    // Получение кода страны
    const countryCode = parsedNumber.country?.toLowerCase();

    const countryCallingCode = parsedNumber.countryCallingCode;

    const number = parsedNumber.formatNational();

    return { countryCode, countryCallingCode, number };
}
