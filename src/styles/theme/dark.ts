import { CurrentTheme } from '@chirp/ui/styles/constants';
import { alpha, ThemeOptions } from '@mui/material/styles';
import { ReferencePaletteType } from './types';
import { referenceDarkThemePalette, referenceLightThemePalette } from './reference-palettes';

export const darkTheme = (
    refLightTheme: ReferencePaletteType = referenceLightThemePalette,
    refDarkTheme: ReferencePaletteType = referenceDarkThemePalette,
): ThemeOptions => {
    return {
        palette: {
            ...refDarkTheme,
            mode: CurrentTheme.Dark,
            shadow: {
                primary: '0px 3px 40px 2px rgba(0, 0, 0, 0.14), 0px 8px 10px 1px rgba(0, 0, 0, 0.14)',
            },

            background: {
                ...refDarkTheme.background,
                background1: refDarkTheme.darkShades.primary, // '#101010',
                background2: refDarkTheme.darkShades.quaternary, // '#353535',
                background3: refDarkTheme.darkShades.fifth, // '#444444',
                background4: refDarkTheme.darkShades.primary, // '#101010',
                background5: refDarkTheme.darkShades.secondary, //'#171717',
                background6: refDarkTheme.darkShades.fifth, // '#444444',
                background7: refDarkTheme.darkShades.ternary, // '#232323',
                background8: refDarkTheme.darkShades.quaternary, // '#353535',
                background9: refDarkTheme.darkShades.secondary, //'#171717',
                background10: refDarkTheme.darkShades.primary, // '#101010',
                background11: refDarkTheme.darkShades.fifth, // '#444444',
                background12: refDarkTheme.darkShades.fifth, // '#444444',
                background13: refDarkTheme.darkShades.secondary, //'#171717',
                background14: alpha(refDarkTheme.darkShades.primary, 0.5), //'#00000080',
                background15: alpha(refDarkTheme.darkShades.secondary, 0.8), //'#171717CC',
                background16: alpha(refDarkTheme.darkShades.secondary, 0.8), //'#171717CC',
            },

            border: {
                border1: refDarkTheme.borders.secondary, //'#BABABA4D',
                border2: alpha(refDarkTheme.darkShades.ternary, 0.1), // '#2323241A',
                border3: refDarkTheme.borders.primary, //'#BABABA1A',
                border4: alpha(refLightTheme.darkShades.primary, 0.2), //'#00000033',
                border5: refDarkTheme.borders.secondary, //'#BABABA4D',
                input: alpha(refLightTheme.darkShades.secondary, 0.14), //'#5C5C5C24',
                input2: alpha(refDarkTheme.darkShades.secondary, 0.24), //'#5C5C5C3D',
                input3: refDarkTheme.borders.secondary, //'#BABABA4D',
                input4Error: refDarkTheme.alerts.alert, //'#FF4949',
            },

            text: {
                ...refDarkTheme.text,
                text1: refDarkTheme.lightShades.secondary, // '#EBEBEB',
                text2: refDarkTheme.lightShades.primary, //'#FFFFFF',
                text3: refDarkTheme.lightShades.ternary, // '#BABABA',
                text4: refDarkTheme.lightShades.ternary, // '#BABABA',
                text5: refDarkTheme.text?.secondary, // '#656565',
                text6: refDarkTheme.lightShades.primary, //'#FFFFFF',
                text7: refDarkTheme.lightShades.secondary, // '#EBEBEB',
                text8: refDarkTheme.lightShades?.quaternary, // '#656565',
                text9: refDarkTheme.lightShades.quaternary, // '#656565',
                search: refDarkTheme.lightShades.ternary, // '#BABABA',
                titleInput: '#656565', // '#656565',
                textInput40: refDarkTheme.lightShades.ternary, // '#BABABA',
                textInput60: refDarkTheme.lightShades.ternary, // '#BABABA',
                textInput80: refDarkTheme.lightShades.secondary, // '#EBEBEB',
                textInput802: refDarkTheme.lightShades.ternary, // '#BABABA',
            },
            darkening: {
                darkening: refDarkTheme.darkShades.primary, // '#101010',
            },
            base: {
                color1: refDarkTheme.lightShades.primary, //'#FFFFFF',
                color2: refDarkTheme.darkShades.primary, // '#101010',
                color3: refDarkTheme.darkShades.quaternary, // '#353535',
                color4: alpha(refDarkTheme.lightShades.primary, 0.7), // '#B7B7B7',
                color5: refDarkTheme.lightShades.primary, //'#FFFFFF',
                color6: refDarkTheme.primaryColors.accent, // '#678AFB',
                hover: refDarkTheme.primaryColors.accentHover, // '#3262FF',
                color61: alpha(refDarkTheme.primaryColors.accent, 0.1), //'#678AFB1A',
                color62: alpha(refDarkTheme.primaryColors.accent, 0.1), //'#678AFB1A',
                color63: alpha(refDarkTheme.primaryColors.accent, 0.2), // '#678AFB33',
                color7: refDarkTheme.alerts.alert, //'#FF4949',
                color7_20: alpha(refLightTheme.alerts.alert, 0.2), //'#FF494933',
                color8: refDarkTheme.lightShades.primary, //'#FFFFFF',
                color21: refDarkTheme.alerts.warning, // #FFF614
                color9: '#01BE11',
                color10: '#D9D9D9',
                color11: '#7AD9E9',
                color12: '#586DEC',
                color16: refDarkTheme.additionalColors.lightBlue, //'#85EDFF',
                color16_20: alpha(refDarkTheme.additionalColors.lightBlue, 0.2), //'#84EDFF33',
                color17: '#50E0DB',
                color22: '#AB6CFF',
                color19: refDarkTheme.additionalColors.purple, //'#CCA6FF',
                color19_20: alpha(refLightTheme.additionalColors.purple, 0.2), //'#CCA6FF33',
                color15: refDarkTheme.additionalColors.pink, //'#FFA6E3',
                color13: '#E85A2D',
                color14: '#FFB114',
                color18: '#FFE314',
                color20: '#CCFF5F',
                color23: refDarkTheme.additionalColors.blue, //'#5F75FF',
                colorNewGreen: refDarkTheme.alerts.success, // '#55E050'
                colorNewGreen_20: alpha(refDarkTheme.alerts.success, 0.2), // '#55E05033'
                colorNewYellow: refDarkTheme.additionalColors.yellow, // '#FFD262'
                colorNewYellow_20: alpha(refDarkTheme.additionalColors.yellow, 0.2), // '#FFD26233'
                colorNewGrey: refDarkTheme.lightShades.ternary, //'#BABABA',
                colorNewGrey_20: alpha(refDarkTheme.lightShades.ternary, 0.2), //'#BABABA33',
                colorNewRed: '#F74C14',
                colorNewYellow01: '#F9FB82',
                colorNewYellow02: '#FDD061',
                colorNewYellow03: '#CFBA46',
            },
        },
    };
};
