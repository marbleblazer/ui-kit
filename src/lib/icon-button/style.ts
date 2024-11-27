import { styled, IconButton } from '@mui/material';

import { IIconButtonProps } from './types';

export const ButtonWrapper = styled(IconButton)<IIconButtonProps>(({ theme, size, variant }) => ({
    cursor: 'pointer',
    fontFamily: theme.typography.body1.fontFamily,
    transition: 'all 0.125s',

    '.MuiButton-icon': {
        '& > svg': {
            width: '20px',
            height: '20px',
        },
    },

    ...(size === 'large' && {
        padding: '14px',
        maxHeight: '48px',
    }),

    ...(size === 'medium' && {
        padding: '8px',
        maxHeight: '36px',
    }),

    ...(size === 'small' && {
        padding: '4px',
        maxHeight: '28px',
    }),

    ...(variant === 'primary' && {
        background: theme.palette.base.color6,
        color: theme.palette.primary.light,
        border: `1px solid ${theme.palette.base.color6}`,

        '&:hover, &:active': {
            background: theme.palette.base.hover,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: theme.palette.border.secondary,
        },
    }),

    ...(variant === 'secondary' && {
        background: theme.palette.base.color61,
        color: theme.palette.base.color6,
        border: `1px solid transparent`,

        '&:hover, &:active': {
            background: theme.palette.base.color61,
            borderColor: theme.palette.base.color6,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: theme.palette.border.secondary,
        },

        ...(size === 'small' && {
            padding: '8px',
        }),
    }),

    ...(variant === 'tertiary' && {
        background: theme.palette.primaryColors.primary,
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.primaryColors.primary}`,

        '&:hover, &:active': {
            background: theme.palette.primaryColors.primary,
            color: theme.palette.base.color6,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: theme.palette.border.secondary,
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
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: theme.palette.border.secondary,
        },
    }),

    ...(variant === 'gray' && {
        background: 'transparent',
        color: theme.palette.text.quaternary,
        border: 'none',

        '&:hover, &:active': {
            background: 'transparent',
            color: theme.palette.base.hover,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: theme.palette.border.secondary,
        },
    }),

    [theme.breakpoints.down('md')]: {
        lineHeight: '16px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        lineHeight: '16px',
    },
}));
