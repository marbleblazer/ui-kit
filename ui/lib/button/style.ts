import { ButtonBase, styled } from '@mui/material';

import { ButtonProps } from './types';
import { CurrentTheme } from '@styles/constants';

export const Button = styled(ButtonBase, { shouldForwardProp: (prop) => prop !== 'fullWidth' })<
    Pick<ButtonProps, 'fullWidth' | 'size' | 'variant'>
>(({ fullWidth, theme, size, variant }) => ({
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    fontFamily: theme.typography.body1.fontFamily,
    transition: 'all 0.125s',
    width: fullWidth ? '100%' : '',

    ...(size === 'big' && {
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
        fontSize: '12x',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0.05px',
        padding: '4px 12px',
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

    ...(variant === 'sidebar' && {
        background: theme.palette.darkShades.secondary,
        color: theme.palette.lightShades.ternary,
        border: `1px solid transparent`,

        '&:hover, &:active': {
            background:
                theme.palette.mode === CurrentTheme.Dark
                    ? theme.palette.darkShades.ternary
                    : theme.palette.darkShades.secondary,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: theme.palette.borders.secondary,
        },
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

    ...(variant === 'icon' && {
        background: theme.palette.darkShades.primary,
        color:
            theme.palette.mode === CurrentTheme.Dark ? theme.palette.lightShades.ternary : theme.palette.text.primary,
        border: `1px solid ${theme.palette.darkShades.primary}`,

        ...(size === 'small' && {
            padding: '4px',
            maxWidth: fullWidth ? '100%' : '28px',
            width: fullWidth ? '100%' : 'auto',
        }),

        ...(size === 'medium' && {
            padding: '8px',
            maxWidth: fullWidth ? '100%' : '36px',
            width: fullWidth ? '100%' : 'auto',
        }),

        ...(size === 'big' && {
            padding: '14px',
            maxWidth: fullWidth ? '100%' : '48px',
            width: fullWidth ? '100%' : 'auto',
        }),

        '&:hover, &:active': {
            color: theme.palette.primaryColors.accent,
        },

        '&:focus-visible': {
            borderColor: theme.palette.borders.secondary,
        },
    }),

    ...(variant === 'text' && {
        padding: 0,
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

    ...(variant === 'grouped' && {
        background: theme.palette.primaryColors.accent,
        color: theme.palette.lightShades.primary,
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

    [theme.breakpoints.down('md')]: {
        lineHeight: '16px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        lineHeight: '16px',
    },
}));
