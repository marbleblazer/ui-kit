/** Маска для номера телефона (без кода страны) */
export const applyPhoneNumberMask = (value: string, countryCode?: string): string => {
    if (countryCode === 'us' || value.startsWith('+1')) {
        // Маска для США: (999) 999-9999
        const cleaned = value.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

        if (!match) return value;

        return `${match[1] ? `(${match[1]}` : ''}${match[2] ? `) ${match[2]}` : ''}${match[3] ? `-${match[3]}` : ''}`;
    } else if (countryCode === 'ru' || value.startsWith('+7')) {
        // Маска для России: (999) 999-99-99
        const cleaned = value.replace(/\D/g, ''); // Убираем все нецифровые символы
        const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);

        if (!match) return value;

        // Форматируем номер как: (999) 999-99-99
        return `${match[1] ? `(${match[1]}` : ''}${match[2] ? `) ${match[2]}` : ''}${match[3] ? `-${match[3]}` : ''}${match[4] ? `-${match[4]}` : ''}`;
    }

    return value; // Для остальных стран маски нет
};

/** Маска для международного номера телефона (с кодом страны) */
export const applyInternationalPhoneMask = (value: string): string => {
    const cleaned = value.replace(/\D/g, ''); // Убираем все нецифровые символы кроме +

    if (value.startsWith('+7') || cleaned.startsWith('7')) {
        // Маска для России: +7 (999) 999-99-99
        const match = cleaned.replace(/^\+?7?/, '').match(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);

        if (!match) return value;

        return `+7 ${match[1] ? `(${match[1]}` : ''}${match[2] ? `) ${match[2]}` : ''}${match[3] ? `-${match[3]}` : ''}${match[4] ? `-${match[4]}` : ''}`;
    } else if (value.startsWith('+1') || cleaned.startsWith('1')) {
        // Маска для США: +1 (999) 999-9999
        const match = cleaned.replace(/^\+?1?/, '').match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

        if (!match) return value;

        return `+1 ${match[1] ? `(${match[1]}` : ''}${match[2] ? `) ${match[2]}` : ''}${match[3] ? `-${match[3]}` : ''}`;
    }

    // Для других стран оставляем как есть или минимальное форматирование
    return value.startsWith('+') ? value : `+${value}`;
};

/** Блокировка ввода при достижении максимально возможной длины номера телефона */
export const getMaxLength = (countryCode: string) => {
    if (countryCode === 'ru' || countryCode === 'us') return 10; // Максимум 10 цифр для России и США

    return 16; // Для остальных — максимум 16 цифр
};

/** Для отделения кода страны от номера */
export const stripDialCode = (value: string, dialCode: string) => {
    return value.startsWith(dialCode) ? value.slice(dialCode.length) : value;
};
