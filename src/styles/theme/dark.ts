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
            accent16: '#FF4D1429',
            accentHover: '#E7440F',
        },
        border: {
            primary: '#BABABA1A',
            secondary: '#BABABA4D',
            tertiaryInput: '#10101026',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#EBEBEB',
            tertiary: '#BABABA',
            quaternary: '#A2A2A2',
            fifth: '#656565',
        },
        alerts: {
            green: '#55E050',
            yellow: '#FFF614',
            red: '#FF4949',
        },
    },
};
