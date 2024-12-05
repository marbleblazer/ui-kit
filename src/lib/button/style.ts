import { styled, Button } from '@mui/material';

import { IButtonProps } from './types';

export const ButtonWrapper = styled(Button)<IButtonProps>(({ fullWidth, theme, size, variant }) => ({
    cursor: 'pointer',
    transition: 'all 0.125s',
    width: fullWidth ? '100%' : '',
    ...theme.typography.btnPrimary,

    '.MuiButton-icon': {
        '& > svg': {
            width: '20px',
            height: '20px',
        },
    },

    ...(size === 'large' && {
        padding: '14px 30px',
        maxHeight: '48px',
    }),

    ...(size === 'medium' && {
        padding: '8px 26px',
        maxHeight: '36px',
    }),

    ...(size === 'small' && {
        ...theme.typography.btnSecondary,
        padding: '4px 20px',
        maxHeight: '28px',
    }),

    ...(variant === 'primary' && {
        background: theme.palette.base.color6,
        color: theme.palette.base.color1,

        '&:hover, &:active': {
            background: theme.palette.base.color6,
        },

        '&:disabled': {
            color: theme.palette.base.color1,
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: theme.palette.base.color6,
        },
    }),

    ...(variant === 'secondary' && {
        background: theme.palette.base.color61,
        color: theme.palette.base.color6,
        border: `1px solid transparent`,

        '&:hover, &:checked': {
            background: theme.palette.base.color63,
            borderColor: theme.palette.base.color6,
        },

        '&:active': {
            background: theme.palette.base.color63,
            border: 'none',
        },

        '&:disabled': {
            color: theme.palette.base.color6,
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: 'transparent',
        },

        ...(size === 'small' && {
            padding: '8px',
        }),
    }),

    ...(variant === 'tertiary' && {
        background: theme.palette.background.background10,
        color: theme.palette.text.text2,

        '&:hover, &:active, &:checked': {
            background: theme.palette.background.background10,
            color: theme.palette.base.color6,
        },

        '&:disabled': {
            color: theme.palette.text.text2,
            opacity: '0.3',
        },

        '&:focus-visible': {
            background: theme.palette.background.background10,
        },
    }),

    ...(variant === 'text' && {
        color: theme.palette.base.color6,

        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    }),

    ...(variant === 'outlined' && {
        background: 'transparent',
        color: theme.palette.base.color6,
        border: `1px solid ${theme.palette.base.color6}`,

        '&:hover, &:active': {
            background: 'transparent',
            color: theme.palette.base.hover,
            borderColor: theme.palette.base.hover,
        },

        '&:disabled': {
            color: theme.palette.base.color6,
            border: `1px solid ${theme.palette.base.color6}`,
            opacity: '0.3',
        },

        '&:focus-visible': {
            background: 'transparent',
        },
    }),

    [theme.breakpoints.down('md')]: {
        lineHeight: '16px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        lineHeight: '16px',
    },
}));
