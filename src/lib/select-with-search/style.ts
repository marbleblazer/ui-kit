import { alpha, ListSubheader as MUIListSubheader, SelectProps, Stack, styled } from '@mui/material';
import { Select as MuiSelect } from '@mui/material';

export const Select = styled(MuiSelect)<SelectProps>(({ placeholder, theme }) => ({
    backgroundColor: theme.palette.background.background2,
    borderRadius: '8px',
    border: '1px solid',
    borderColor: alpha(theme.palette.border.input, 0.14),
    ...theme.typography.body1,
    marginTop: '20px',

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
        paddingTop: '12px',
        paddingLeft: '16px',
        paddingBottom: '8px',
        ...theme.typography.body1,

        '&.MuiInputBase-input': {
            paddingTop: '10px',
            paddingLeft: '16px',
            paddingRight: '36px !important',
            paddingBottom: '10px',
            fontSize: '13px',
            lineHeight: '20px',
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

        '&:not(:empty)': {
            color: theme.palette.text.text1,
        },
    },

    '.MuiInputBase-adornedEnd': {
        paddingRight: '20px',
    },

    input: {
        padding: '12px 16px 8px 16px',
        fontSize: '13px',
        lineHeight: '20px',
        ...theme.typography.body1,
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

export const ListSubheader = styled(MUIListSubheader)(({ theme }) => ({
    padding: '16px',
    backgroundColor: theme.palette.background.background2,

    '.MuiFormControl-root': {
        marginTop: 0,
    },
}));

export const MenuItemWrapper = styled(Stack)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    span: {
        color: theme.palette.base.color6,
    },
}));
