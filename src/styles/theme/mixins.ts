import { CSSObject, ThemeOptions } from '@mui/material';

declare module '@mui/material/styles/createMixins' {
  // Allow for custom mixins to be added
  interface Mixins {
    linearBackground?: CSSObject;
  }
}

export const themeMixins: ThemeOptions = {
  mixins: {
    linearBackground: {
      background: `repeating-linear-gradient(
        106deg,
        #32353833,
        #32353833 2px,
        transparent 2px,
        transparent 6px
      )`,
    },
  },
};
