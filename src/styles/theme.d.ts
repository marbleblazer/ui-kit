/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { Theme as MUITheme, TypeText, TypeBackground } from '@mui/material';
declare module '@emotion/react' {
    export interface Theme extends MUITheme {}
}

declare module '@mui/material/styles' {
    export interface Palette extends CustomPalette {}

    export interface PaletteOptions extends CustomPalette {}

    export interface TypeBackground
        extends TypeBackground,
            CustomTypeBackground,
            Record<BackgroundColorNameType, string> {}

    export interface TypeText extends TypeText, CustomTypeText, Record<TextColorNameType, string> {}

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
    | 'color8'
    | 'color21'
    | 'color9'
    | 'color10'
    | 'color11'
    | 'color12'
    | 'color16'
    | 'color17'
    | 'color22'
    | 'color19'
    | 'color15'
    | 'color13'
    | 'color14'
    | 'color18'
    | 'color20';
export interface CustomPalette {
    shadow: {
        primary: string;
    };
    // TODO: удалить все старые типы
    // background: CustomTypeBackground;
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
        accentHover: string;
    };
    // border: {
    //     primary: string;
    //     secondary: string;
    //     tertiaryInput: string;
    // };
    // text: CustomTypeText; // TODO: remove after move on new design system
    alerts: {
        green: string;
        yellow: string;
        red: string;
    };

    // new colors
    // пока оставляем старые типы для совместимости
    background: CustomTypeBackground & Record<BackgroundColorNameType, string>; // TODO: remove CustomTypeBackground
    text: CustomTypeText & Record<TextColorNameType, string>;
    border: {
        primary: string;
        secondary: string;
        tertiaryInput: string;
    } & Record<BorderColorNameType, string>;
    darkening: Record<DarkeningColorNameType, string>;
    base: Record<BaseColorNameType, string>;
}

export interface CustomThemeInterface extends MUITheme {
    palette: CustomPalette;
}
