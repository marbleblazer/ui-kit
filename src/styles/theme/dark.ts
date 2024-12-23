import { CurrentTheme } from '@chirp/ui/styles/constants';
import { alpha, PaletteOptions, ThemeOptions } from '@mui/material/styles';
import { referenceLightThemePalette } from './light';

export const referenceDarkThemePalette: Omit<PaletteOptions, 'base' | 'darkening' | 'border' | 'accent' | 'shadow'> = {
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

        // TODO: remove
        primary: '#101010',
        secondary: '#171717',
        tertiary: '#232323',
        quaternary: '#353535',
        fifth: '#444444',
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
        buttonSecondary: 'rgba(255, 77, 20, 0.1)', // #ff4d141a
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
    widgets: {
        text: 'rgba(235, 235, 235, 1)', // #EBEBEB
        values: {
            min: 'rgba(166, 173, 219, 1)', // #A6ADDB
            avg: 'rgba(236, 227, 209, 1)', // #ECE3D1
            max: 'rgba(255, 163, 134, 1)', // #FFA386
        },
        gradientPoints: {
            min: 'rgba(161, 169, 219, 1)', // #A1A9DB
            avg: 'rgba(243, 233, 207, 1)', // #F3E9CF
            max: 'rgba(255, 162, 133, 1)', // #FFA285
        },
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
        primary: 'rgba(16, 16, 16, 1)', // #101010
        default: 'rgba(35, 35, 35, 1)', // #232323
        paper: 'rgba(23, 23, 23, 0.8)', // #171717
    },
    info: {
        main: 'rgba(53, 53, 53, 1)', // #353535,
        light: 'rgba(35, 35, 35, 1)', // #232323
        dark: 'rgba(16, 16, 16, 1)', // #101010
    },
};

export const darkTheme: ThemeOptions = {
    palette: {
        ...referenceDarkThemePalette,
        mode: CurrentTheme.Dark,
        // primary: {
        //     main:  '#FF4D14',
        //     light: '#ffffff',
        //     dark: '#101010',
        // },
        shadow: {
            primary: '0px 3px 40px 2px rgba(0, 0, 0, 0.14), 0px 8px 10px 1px rgba(0, 0, 0, 0.14)',
        },
        // info: {
        //     main: '#FF4D14',
        // },
        background: {
            ...referenceDarkThemePalette.background,

            primary: referenceDarkThemePalette.darkShades.primary, // '#101010',
            secondary: referenceDarkThemePalette.darkShades.ternary, // '#232323',
            tertiary: referenceDarkThemePalette.darkShades.secondary, //'#171717',
            fifth: referenceDarkThemePalette.darkShades.fifth, // '#444444',
            fifthInput: referenceDarkThemePalette.darkShades.quaternary, // '#353535',

            // new colors
            background1: referenceDarkThemePalette.darkShades.primary, // '#101010',
            background2: referenceDarkThemePalette.darkShades.quaternary, // '#353535',
            background3: referenceDarkThemePalette.darkShades.fifth, // '#444444',
            background4: referenceDarkThemePalette.darkShades.primary, // '#101010',
            background5: referenceDarkThemePalette.darkShades.secondary, //'#171717',
            background6: referenceDarkThemePalette.darkShades.fifth, // '#444444',
            background7: referenceDarkThemePalette.darkShades.ternary, // '#232323',
            background8: referenceDarkThemePalette.darkShades.quaternary, // '#353535',
            background9: referenceDarkThemePalette.darkShades.secondary, //'#171717',
            background10: referenceDarkThemePalette.darkShades.primary, // '#101010',
            background11: referenceDarkThemePalette.darkShades.fifth, // '#444444',
            background12: referenceDarkThemePalette.darkShades.fifth, // '#444444',
            background13: referenceDarkThemePalette.darkShades.secondary, //'#171717',
            background14: alpha(referenceLightThemePalette.darkShades.primary, 0.5), //'#00000080',
            background15: alpha(referenceLightThemePalette.darkShades.secondary, 0.8), //'#171717CC',
            background16: alpha(referenceLightThemePalette.darkShades.secondary, 0.8), //'#171717CC',
        },

        accent: {
            accent: referenceDarkThemePalette.primaryColors.accent, // '#FF4D14',
            accent10: '#FF4D141A',
            accentHover: referenceDarkThemePalette.primaryColors.accentHover, //'#E7440F',
        },
        border: {
            primary: referenceDarkThemePalette.borders.primary, //'#BABABA1A',
            secondary: referenceDarkThemePalette.borders.secondary, //'#BABABA4D',

            // new colors
            border1: referenceDarkThemePalette.borders.secondary, //'#BABABA4D',
            border2: alpha(referenceDarkThemePalette.darkShades.ternary, 0.1), // '#2323241A',
            border3: referenceDarkThemePalette.borders.primary, //'#BABABA1A',
            border4: alpha(referenceLightThemePalette.darkShades.primary, 0.2), //'#00000033',
            border5: referenceDarkThemePalette.borders.secondary, //'#BABABA4D',
            input: alpha(referenceDarkThemePalette.darkShades.secondary, 0.14), //'#5C5C5C24',
            input2: alpha(referenceDarkThemePalette.darkShades.secondary, 0.24), //'#5C5C5C3D',
            input3: referenceDarkThemePalette.borders.secondary, //'#BABABA4D',
            input4Error: referenceDarkThemePalette.alerts.alert, //'#FF4949',
        },
        // alerts: {
        //     ...referenceLightThemePalette.alerts,
        //     green: referenceLightThemePalette.alerts.success, // '#55E050',
        //     yellow: referenceLightThemePalette.alerts.warning, // '#FFF614',
        //     red: referenceLightThemePalette.alerts.alert, //'#FF4949',
        // },
        text: {
            primary: referenceDarkThemePalette.lightShades.primary, //'#FFFFFF',
            secondary: referenceDarkThemePalette.lightShades.secondary, // '#EBEBEB',
            tertiary: referenceDarkThemePalette.lightShades.ternary, // '#BABABA',
            quaternary: '#A2A2A2',
            fifth: referenceDarkThemePalette.text?.secondary, // '#656565',

            // new colors
            text1: referenceDarkThemePalette.lightShades.secondary, // '#EBEBEB',
            text2: referenceDarkThemePalette.lightShades.primary, //'#FFFFFF',
            text3: referenceDarkThemePalette.lightShades.ternary, // '#BABABA',
            text4: referenceDarkThemePalette.lightShades.ternary, // '#BABABA',
            text5: referenceDarkThemePalette.text?.secondary, // '#656565',
            text6: referenceDarkThemePalette.lightShades.primary, //'#FFFFFF',
            text7: referenceDarkThemePalette.lightShades.secondary, // '#EBEBEB',
            text8: referenceDarkThemePalette.text?.secondary, // '#656565',
            search: referenceDarkThemePalette.lightShades.ternary, // '#BABABA',
            titleInput: referenceDarkThemePalette.text?.secondary, // '#656565',
            textInput40: referenceDarkThemePalette.lightShades.ternary, // '#BABABA',
            textInput60: referenceDarkThemePalette.lightShades.ternary, // '#BABABA',
            textInput80: referenceDarkThemePalette.lightShades.secondary, // '#EBEBEB',
            textInput802: referenceDarkThemePalette.lightShades.ternary, // '#BABABA',
        },
        // new colors:
        darkening: {
            darkening: referenceDarkThemePalette.darkShades.primary, // '#101010',
        },
        base: {
            color1: referenceDarkThemePalette.lightShades.primary, //'#FFFFFF',
            color2: referenceDarkThemePalette.darkShades.primary, // '#101010',
            color3: referenceDarkThemePalette.darkShades.quaternary, // '#353535',
            color4: alpha(referenceDarkThemePalette.lightShades.primary, 0.7), // '#B7B7B7',
            color5: referenceDarkThemePalette.lightShades.primary, //'#FFFFFF',
            color6: referenceDarkThemePalette.primaryColors.accent, // '#FF4D14',
            hover: referenceDarkThemePalette.primaryColors.accentHover, // '#E7440F',
            color61: referenceDarkThemePalette.additionalColors.buttonSecondary, //'#FF4D141A',
            color62: alpha(referenceDarkThemePalette.primaryColors.accent, 0.2), //'#FF4D1414',
            color63: referenceDarkThemePalette.additionalColors.buttonSecondary, // '#FF4D1433',
            color7: referenceDarkThemePalette.alerts.alert, //'#FF4949',
            color8: referenceDarkThemePalette.lightShades.primary, //'#FFFFFF',
            color21: '#FFA824',
            color9: '#01BE11',
            color10: '#D9D9D9',
            color11: '#586DEC',
            color12: '#7AD9E9',
            color16: referenceDarkThemePalette.additionalColors.lightBlue, //'#85EDFF',
            color17: '#50E0DB',
            color22: '#AB6CFF',
            color19: referenceDarkThemePalette.additionalColors.purple, //'#CCA6FF',
            color15: referenceDarkThemePalette.additionalColors.pink, //'#FFA6E3',
            color13: '#E85A2D',
            color14: '#FFB114',
            color18: '#FFE314',
            color20: '#CCFF5F',
            color23: referenceDarkThemePalette.additionalColors.blue, //'#5F75FF',
        },
    },
};
