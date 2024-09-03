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
        background: theme.palette.primaryColors.accent,
        color: theme.palette.secondary.main,
        border: `1px solid ${theme.palette.primaryColors.accent}`,

        '&:hover, &:active': {
            background: theme.palette.primaryColors.accentHover,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: theme.palette.borders.secondary,
        },
    }),

    ...(variant === 'secondary' && {
        background: theme.palette.additionalColors.buttonSecondary,
        color: theme.palette.primaryColors.accent,
        border: `1px solid transparent`,

        '&:hover, &:active': {
            background: theme.palette.additionalColors.buttonSecondaryHv,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: theme.palette.borders.secondary,
        },

        ...(size === 'small' && {
            padding: '8px',
        }),
    }),

    ...(variant === 'tertiary' && {
        background: theme.palette.darkShades.primary,
        color: theme.palette.lightShades.primary,
        border: `1px solid ${theme.palette.darkShades.primary}`,

        '&:hover, &:active': {
            color: theme.palette.primaryColors.accent,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: theme.palette.borders.secondary,
        },
    }),

    ...(variant === 'outlined' && {
        background: 'transparent',
        color: theme.palette.primaryColors.accent,
        border: `1px solid ${theme.palette.primaryColors.accent}`,

        '&:hover, &:active': {
            color: theme.palette.primaryColors.accentHover,
            borderColor: theme.palette.primaryColors.accentHover,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: theme.palette.borders.secondary,
        },
    }),

    [theme.breakpoints.down('md')]: {
        lineHeight: '16px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        lineHeight: '16px',
    },
}));
