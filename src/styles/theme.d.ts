/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { Theme as MUITheme, TypeBackground } from '@mui/material';
declare module '@emotion/react' {
    export interface Theme extends MUITheme {}
}

declare module '@mui/material/styles' {
    export interface Palette extends CustomPalette, ReferencePalette {}

    export interface PaletteOptions extends CustomPalette, ReferencePalette {}

    export interface TypeBackground
        extends TypeBackground,
            CustomTypeBackground,
            Record<BackgroundColorNameType, string> {}

    export interface TypeText extends TypeText, CustomTypeText, Record<TextColorNameType, string> {}

    interface TypographyVariants extends Record<CustomTypographyKeys, React.CSSProperties> {
        paragraphPrimary: React.CSSProperties;
        paragraphSecondary: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions extends Partial<Record<CustomTypographyKeys, React.CSSProperties>> {
        paragraphPrimary?: React.CSSProperties;
        paragraphSecondary?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides extends Record<CustomTypographyKeys, true> {
        paragraphPrimary: true;
        paragraphSecondary: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        primary: true;
        secondary: true;
        tertiary: true;
        alertText: true;
        alert: true;
        alertSecondary: true;
    }
}

type CustomTypographyKeys = 'title16' | 'title14' | 'title12' | 'text13' | 'caption12' | 'caption8' | 'mono10';

type CustomTypeText = {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    fifth: string;
};

type CustomTypeBackground = {
    primary: string;
};

type BackgroundColorNameType =
    | 'background1'
    | 'background2'
    | 'background3'
    | 'background4'
    | 'background5'
    | 'background6'
    | 'background7'
    | 'background8'
    | 'background9'
    | 'background10'
    | 'background11'
    | 'background12'
    | 'background13'
    | 'background14'
    | 'background15'
    | 'background16';

type TextColorNameType =
    | 'text1'
    | 'text2'
    | 'text3'
    | 'text4'
    | 'text5'
    | 'text6'
    | 'text7'
    | 'text8'
    | 'text9'
    | 'search'
    | 'titleInput'
    | 'titleInput'
    | 'textInput40'
    | 'textInput60'
    | 'textInput80'
    | 'textInput802';

type BorderColorNameType =
    | 'border1'
    | 'border2'
    | 'border3'
    | 'border4'
    | 'border5'
    | 'input'
    | 'input2'
    | 'input3'
    | 'input4Error';

type DarkeningColorNameType = 'darkening';

type BaseColorNameType =
    | 'color1'
    | 'color2'
    | 'color3'
    | 'color4'
    | 'color5'
    | 'color6'
    | 'hover'
    | 'color61'
    | 'color62'
    | 'color63'
    | 'color7'
    | 'color7_20'
    | 'color8'
    | 'color21'
    | 'color9'
    | 'color10'
    | 'color11'
    | 'color12'
    | 'color16'
    | 'color16_20'
    | 'color17'
    | 'color22'
    | 'color19'
    | 'color19_20'
    | 'color15'
    | 'color13'
    | 'color14'
    | 'color18'
    | 'color23'
    | 'color20'
    | 'colorNewGreen'
    | 'colorNewGreen_20'
    | 'colorNewYellow'
    | 'colorNewYellow_20'
    | 'colorNewGrey'
    | 'colorNewGrey_20'
    | 'colorNewRed'
    | 'colorNewYellow01'
    | 'colorNewYellow02'
    | 'colorNewYellow03';

export interface ReferencePalette extends PaletteOptions {
    background: Partial<TypeBackground> | undefined;
    primaryColors: {
        accent: string;
        accentHover: string;
    };
    darkShades: {
        primary: string;
        secondary: string;
        ternary: string;
        quaternary: string;
        fifth: string;
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
    widgets: {
        text: string;
        values: {
            min: string;
            avg: string;
            max: string;
        };
        gradientPoints: {
            min: string;
            avg: string;
            max: string;
        };
    };
    grey: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
}

export interface CustomPalette extends ReferencePalette {
    shadow: {
        primary: string;
    };
    background: CustomTypeBackground & Record<BackgroundColorNameType, string>;
    text: CustomTypeText & Record<TextColorNameType, string>;
    border: Record<BorderColorNameType, string>;
    darkening: Record<DarkeningColorNameType, string>;
    base: Record<BaseColorNameType, string>;
}

export interface CustomThemeInterface extends MUITheme {
    palette: CustomPalette;
}
