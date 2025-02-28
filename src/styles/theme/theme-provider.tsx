import { ThemeProviderProps } from '@emotion/react';
import { ThemeProvider as MUIThemeProvider, PaletteMode, PaletteOptions } from '@mui/material';
import { FC } from 'react';
import { getTheme } from '.';

interface IThemeProviderProps extends Omit<ThemeProviderProps, 'theme'> {
    mode: PaletteMode;
    customPalette?: PaletteOptions;
}

export const ThemeProvider: FC<IThemeProviderProps> = ({ mode, customPalette, ...props }) => (
    <MUIThemeProvider theme={getTheme(mode, customPalette)} {...props} />
);
