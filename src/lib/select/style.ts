import { styled } from '@mui/material';
import { Select as MuiSelect } from '@mui/material';
import { CurrentTheme } from '@chirp/ui/styles/constants';

export const Select = styled(MuiSelect)(({ placeholder, theme }) => ({
    backgroundColor: theme.palette.mode === CurrentTheme.Dark ? theme.palette.info.main : theme.palette.info.light,
    '&:hover:not(.Mui-disabled)': {
        backgroundColor:
            theme.palette.mode === CurrentTheme.Dark
                ? theme.palette.darkShades.fifth
                : theme.palette.darkShades.ternary,
    },
    '&.Mui-disabled': {
        opacity: '0.3 !important',
    },
    borderRadius: '8px',
    border: 'none',
    fontFamily: theme.typography.fontFamily,
    marginTop: '16px',

    '.MuiSelect-select': {
        paddingTop: '12px',
        paddingLeft: '16px',
        paddingBottom: '8px',
        fontFamily: theme.typography.fontFamily,

        '&.MuiInputBase-input': {
            paddingTop: '12px',
            paddingLeft: '16px',
            paddingBottom: '8px',
            fontSize: '13px',
            lineHeight: '20px',
        },
    },

    '& .MuiSelect-select .notranslate::after': placeholder
        ? {
              content: `"${placeholder}"`,
              opacity: 0.7,
              fontSize: '13px',
              lineHeight: '20px',
          }
        : {},

    '.MuiSelect-icon': {
        right: '16px',
    },

    '.MuiInputBase-adornedEnd': {
        paddingRight: '20px',
    },

    input: {
        padding: '12px 16px 8px 16px',
        fontSize: '13px',
        lineHeight: '20px',
        fontFamily: theme.typography.fontFamily,
    },
    fieldset: {
        border: 'none',
        top: 0,
    },
    legend: {
        fontFamily: theme.typography.fontFamily,
        backgroundColor: 'transparent',
        span: {
            padding: 0,
        },
    },

    label: {
        padding: 0,
        left: '-12px',
        backgroundColor: 'transparent',
        color: theme.palette.lightShades.ternary,

        '&.MuiInputLabel-shrink': {
            fontSize: '14px',
            lineHeight: '20px',
            top: '4px',
            left: '-12px',
        },
    },
}));
