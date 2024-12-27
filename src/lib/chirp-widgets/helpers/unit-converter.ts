export type AttributeConverter = {
  convert: (value: number) => number;
  alternativeUnits: string;
};

type Converter = {
  [key: string]: AttributeConverter;
};

export const converter: Converter = {
  '°C': {
    convert: (value) => Math.round((value * 1.8 + 32) * 10) / 10,
    alternativeUnits: '°F'
  },
  hPa: {
    convert: (value) => value / 1.333,
    alternativeUnits: 'mmHg'
  }
};
