import { CurrentTheme } from '@chirp/ui/styles/constants';
import { alpha, ThemeOptions } from '@mui/material/styles';
import { ReferencePaletteType } from './types';
import { referenceDarkThemePalette, referenceLightThemePalette } from './reference-palettes';

export const lightTheme = (
    refLightTheme: ReferencePaletteType = referenceLightThemePalette,
    refDarkTheme: ReferencePaletteType = referenceDarkThemePalette,
): ThemeOptions => {
    return {
        palette: {
            ...refLightTheme,
            mode: CurrentTheme.Light,
            shadow: {
                primary: '0px 3px 40px 2px rgba(0, 0, 0, 0.14), 0px 8px 10px 1px rgba(0, 0, 0, 0.14)',
            },
            background: {
                ...refLightTheme.background,
                background1: refLightTheme.lightShades.primary, // #FFFFFF
                background2: refLightTheme.lightShades.primary, // #FFFFFF
                background3: refLightTheme.lightShades.primary, // #FFFFFF
                background4: refLightTheme.background?.primary, // #FBFBFB
                background5: refLightTheme.darkShades.fifth, //'#F4F4F4',
                background6: refLightTheme.darkShades.fifth, //'#F4F4F4',
                background7: refLightTheme.darkShades.fifth, //'#F4F4F4',
                background8: refLightTheme.darkShades.quaternary, // '#E4E4E4',
                background9: refLightTheme.darkShades.quaternary, // '#E4E4E4',
                background10: refLightTheme.darkShades.quaternary, // '#E4E4E4',
                background11: alpha(refLightTheme.lightShades.primary, 0.5), // '#FFFFFF80',
                background12: alpha(refLightTheme.darkShades.quaternary, 0.5), //'#A6A6A680',
                background13: alpha(refLightTheme.primaryColors.accent, 0.1), //'#FF4D140D',
                background14: refLightTheme.lightShades.primary, // #FFFFFF
                background15: refLightTheme.lightShades.primary, // #FFFFFF
                background16: refDarkTheme.darkShades.fifth, //'#F4F4F4',
            },
            primaryColors: {
                ...refLightTheme.primaryColors,
            },
            border: {
                border1: alpha(refLightTheme.darkShades.primary, 0.08), // #00000014
                border2: alpha(refLightTheme.darkShades.primary, 0.08), // #0000001
                border3: alpha(refLightTheme.darkShades.primary, 0.1), // '#0000001A',/
                border4: alpha(refLightTheme.lightShades.primary, 0.2), // '#FFFFFF33',
                border5: refLightTheme.darkShades.quaternary, // '#E4E4E4',
                input: alpha(refLightTheme.darkShades.secondary, 0.14), //'#5C5C5C24',
                input2: alpha(refLightTheme.darkShades.secondary, 0.24), //'#5C5C5C3D',
                input3: alpha(refLightTheme.darkShades.secondary, 0.24), //'#5C5C5C3D',
                input4Error: refLightTheme.alerts.alert, //'#FF4949',
            },
            text: {
                ...refLightTheme.text,
                text1: refLightTheme.grey?.[50], //'#000000',
                text2: refLightTheme.grey?.[50], //'#000000',
                text3: refLightTheme.grey?.[50], //'#000000',
                text4: refLightTheme.darkShades.secondary, // '#5C5C5C',
                text5: refLightTheme.darkShades.secondary, // '#5C5C5C',
                text6: refLightTheme.darkShades.secondary, // '#5C5C5C',
                text7: refLightTheme.darkShades.secondary, // '#5C5C5C',
                text8: refLightTheme.darkShades.ternary, // '#A6A6A6',
                search: refLightTheme.darkShades.ternary, // '#A6A6A6',
                titleInput: '#656565', //'#656565',
                textInput40: alpha(refLightTheme.darkShades.secondary, 0.4), //'#5C5C5C66',
                textInput60: alpha(refLightTheme.darkShades.secondary, 0.6), //'#5C5C5C99',
                textInput80: alpha(refLightTheme.darkShades.secondary, 0.8), //'#5C5C5CCC',
                textInput802: alpha(refLightTheme.darkShades.secondary, 0.8), //'#5C5C5CCC',
            },
            // new colors:
            darkening: {
                darkening: alpha(refLightTheme.darkShades.ternary, 0.2), //'#A6A6A633',
            },
            base: {
                color1: refLightTheme.lightShades.primary, // #FFFFFF
                color2: refLightTheme.lightShades.primary, // #FFFFFF
                color3: refLightTheme.darkShades.ternary, //'#A6A6A6',
                color4: refDarkTheme.darkShades.ternary, //'#232323',
                color5: refDarkTheme.darkShades.secondary, //'#171717',
                color6: refLightTheme.primaryColors.accent, //'#FF4D14',
                hover: refLightTheme.primaryColors.accentHover, //'#E7440F',
                color61: refLightTheme.additionalColors.buttonSecondary, // #FF4D141A
                color62: alpha(refDarkTheme.primaryColors.accent, 0.2), //'#FF4D1414',
                color63: refLightTheme.additionalColors.buttonSecondary, //'#FF4D1433',
                color7: refLightTheme.alerts.alert, //'#FF4949',
                color8: refLightTheme.grey?.[50] || '#000000', //'#000000',
                color21: refLightTheme.alerts.warning, //'#FFF614',
                color9: '#01BE11',
                color10: '#D9D9D9',
                color11: '#586DEC',
                color12: '#7AD9E9',
                color16: refDarkTheme.additionalColors.lightBlue, //'#85EDFF',
                color17: '#50E0DB',
                color22: '#AB6CFF',
                color19: refLightTheme.additionalColors.purple, //'#CCA6FF',
                color15: '#FFA6E3',
                color13: '#E85A2D',
                color14: '#FFB114',
                color18: '#FFE314',
                color20: '#CCFF5F',
                color23: refDarkTheme.additionalColors.blue, //'#5F75FF',
            },
        },
    };
};
