import { ThemeOptions } from '@mui/material';
import { FontStyleOptions, TypographyStyleOptions } from '@mui/material/styles/createTypography';

export type CustomTypographyVariant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'paragraphPrimary'
    | 'paragraphSecondary'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'

    // new typos
    | 'title20'
    | 'title16'
    | 'title14'
    | 'title12'
    | 'btnPrimary'
    | 'btnSecondary'
    | 'inputText'
    | 'inputLabel'
    | 'text16'
    | 'text14'
    | 'text1402'
    | 'text13'
    | 'text12'
    | 'caption12'
    | 'caption10'
    | 'caption8'
    | 'mono1218'
    | 'mono1213'
    | 'mono10';

export interface CustomThemeTypography
    extends Partial<Record<CustomTypographyVariant, TypographyStyleOptions> & FontStyleOptions> {}

export interface CustomThemeOptions extends ThemeOptions {
    breakpoints: {
        values: {
            xs: number;
            sm: number;
            md: number;
            xm: number;
            lg: number;
            xl: number;
            xxl: number;
        };
    };
    typography: CustomThemeTypography;
}

export const themeTemplate: CustomThemeOptions = {
    spacing: 4,
    typography: {
        fontSize: 16,
        fontFamily: '"Alliance No.2", Arial, sans-serif',
        h1: {
            fontSize: 24,
            lineHeight: '32px',
            fontWeight: 500,
            letterSpacing: 0,
        },
        h2: {
            fontSize: 20,
            lineHeight: '24px',
            fontWeight: 500,
            letterSpacing: '0.15%',
        },
        title20: {
            fontSize: 20,
            lineHeight: '24px',
            fontWeight: 500,
            letterSpacing: '0.5%',
        },
        title16: {
            fontSize: 16,
            lineHeight: '20px',
            fontWeight: 500,
            letterSpacing: '0.5%',
        },
        title14: {
            fontSize: 14,
            lineHeight: '20px',
            fontWeight: 500,
            letterSpacing: '0.5%',
        },
        title12: {
            fontSize: 12,
            lineHeight: '20px',
            fontWeight: 500,
            letterSpacing: '0.4%',
        },
        btnPrimary: {
            fontSize: 13,
            lineHeight: '20px',
            fontWeight: 500,
            letterSpacing: '0.5%',
        },
        btnSecondary: {
            fontSize: 12,
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.5%',
        },
        inputText: {
            fontSize: 13,
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.5%',
        },
        inputLabel: {
            fontSize: 12,
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.5%',
        },
        text16: {
            fontSize: 16,
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.5%',
        },
        text14: {
            fontSize: 14,
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.2%',
        },
        text1402: {
            fontSize: 14,
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.2px',
        },
        text13: {
            fontSize: 13,
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.5px',
        },

        text12: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 400,
            letterSpacing: '0.5px',
        },
        caption12: {
            fontSize: 12,
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.4px',
        },
        caption10: {
            fontSize: 10,
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.2%',
        },
        caption8: {
            fontSize: 8,
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.5%',
        },
        mono1218: {
            fontSize: 12,
            lineHeight: '18px',
            fontWeight: 400,
            letterSpacing: 0,
            fontFamily: '"Simplon mono", Arial, sans-serif',
        },
        mono1213: {
            fontSize: 12,
            lineHeight: '13px',
            fontWeight: 400,
            letterSpacing: '0.25px',
            fontFamily: '"Simplon mono", Arial, sans-serif',
        },
        mono10: {
            fontSize: 12,
            lineHeight: '13px',
            fontWeight: 400,
            letterSpacing: '0.5%',
            fontFamily: '"Simplon mono", Arial, sans-serif',
        },
        // TODO: удалить все что снизу после того как эти шрифты перестанут где либо использоваться
        // h1: {
        //     fontSize: 40,
        //     lineHeight: '48px',
        //     fontWeight: 500,
        // },
        // h2: {
        //     fontSize: 24,
        //     lineHeight: '32px',
        //     fontWeight: 500,
        // },
        h3: {
            fontSize: 20,
            lineHeight: '24px',
            fontWeight: 500,
            letterSpacing: '0.15px',
        },
        h4: {
            fontSize: 18,
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.3px',
        },
        paragraphPrimary: {
            fontSize: 14,
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.5%',
            fontFamily: '"Simplon mono", Arial, sans-serif',
        },
        paragraphSecondary: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 400,
            letterSpacing: '0.5%',
            fontFamily: '"Simplon mono", Arial, sans-serif',
        },
        subtitle1: {
            fontSize: 16,
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.3px',
        },
        subtitle2: {
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 400,
            letterSpacing: '0.5px',
            fontFamily: '"Simplon mono", Arial, sans-serif',
        },
        body1: {
            fontSize: 14,
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.2px',
        },
        body2: {
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: '0.25px',
            fontFamily: '"Alliance No.2", Arial, sans-serif',
        },
        button: {
            fontSize: 13,
            lineHeight: '16px',
            fontWeight: 400,
            textTransform: 'none',
            letterSpacing: '0.4px',
            fontFamily: '"Alliance No.2", Arial, sans-serif',
        },
        caption: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 400,
            letterSpacing: '0.4px',
            fontFamily: '"Alliance No.2", Arial, sans-serif',
        },
        overline: {
            fontSize: 10,
            lineHeight: '13px',
            fontWeight: 400,
            letterSpacing: '0.5px',
            textTransform: 'none',
            fontFamily: '"Alliance No.2", Arial, sans-serif',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            xm: 1024,
            lg: 1248,
            xl: 1440,
            xxl: 1536,
        },
    },
};
