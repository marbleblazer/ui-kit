ndeimport { ThemeOptions } from '@mui/material';

import { CurrentTheme } from '@/const/theme';

export const lightTheme: ThemeOptions = {
  palette: {
    mode: CurrentTheme.Light,
    primary: {
      main: 'rgba(255, 77, 20, 1)', // #ff4d14
      light: 'rgba(0, 0, 0, 1)', // #000000
      dark: 'rgba(99, 99, 99, 1)', // #636363
      contrastText: 'rgba(16, 16, 16, 1)', // #101010
    },
    secondary: {
      main: 'rgba(255, 255, 255, 1)', // button text
      contrastText: 'rgba(0, 0, 0, 1)', // '#000',
    },
    primaryColors: {
      accent: 'rgba(255, 77, 20, 1)', // #ff4d14
      accentHover: 'rgba(231, 68, 15, 1)', // #e7440f
    },
    text: {
      primary: 'rgba(16, 16, 16, 1)', // #141414
      secondary: 'rgba(154, 154, 154, 1)', // #9a9a9a
    },
    darkShades: {
      primary: 'rgba(244, 244, 244, 1)', // #efefef
      secondary: 'rgba(255, 255, 255, 1)', // #ffffff
      ternary: 'rgba(237, 237, 237, 1)', // #dcdcdc
      quaternary: 'rgba(212, 212, 212, 1)', // #cacaca
      fifth: 'rgba(229, 229, 229, 1)', // #e5e5e5
    },
    lightShades: {
      primary: 'rgba(0, 0, 0, 1)', // #000000
      secondary: 'rgba(23, 23, 23, 1)', // #141414
      ternary: 'rgba(69, 69, 69, 1)', // #454545
      quaternary: 'rgba(154, 154, 154, 1)', // #9a9a9a
    },
    borders: {
      primary: 'rgba(186, 186, 186, 0.1)', // #bababa1a
      secondary: 'rgba(186, 186, 186, 0.3)', // #bababa4d4
      ternary: 'rgba(197, 197, 197, 1)', // #bbbbbb
    },
    alerts: {
      success: 'rgba(0,185,0,1)', // #55e050
      warning: 'rgba(226, 204, 0, 1)', // #E2CC00
      alert: 'rgba(255, 73, 73, 1)', // #ff4949
    },
    additionalColors: {
      buttonSecondary: 'rgba(255, 77, 20, 0.2)', // #ff4d1433
      buttonSecondaryHv: 'rgba(255, 77, 20, 0.3)', // #ff4d144d
      blue: 'rgba(95, 117, 255, 1)', // #5f75ff
      lightYellow: 'rgba(253, 255, 132, 1)', // #fdff84
      yellow: 'rgba(255, 210, 98, 1)', // #ffd262
      lightBlue: 'rgba(132, 237, 255, 1)', // #84edff
      air: 'rgba(200, 247, 255, 1)', // #c8f7ff
      purple: 'rgba(204, 166, 255, 1)', // #cca6ff
      pink: 'rgba(255, 166, 227, 1)', // #ffa6e3
      mutedGreen: 'rgba(80, 224, 147, 0.15)', // #50e09326
    },
    grey: {
      50: '#000000',
      100: '#060606',
      200: '#0A0909',
      300: '#0C0C0C',
      400: '#1D1D1C',
      500: '#3A3938',
      600: '#4D4C4A',
      700: '#868583',
      800: '#ADABA6',
      900: '#D5D4CF',
    },
    background: {
      default: 'rgba(255, 255, 255, 1)', // #ffffff
      paper: 'rgba(232,232,232 ,0.8)', // #e8e8e8cc
    },
    info: {
      main: 'rgba(244, 244, 244, 1)', // #efefef
      light: 'rgba(255, 255, 255, 1)', // #ffffff
      dark: 'rgba(255, 255, 255, 1)', // #ffffff
    },
  },
};
