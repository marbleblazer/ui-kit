import { CurrentTheme } from '@chirp/ui/styles/constants';
import { ThemeOptions } from '@mui/material/styles';

export const darkTheme: ThemeOptions = {
    palette: {
        mode: CurrentTheme.Dark,
        primary: {
            main: '#FF4D14',
            light: '#ffffff',
            dark: '#101010',
        },
        shadow: {
            primary: '0px 3px 40px 2px rgba(0, 0, 0, 0.14), 0px 8px 10px 1px rgba(0, 0, 0, 0.14)',
        },
        info: {
            main: '#FF4D14',
        },
        background: {
            default: '#101010',
            paper: '#353535',
            primary: '#101010',
            secondary: '#232323',
            tertiary: '#171717',
            fifth: '#444444',
            fifthInput: '#353535',

            // new colors
            background1: '#101010',
            background2: '#353535',
            background3: '#444444',
            background4: '#101010',
            background5: '#171717',
            background6: '#444444',
            background7: '#232323',
            background8: '#353535',
            background9: '#171717',
            background10: '#101010',
            background11: '#444444',
            background12: '#444444',
            background13: '#171717',
            background14: '#00000080',
            background15: '#171717CC',
            background16: '#171717CC',
        },
        primaryColors: {
            primary: '#101010',
            secondary: '#171717',
            tertiary: '#232323',
            quaternary: '#353535',
            fifth: '#444444',
        },
        accent: {
            accent: '#FF4D14',
            accent10: '#FF4D141A',
            accentHover: '#E7440F',
        },
        border: {
            primary: '#BABABA1A',
            secondary: '#BABABA4D',
            tertiaryInput: '#10101026',

            // new colors
            border1: '#BABABA4D',
            border2: '#2323241A',
            border3: '#BABABA1A',
            border4: '#00000033',
            border5: '#BABABA',
            input: '#5C5C5C24',
            input2: '#5C5C5C3D',
            input3: '#BABABA',
            input4Error: '#FF4949',
        },
        text: {
            primary: '#EBEBEB',
            secondary: '#EBEBEB',
            tertiary: '#BABABA',
            quaternary: '#A2A2A2',
            fifth: '#656565',

            // new colors
            text1: '#EBEBEB',
            text2: '#FFFFFF',
            text3: '#BABABA',
            text4: '#BABABA',
            text5: '#656565',
            text6: '#FFFFFF',
            text7: '#EBEBEB',
            text8: '#656565',
            search: '#BABABA',
            titleInput: '#656565',
            textInput40: '#BABABA',
            textInput60: '#BABABA',
            textInput80: '#EBEBEB',
            textInput802: '#BABABA',
        },
        alerts: {
            green: '#55E050',
            yellow: '#FFF614',
            red: '#FF4949',
        },

        // new colors:
        darkening: {
            darkening: '#101010',
        },
        base: {
            color1: '#FFFFFF',
            color2: '#101010',
            color3: '#353535',
            color4: '#B7B7B7',
            color5: '#FFFFFF',
            color6: '#FF4D14',
            hover: '#E7440F',
            color61: '#FF4D141A',
            color62: '#FF4D140D',
            color63: '#FF4D1433',
            color7: '#FF4949',
            color8: '#FFFFFF',
            color21: '#FFA824',
            color9: '#01BE11',
            color10: '#D9D9D9',
            color11: '#586DEC',
            color12: '#7AD9E9',
            color16: '#85EDFF',
            color17: '#50E0DB',
            color22: '#AB6CFF',
            color19: '#CCA6FF',
            color15: '#FFA6E3',
            color13: '#E85A2D',
            color14: '#FFB114',
            color18: '#FFE314',
            color20: '#CCFF5F',
        },
    },
};
