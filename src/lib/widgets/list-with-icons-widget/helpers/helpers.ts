import { alpha } from '@mui/material/styles';
import { Theme } from '@mui/material';

export const getAlertStyles = (theme: Theme, isAlert?: boolean) => ({
    backgroundColor: isAlert ? alpha(theme.palette.base.color7, 0.2) : theme.palette.background.background2,
    svg: {
        path: {
            stroke: isAlert ? theme.palette.base.color7 : theme.palette.text.text4,
        },
    },
});

export const getHoverStyles = (theme: Theme, isAlert?: boolean) => ({
    backgroundColor: isAlert ? alpha(theme.palette.base.color7, 0.2) : theme.palette.background.background8,
});
