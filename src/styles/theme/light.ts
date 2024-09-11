import { ThemeOptions } from '@mui/material';
import { CurrentTheme } from '@chirp/ui/styles/constants';

export const lightTheme: ThemeOptions = {
    palette: {
        mode: CurrentTheme.Light,
        primary: {
            main: '#FF4D14',
            light: '#ffffff',
            dark: '#101010',
            // contrastText: '#656565',
        },
        info: {
            main: '#FF4D14',
        },
        shadow: {
            primary: '0px 3px 40px 2px rgba(0, 0, 0, 0.14), 0px 8px 10px 1px rgba(0, 0, 0, 0.14)',
        },
        background: {
            default: '#F4F4F4',
            paper: '#E5E5E5',
            primary: '#F4F4F4',
            secondary: '#FFFFFF',
            tertiary: '#FFFFFF',
            fifth: '#E5E5E5',
            fifthInput: '#E5E5E5',
        },
        primaryColors: {
            primary: '#FFFFFF',
            secondary: '#EBEBEB',
            tertiary: '#BABABA',
            quaternary: '#F4F4F4',
            fifth: '#444444',
        },
        accent: {
            accent: '#FF4D14',
            accent10: '#FF4D141A',
            accent16: '#FF4D1429',
            accentHover: '#E7440F',
        },
        border: {
            primary: '#BABABA1A',
            secondary: '#BABABA4D',
            tertiaryInput: '#10101026',
        },
        text: {
            primary: '#101010',
            secondary: '#353535',
            tertiary: '#808080',
            quaternary: '#A2A2A2',
            fifth: '#101010',
        },
        alerts: {
            green: '#55E050',
            yellow: '#FFF614',
            red: '#FF4949',
        },
    },
};
