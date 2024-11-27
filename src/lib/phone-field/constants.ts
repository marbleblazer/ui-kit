/** Мапа для соответствия ISO-кодов стран и их телефонных кодов */
export const COUNTRIES: Record<string, { dialCode: string; name: string }> = {
    us: { dialCode: '+1', name: 'USA' },
    ru: { dialCode: '+7', name: 'Russia' },
    de: { dialCode: '+49', name: 'Germany' },
    pt: { dialCode: '+351', name: 'Portugal' },
    es: { dialCode: '+34', name: 'Spain' },
};
