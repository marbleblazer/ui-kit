import { styled, IconButton, Stack } from '@mui/material';

import { IIconButtonLoaderProps, IIconButtonProps } from './types';

export const ButtonWrapper = styled(IconButton)<IIconButtonProps>(({ theme, size, variant }) => ({
    cursor: 'pointer',
    transition: 'all 0.125s',
    gap: '4px',
    overflow: 'hidden',

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
        color: theme.palette.base.color1,

        '&:hover, &:active': {
            background: theme.palette.base.hover,
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
            borderColor: theme.palette.base.hover,
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

    ...(variant === 'gray' && {
        background: 'transparent',
        color: theme.palette.text.text4,
        border: 'none',

        '&:hover, &:active': {
            background: 'transparent',
            color: theme.palette.base.color6,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: 'transparent',
        },
    }),

    [theme.breakpoints.down('md')]: {
        lineHeight: '16px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        lineHeight: '16px',
    },
}));

export const LoaderWrapper = styled(Stack)(() => ({
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
}));

export const Backdrop = styled(Stack)<IIconButtonLoaderProps>(({ theme, variant }) => ({
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',

    ...((variant === 'primary' || variant === 'outlined' || variant === 'secondary' || variant === 'gray') && {
        background: theme.palette.base.color6,
    }),

    ...(variant === 'tertiary' && {
        background: theme.palette.background.background10,
    }),
}));
