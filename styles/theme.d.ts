import { Theme as MUITheme } from '@mui/material';

declare module '@emotion/react' {
    export interface Theme extends MUITheme {}
}

declare module '@mui/material/styles' {
    export interface Palette extends CustomPalette {}

    export interface PaletteOptions extends CustomPalette {}
}

export interface CustomPalette {
    primaryColors: {
        accent: string;
        accentHover: string;
    };
    darkShades: {
        primary: string;
        secondary: string;
        ternary: string;
        quaternary: string;
        fifth?: string;
    };
    lightShades: {
        primary: string;
        secondary: string;
        ternary: string;
        quaternary: string;
    };
    borders: {
        primary: string;
        secondary: string;
        ternary: string;
    };
    alerts: {
        success: string;
        warning: string;
        alert: string;
    };
    additionalColors: {
        buttonSecondary: string;
        buttonSecondaryHv: string;
        blue: string;
        lightYellow: string;
        yellow: string;
        lightBlue: string;
        air: string;
        purple: string;
        pink: string;
        mutedGreen: string;
    };
}

export interface CustomTheme extends MUITheme {
    palette: CustomPalette;
}
