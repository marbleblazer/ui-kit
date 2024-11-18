import { styled } from '@mui/material';
import { IClickableColorCellProps } from './types';

export const Cell = styled('div')<IClickableColorCellProps>(({ size = 'small', color: backgroundColor, theme }) => ({
    backgroundColor,
    border: '1px solid',
    borderColor: theme.palette.border.secondary,
    cursor: 'pointer',

    ...(size === 'large' && {
        width: '40px',
        minWidth: '40px',
        height: '40px',
        borderRadius: '8px',
    }),

    ...(size === 'medium' && {
        width: '30px',
        height: '30px',
        minWidth: '30px',
        borderRadius: '8px',
    }),

    ...(size === 'small' && {
        width: '23px',
        height: '23px',
        minWidth: '23px',
        borderRadius: '2px',
    }),
}));
