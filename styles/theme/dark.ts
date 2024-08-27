import { ThemeOptions } from '@mui/material';
import { CurrentTheme } from '../constants';

export const darkTheme: ThemeOptions = {
    palette: {
        mode: CurrentTheme.Dark,
        primary: {
            main: 'rgba(255, 77, 20, 1)', // #ff4d14
            light: 'rgba(255, 255, 255, 1)', // #ffffff
            dark: 'rgba(16, 16, 16, 1)', // #101010
            contrastText: 'rgba(101, 101, 101, 1)', // #656565
        },
        secondary: {
            main: 'rgba(255, 255, 255, 1)', // #ffffff
            contrastText: 'rgba(0, 0, 0, 1)', // #000000,
        },
        primaryColors: {
            accent: 'rgba(255, 77, 20, 1)', // #ff4d14
            accentHover: 'rgba(231, 68, 15, 1)', // #e7440f
        },
        text: {
            primary: 'rgba(235, 235, 235, 1)', // #ebebeb
            secondary: 'rgba(101, 101, 101, 1)', // #656565
        },
        darkShades: {
            primary: 'rgba(16, 16, 16, 1)', // #101010
            secondary: 'rgba(23, 23, 23, 1)', // #171717
            ternary: 'rgba(35, 35, 35, 1)', // #232323
            quaternary: 'rgba(53, 53, 53, 1)', // #353535
            fifth: 'rgba(68, 68, 68, 1)', // #444444
        },
        lightShades: {
            primary: 'rgba(255, 255, 255, 1)', // #ffffff
            secondary: 'rgba(235, 235, 235, 1)', // #ebebeb
            ternary: 'rgba(186, 186, 186, 1)', // #bababa
            quaternary: 'rgba(101, 101, 101, 1)', // #656565
        },
        borders: {
            primary: 'rgba(186, 186, 186, 0.1)', // #bababa1a
            secondary: 'rgba(186, 186, 186, 0.3)', // #bababa4d4
            ternary: 'rgba(40, 40, 40, 1)', // #282828
        },
        alerts: {
            success: 'rgba(85, 224, 80, 1)', // #55e050
            warning: 'rgba(255, 246, 20, 1)', // #fff614
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
            50: '#FFFFFF',
            100: '#F9F9F9',
            200: '#F5F6F6',
            300: '#F3F3F3',
            400: '#E2E2E3',
            500: '#C5C6C7',
            600: '#B2B3B5',
            700: '#797A7D',
            800: '#525458',
            900: '#292A2D',
        },
        background: {
            default: 'rgba(35, 35, 35, 1)', // #232323
            paper: 'rgba(23, 23, 23, 0.8)', // #171717
        },
        info: {
            main: 'rgba(53, 53, 53, 1)', // #353535,
            light: 'rgba(35, 35, 35, 1)', // #232323
            dark: 'rgba(16, 16, 16, 1)', // #101010
        },
    },
};
