export type AttributeConverter = {
    convert: (value: number) => number;
    alternativeUnits: string;
};

export type Converter = {
    [key: string]: AttributeConverter;
};

export const converter: Converter = {
    '°C': {
        convert: (value) => value * 1.8 + 32,
        alternativeUnits: '°F',
    },
    hPa: {
        convert: (value) => value / 1.333,
        alternativeUnits: 'mmHg',
    },
};
