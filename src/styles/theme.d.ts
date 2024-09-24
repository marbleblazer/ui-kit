/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { Theme as MUITheme, TypeText, TypeBackground } from '@mui/material';
declare module '@emotion/react' {
    export interface Theme extends MUITheme {}
}

declare module '@mui/material/styles' {
    export interface Palette extends CustomPalette {}

    export interface PaletteOptions extends CustomPalette {}

    export interface TypeBackground extends TypeBackground, CustomTypeBackground {}

    export interface TypeText extends TypeText, CustomTypeText {}

    interface TypographyVariants {
        paragraphPrimary: React.CSSProperties;
        paragraphSecondary: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        paragraphPrimary?: React.CSSProperties;
        paragraphSecondary?: React.CSSProperties;
    }
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

type CustomTypeText = {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    fifth: string;
};

type CustomTypeBackground = {
    primary: string;
    secondary: string;
    tertiary: string;
    fifth: string;
    fifthInput: string;
};

export interface CustomPalette {
    shadow: {
        primary: string;
    };
    background: CustomTypeBackground;
    primaryColors: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        fifth: string;
    };
    accent: {
        accent: string;
        accent10: string;
        accent16: string;
        accentHover: string;
    };
    border: {
        primary: string;
        secondary: string;
        tertiaryInput: string;
    };
    text: CustomTypeText;
    alerts: {
        green: string;
        yellow: string;
        red: string;
    };
}

export interface CustomTheme extends MUITheme {
    palette: CustomPalette;
}
