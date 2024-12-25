import { PaletteOptions } from '@mui/material/styles';

export type ReferencePaletteType = Omit<PaletteOptions, 'base' | 'darkening' | 'border' | 'accent' | 'shadow'>;
