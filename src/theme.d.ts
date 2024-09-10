import { Theme as MUITheme } from '@mui/material';

declare module '@emotion/react' {
    export interface Theme extends MUITheme {}
}

declare module '@mui/material/styles' {
    export interface Palette extends CustomPalette {}

    export interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        paragraphPrimary: true;
        paragraphSecondary: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        primary: true;
        secondary: true;
        tertiary: true;
    }
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
    widgetValues: {
        min: string;
        avg: string;
        max: string;
    };
}

export interface CustomTheme extends MUITheme {
    palette: CustomPalette;
}
