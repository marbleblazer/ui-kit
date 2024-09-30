import { styled } from '@mui/material';
import { Select as MuiSelect } from '@mui/material';

export const Select = styled(MuiSelect)(({ placeholder, theme }) => ({
    backgroundColor: theme.palette.background.fifthInput,

    '&:hover:not(.Mui-disabled)': {
        backgroundColor: theme.palette.background.fifth,
    },

    '&.Mui-disabled': {
        opacity: '0.3 !important',
    },
    borderRadius: '8px',
    border: '1px solid',
    borderColor: theme.palette.border.tertiaryInput,
    fontFamily: theme.typography.fontFamily,
    marginTop: '20px',

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
        color: theme.palette.text.tertiary,
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
        color: theme.palette.text.secondary,

        '&.MuiInputLabel-shrink': {
            fontSize: '14px',
            lineHeight: '20px',
            top: '4px',
            left: '-12px',
        },
    },
}));
