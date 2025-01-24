import { alpha, styled } from '@mui/material';
import { Select as MuiSelect } from '@mui/material';
import { BadgeSelectPropsType } from '.';

export const BadgeSelect = styled(MuiSelect)<BadgeSelectPropsType>(({ placeholder, theme }) => ({
    backgroundColor: theme.palette.background.background7,
    borderRadius: '6px',
    border: '1px solid',
    borderColor: alpha(theme.palette.border.input, 0.14),

    '&:hover:not(.Mui-disabled)': {
        backgroundColor: alpha(theme.palette.background.background11, 0.5),
        borderColor: alpha(theme.palette.border.input2, 0.24),
        '.MuiSelect-icon': {
            color: alpha(theme.palette.text.textInput80, 0.8),
        },
    },

    '&.Mui-disabled': {
        opacity: '0.3 !important',
        '& + label': {
            opacity: '0.3 !important',
        },
    },

    '.MuiSelect-select': {
        '&.MuiInputBase-input': {
            padding: '4px 12px',
            ...theme.typography.caption12,
        },
    },

    '& .MuiSelect-select .notranslate::after': placeholder
        ? {
              content: `"${placeholder}"`,
              color: alpha(theme.palette.text.textInput60, 0.6),
          }
        : {},

    '&:hover::before': placeholder
        ? {
              color: alpha(theme.palette.text.textInput80, 0.8),
          }
        : {},

    '.MuiSelect-icon': {
        color: alpha(theme.palette.text.textInput60, 0.6),
        right: '12px',
        width: '16px',
        '&:not(:empty)': {
            color: theme.palette.text.text4,
        },
    },

    '.MuiInputBase-adornedEnd': {
        paddingRight: '20px',
    },

    fieldset: {
        border: 'none',
        top: 0,
    },
    legend: {
        ...theme.typography.body1,
        backgroundColor: 'transparent',
        span: {
            padding: 0,
        },
    },
}));
