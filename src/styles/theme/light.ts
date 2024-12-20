import { CurrentTheme } from '@chirp/ui/styles/constants';
import { alpha, PaletteOptions, ThemeOptions } from '@mui/material/styles';
import { referenceDarkThemePalette } from './dark';

export const referenceLightThemePalette: Omit<PaletteOptions, 'base' | 'darkening' | 'border' | 'accent' | 'shadow'> = {
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

        // TODO: remove
        primary: '#FFFFFF',
        secondary: '#EBEBEB',
        tertiary: '#BABABA',
        quaternary: '#F4F4F4',
        fifth: '#444444',
    },
    text: {
        primary: 'rgba(16, 16, 16, 1)', // #141414
        secondary: 'rgba(154, 154, 154, 1)', // #9a9a9a
    },
    darkShades: {
        primary: 'rgba(0, 0, 0, 1)', // #000000
        secondary: 'rgba(92, 92, 92, 1)', // #5C5C5C
        ternary: 'rgba(166, 166, 166, 1)', // #A6A6A6
        quaternary: 'rgba(228, 228, 228, 1)', // #e4e4e4
        fifth: 'rgba(244, 244, 244, 1)', // #F4F4F4
    },
    lightShades: {
        primary: 'rgba(255, 255, 255, 1)', // #FFFFFF
        secondary: 'rgba(23, 23, 23, 1)', // #141414
        ternary: 'rgba(69, 69, 69, 1)', // #454545
        quaternary: 'rgba(154, 154, 154, 1)', // #9a9a9a
    },
    borders: {
        primary: 'rgba(0, 0, 0, 0.1)', // #000000 10%
        secondary: 'rgba(0, 0, 0, 0.8)', // #000000 8%
        ternary: 'rgba(197, 197, 197, 1)', // #bbbbbb
    },
    alerts: {
        success: 'rgba(1, 190, 17, 1)', // #01BE11
        warning: 'rgba(255, 168, 36, 1)', // #FFA824
        alert: 'rgba(255, 73, 73, 1)', // #FF4949
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
        text: 'rgba(16, 16, 16, 1)', // #101010
        values: {
            min: 'rgba(95, 117, 255, 1)', // #5F75FF
            avg: 'rgba(182, 133, 151, 1)', // #B68597
            max: 'rgba(219, 55, 55, 1)', // #DB3737
        },
        gradientPoints: {
            min: 'rgba(95, 117, 255, 1)', // #5F75FF
            avg: 'rgba(243, 233, 207, 1)', // #F3E9CF
            max: 'rgba(219, 55, 55, 1)', // #DB3737
        },
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
        primary: 'rgba(251, 251, 251, 1)', // #FBFBFB
        default: 'rgba(255, 255, 255, 1)', // #ffffff
        paper: 'rgba(232,232,232 ,0.8)', // #e8e8e8cc
    },
    info: {
        main: 'rgba(244, 244, 244, 1)', // #efefef
        light: 'rgba(255, 255, 255, 1)', // #ffffff
        dark: 'rgba(255, 255, 255, 1)', // #ffffff
    },
};

export const lightTheme: ThemeOptions = {
    palette: {
        ...referenceLightThemePalette,
        mode: CurrentTheme.Light,
        // REFERENCE COLORS
        // FLEET COLORS
        // primary: {
        //     main: '#FF4D14',
        //     light: '#ffffff',
        //     dark: '#101010',
        // },
        // info: {
        //     main: '#FF4D14',
        // },
        shadow: {
            primary: '0px 3px 40px 2px rgba(0, 0, 0, 0.14), 0px 8px 10px 1px rgba(0, 0, 0, 0.14)',
        },
        background: {
            ...referenceLightThemePalette.background,

            primary: referenceLightThemePalette.darkShades.fifth, //'#F4F4F4',
            secondary: referenceLightThemePalette.lightShades.primary, // #FFFFFF
            tertiary: referenceLightThemePalette.lightShades.primary, // #FFFFFF
            fifth: '#E5E5E5',
            fifthInput: referenceLightThemePalette.darkShades.primary, //'#F4F4F4',

            // new colors
            background1: referenceLightThemePalette.lightShades.primary, // #FFFFFF
            background2: referenceLightThemePalette.lightShades.primary, // #FFFFFF
            background3: referenceLightThemePalette.lightShades.primary, // #FFFFFF
            background4: referenceLightThemePalette.background?.primary, // #FBFBFB
            background5: referenceLightThemePalette.darkShades.fifth, //'#F4F4F4',
            background6: referenceLightThemePalette.darkShades.fifth, //'#F4F4F4',
            background7: referenceLightThemePalette.darkShades.fifth, //'#F4F4F4',
            background8: referenceLightThemePalette.darkShades.quaternary, // '#E4E4E4',
            background9: referenceLightThemePalette.darkShades.quaternary, // '#E4E4E4',
            background10: referenceLightThemePalette.darkShades.quaternary, // '#E4E4E4',
            background11: alpha(referenceLightThemePalette.lightShades.primary, 0.5), // '#FFFFFF80',
            background12: alpha(referenceLightThemePalette.darkShades.quaternary, 0.5), //'#A6A6A680',
            background13: alpha(referenceLightThemePalette.primaryColors.accent, 0.1), //'#FF4D140D',
            background14: referenceLightThemePalette.lightShades.primary, // #FFFFFF
            background15: referenceLightThemePalette.lightShades.primary, // #FFFFFF
            background16: referenceLightThemePalette.darkShades.fifth, //'#F4F4F4',
        },
        primaryColors: {
            ...referenceLightThemePalette.primaryColors,
        },
        accent: {
            accent: referenceLightThemePalette.primaryColors.accent, //'#FF4D14',
            accent10: referenceLightThemePalette.additionalColors.buttonSecondary, // #FF4D141A
            accentHover: referenceLightThemePalette.primaryColors.accentHover, // '#E7440F',
        },
        border: {
            primary: referenceLightThemePalette.borders.primary, //  #bababa1a
            secondary: referenceLightThemePalette.borders.secondary, //#bababa4d

            // new colors
            border1: alpha(referenceLightThemePalette.lightShades.primary, 0.08), // #00000014
            border2: alpha(referenceLightThemePalette.lightShades.primary, 0.08), // #0000001
            border3: alpha(referenceLightThemePalette.lightShades.primary, 0.1), // '#0000001A',/
            border4: alpha(referenceLightThemePalette.lightShades.primary, 0.2), // '#FFFFFF33',
            border5: referenceLightThemePalette.darkShades.quaternary, // '#E4E4E4',
            input: alpha(referenceLightThemePalette.darkShades.secondary, 0.14), //'#5C5C5C24',
            input2: alpha(referenceLightThemePalette.darkShades.secondary, 0.24), //'#5C5C5C3D',
            input3: alpha(referenceLightThemePalette.darkShades.secondary, 0.24), //'#5C5C5C3D',
            input4Error: referenceLightThemePalette.alerts.alert, //'#FF4949',
        },
        text: {
            primary: referenceLightThemePalette.widgets.text, //'#101010',
            secondary: '#353535',
            tertiary: '#808080',
            quaternary: '#A2A2A2',
            fifth: referenceLightThemePalette.widgets.text, //'#101010',

            // new colors
            text1: referenceLightThemePalette.grey?.[50], //'#000000',
            text2: referenceLightThemePalette.grey?.[50], //'#000000',
            text3: referenceLightThemePalette.grey?.[50], //'#000000',
            text4: referenceLightThemePalette.darkShades.secondary, // '#5C5C5C',
            text5: referenceLightThemePalette.darkShades.secondary, // '#5C5C5C',
            text6: referenceLightThemePalette.darkShades.secondary, // '#5C5C5C',
            text7: referenceLightThemePalette.darkShades.secondary, // '#5C5C5C',
            text8: referenceLightThemePalette.darkShades.ternary, // '#A6A6A6',
            search: referenceLightThemePalette.darkShades.ternary, // '#A6A6A6',
            titleInput: referenceDarkThemePalette.lightShades.quaternary, //'#656565',
            textInput40: alpha(referenceLightThemePalette.darkShades.secondary, 0.4), //'#5C5C5C66',
            textInput60: alpha(referenceLightThemePalette.darkShades.secondary, 0.6), //'#5C5C5C99',
            textInput80: alpha(referenceLightThemePalette.darkShades.secondary, 0.8), //'#5C5C5CCC',
            textInput802: alpha(referenceLightThemePalette.darkShades.secondary, 0.8), //'#5C5C5CCC',
        },
        // alerts: {
        //     ...referenceLightThemePalette.alerts,
        //     green: referenceLightThemePalette.alerts.success, // '#55E050',
        //     yellow: referenceLightThemePalette.alerts.warning, // '#FFF614',
        //     red: referenceLightThemePalette.alerts.alert, //'#FF4949',
        // },

        // new colors:
        darkening: {
            darkening: alpha(referenceLightThemePalette.darkShades.ternary, 0.2), //'#A6A6A633',
        },
        base: {
            color1: referenceLightThemePalette.lightShades.primary, // #FFFFFF
            color2: referenceLightThemePalette.lightShades.primary, // #FFFFFF
            color3: referenceLightThemePalette.darkShades.ternary, //'#A6A6A6',
            color4: referenceDarkThemePalette.darkShades.ternary, //'#232323',
            color5: referenceDarkThemePalette.darkShades.secondary, //'#171717',
            color6: referenceLightThemePalette.primaryColors.accent, //'#FF4D14',
            hover: referenceLightThemePalette.primaryColors.accentHover, //'#E7440F',
            color61: referenceLightThemePalette.additionalColors.buttonSecondary, // #FF4D141A
            color62: alpha(referenceDarkThemePalette.primaryColors.accent, 0.2), //'#FF4D1414',
            color63: referenceLightThemePalette.additionalColors.buttonSecondary, //'#FF4D1433',
            color7: referenceLightThemePalette.alerts.alert, //'#FF4949',
            color8: referenceLightThemePalette.grey?.[50] || '#000000', //'#000000',
            color21: referenceLightThemePalette.alerts.warning, //'#FFF614',
            color9: '#01BE11',
            color10: '#D9D9D9',
            color11: '#586DEC',
            color12: '#7AD9E9',
            color16: referenceDarkThemePalette.additionalColors.lightBlue, //'#85EDFF',
            color17: '#50E0DB',
            color22: '#AB6CFF',
            color19: referenceLightThemePalette.additionalColors.purple, //'#CCA6FF',
            color15: '#FFA6E3',
            color13: '#E85A2D',
            color14: '#FFB114',
            color18: '#FFE314',
            color20: '#CCFF5F',
            color23: referenceDarkThemePalette.additionalColors.blue, //'#5F75FF',
        },
    },
};
