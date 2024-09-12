import { styled } from '@mui/material';
import { TextField as MuiTextField } from '@mui/material';
import { StandardTextFieldProps } from '@mui/material/TextField/TextField';

export const TextField = styled(MuiTextField)<StandardTextFieldProps>(({ theme, placeholder }) => ({
    borderRadius: '8px',
    fontFamily: theme?.typography.fontFamily,
    marginTop: '16px',

    '.MuiInputBase-root:focus': {
        borderColor: theme.palette.border.tertiaryInput,
    },

    '.MuiInputBase-root': {
        '&:hover:not(.Mui-disabled)': {
            backgroundColor: theme.palette.background.fifth,
        },
        backgroundColor: theme.palette.background.fifthInput,
        '&.Mui-disabled': {
            opacity: '0.3 !important',
        },
    },

    '& .MuiInputBase-root': {
        height: 'auto',
    },

    '.MuiFormControl-root.MuiTextField-root': {
        borderRadius: '8px',
    },

    '.MuiSelect-select': {
        paddingTop: '12px',
        paddingLeft: '16px',
        paddingBottom: '10px',
        fontFamily: theme?.typography.fontFamily,

        '&.MuiInputBase-input': {
            paddingTop: '12px',
            paddingLeft: '16px',
            paddingBottom: '10px',
        },
    },

    '& .MuiSelect-select .notranslate::after': placeholder
        ? {
              content: `"${placeholder}"`,
              color: theme.palette.text.primary,
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
    '.MuiAutocomplete-clearIndicator': {
        marginTop: '8px',
    },

    'input:-webkit-autofill': {
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
        border: 'none',
        borderRadius: '8px',
        boxShadow: `0 0 0 100px ${theme.palette.background.primary} inset!important`,
        transitionDelay: '9999s',
        transitionProperty: 'background-color, color',
    },

    input: {
        padding: '12px 16px 10px 16px',
        fontSize: '13px',
        lineHeight: '20px',
        fontFamily: theme?.typography.fontFamily,
        color: theme.palette.text.primary,
        borderRadius: '8px',
        border: '1px solid',
        borderColor: theme.palette.border.tertiaryInput,
    },

    '.MuiInputBase-root.Mui-error': {
        input: {
            borderColor: theme.palette.alerts.red,
        },
    },

    fieldset: {
        border: 'none',
        top: 0,
    },
    legend: {
        fontFamily: theme?.typography.fontFamily,
        backgroundColor: 'transparent',
        span: {
            padding: 0,
        },
    },
    'label,.MuiInputLabel-root.Mui-focused': {
        padding: 0,
        left: '-12px',
        backgroundColor: 'transparent',
        color: theme.palette.text.secondary,
        '&:focus': {
            color: theme.palette.text.secondary,
        },
        '&.MuiInputLabel-shrink': {
            fontSize: '14px',
            lineHeight: '20px',
            top: '-8px',
            left: '-12px',
        },
    },
}));
