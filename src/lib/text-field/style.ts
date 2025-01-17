import { alpha, styled } from '@mui/material';
import { TextField as MuiTextField } from '@mui/material';
import { StandardTextFieldProps } from '@mui/material/TextField/TextField';

export const TextField = styled(MuiTextField)<StandardTextFieldProps>(({ theme }) => ({
    borderRadius: '8px',
    marginTop: '20px',
    ...theme.typography.body1,

    '.MuiInputBase-root': {
        backgroundColor: theme.palette.background.background2,
        borderRadius: '8px',
        '&:hover:not(.Mui-disabled)': {
            backgroundColor: alpha(theme.palette.background.background11, 0.5),
            borderColor: alpha(theme.palette.border.input2, 0.24),
        },
        '&.Mui-disabled': {
            color: alpha(theme.palette.text.textInput40, 0.4),
            backgroundColor: theme.palette.background.background8,
        },
    },

    '& .MuiInputBase-root': {
        border: `1px solid ${alpha(theme.palette.border.input, 0.14)}`,
    },

    '&.MuiFormControl-root .MuiFormLabel-root': {
        transform: 'none',
        left: 0,
        top: '-24px',
        color: theme.palette.text.titleInput,
        ...theme.typography.caption12,
    },

    '.MuiFormControl-root.MuiTextField-root': {
        borderRadius: '8px',
    },

    '.MuiSelect-select': {
        paddingTop: '12px',
        paddingLeft: '16px',
        paddingBottom: '10px',
        ...theme.typography.body1,

        '&.MuiInputBase-input': {
            paddingTop: '12px',
            paddingLeft: '16px',
            paddingBottom: '10px',
        },
    },

    '.MuiInputAdornment-root.MuiInputAdornment-positionStart': {
        marginRight: '4px',
    },

    'input::placeholder': {
        opacity: 0.6,
        color: theme.palette.text.textInput60,
        ...theme.typography.body1,
    },

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
        boxShadow: `0 0 0 100px ${theme.palette.background.background2} inset!important`,
        transitionDelay: '9999s',
        transitionProperty: 'background-color, color',
    },

    input: {
        padding: '10px 16px 10px 16px',
        color: theme.palette.text.text1,
        borderRadius: '8px',
        ...theme.typography.body1,
    },

    '.MuiInputBase-root.Mui-error': {
        backgroundColor: theme.palette.background.background3,
        borderColor: theme.palette.base.color7,
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
        height: '16px',
        color: theme.palette.text.titleInput,
    },

    '& .MuiInputBase-root:focus-within': {
        backgroundColor: alpha(theme.palette.background.background11, 0.5),
        borderColor: alpha(theme.palette.border.input2, 0.24),
    },

    '& input:focus': {
        caretColor: theme.palette.base.color6,
        color: theme.palette.text.text2,
    },

    '& textarea': {
        ...theme.typography.body1,
        color: theme.palette.text.text1,
    },

    '& textarea:focus': {
        caretColor: theme.palette.base.color6,
        color: theme.palette.text.text2,
    },

    '& textarea:hover': {
        border: 'none',
    },
}));
