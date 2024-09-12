import { createTheme, PaletteMode, Theme } from '@mui/material';

import { createComponents } from './components';
import { darkTheme } from './dark';
import { lightTheme } from './light';
import { themeMixins } from './mixins';
import { themeTemplate } from './template';

export const getTheme = (mode: PaletteMode = 'light'): Theme => {
  const { palette } = mode === 'light' ? lightTheme : darkTheme;
  const options = {
    ...themeTemplate,
    ...themeMixins,
    palette,
    components: createComponents(palette),
  };

  return createTheme(options);
};
