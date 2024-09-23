import { ThemeProviderProps } from '@emotion/react';
import { ThemeProvider as MUIThemeProvider, PaletteMode } from '@mui/material';
import { FC } from 'react';
import { getTheme } from '.';

interface IThemeProviderProps extends Omit<ThemeProviderProps, 'theme'> {
    mode: PaletteMode;
}

export const ThemeProvider: FC<IThemeProviderProps> = ({ mode, ...props }) => (
    <MUIThemeProvider theme={getTheme(mode)} {...props} />
);
