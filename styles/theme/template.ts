import { ThemeOptions } from '@mui/material';

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
}

export const themeTemplate: CustomThemeOptions = {
  typography: {
    fontSize: 16,
    fontFamily: '"Alliance No.2", Arial, sans-serif',
    h1: {
      fontSize: 40,
      lineHeight: '48px',
      fontWeight: 400,
    },
    h2: {
      fontSize: 32,
      lineHeight: '40px',
      fontWeight: 400,
    },
    h3: {
      fontSize: 24,
      lineHeight: '32px',
      fontWeight: 400,
      letterSpacing: '0.18px',
    },
    h4: {
      fontSize: 20,
      lineHeight: '24px',
      fontWeight: 400,
      letterSpacing: '0.15px',
    },
    h5: {
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: '0.3px',
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
      fontFamily: '"Simplon mono", Arial, sans-serif',
    },
    button: {
      fontSize: 16,
      lineHeight: '20px',
      fontWeight: 500,
      textTransform: 'none',
      letterSpacing: '1px',
      fontFamily: '"Simplon mono", Arial, sans-serif',
    },
    caption: {
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.4px',
      fontFamily: '"Simplon mono", Arial, sans-serif',
    },
    overline: {
      fontSize: 10,
      lineHeight: '16px',
      fontWeight: 500,
      letterSpacing: '1.5px',
      fontFamily: '"Simplon mono", Arial, sans-serif',
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
