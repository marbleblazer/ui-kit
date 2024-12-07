import { styled, Button } from '@mui/material';

import { IButtonProps } from './types';

export const ButtonWrapper = styled(Button)<IButtonProps>(({ fullWidth, theme, size, variant }) => ({
    cursor: 'pointer',
    fontFamily: theme.typography.body1.fontFamily,
    transition: 'all 0.125s',
    width: fullWidth ? '100%' : '',

    '.MuiButton-icon': {
        '& > svg': {
            width: '20px',
            height: '20px',
        },
    },

    ...(size === 'large' && {
        fontSize: '13px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0.065px',
        padding: '14px 20px',
        maxHeight: '48px',
    }),

    ...(size === 'medium' && {
        fontSize: '13px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0.065px',
        padding: '8px 16px',
        maxHeight: '36px',
    }),

    ...(size === 'small' && {
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0.05px',
        padding: '4px 12px',
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
            color: theme.palette.primary.light,
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
            color: theme.palette.base.color6,
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
            color: theme.palette.text.primary,
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: theme.palette.border.secondary,
        },
    }),

    ...(variant === 'text' && {
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
