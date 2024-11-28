import { styled, TextField } from '@mui/material';

export const PhoneField = styled(TextField)(({ theme }) => ({
    fontFamily: theme?.typography.fontFamily,
    marginTop: '20px !important',
    border: 'none',

    '.MuiInputBase-root.Mui-focused': {
        borderColor: theme.palette.border.tertiaryInput,
    },

    '.MuiInputBase-root': {
        border: '1px solid',
        borderRadius: '8px',
        borderColor: theme.palette.border.tertiaryInput,

        '&:hover:not(.Mui-disabled)': {
            backgroundColor: theme.palette.background.fifth,
        },
        backgroundColor: theme.palette.background.fifthInput,
        '&.Mui-disabled': {
            opacity: '0.3 !important',
        },
    },

    '& svg': { height: '20px' },

    '& .MuiInputBase-root': {
        height: '40px',
        paddingLeft: '0px',
    },

    '.MuiInputAdornment-root': {
        width: 'auto',
        height: 'auto',
    },

    '.MuiInputAdornment-positionStart': {
        order: 0,
        width: '51px',

        '.MuiInputBase-root': {
            width: '51px',
            border: 'none',
            height: '15px',
            backgroundColor: 'transparent',
            paddingLeft: '5px',
            margin: '0',
        },
    },

    '&.MuiFormControl-root .MuiFormLabel-root': {
        transform: 'none',
        left: 0,
        top: '-16px',
        ...theme.typography.overline,
    },

    '.MuiFormControl-root.MuiTextField-root': {
        borderRadius: '8px',
    },

    '.MuiSelect-select': {
        paddingTop: '12px',
        paddingLeft: '16px',
        paddingBottom: '10px',
        fontFamily: theme?.typography.fontFamily,
        borderRadius: '0px',
        padding: '0px !important',

        '&.MuiInputBase-input': {
            paddingTop: '12px',
            paddingLeft: '16px',
            paddingBottom: '10px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
        },
    },

    '.MuiSelect-icon': {
        right: '0px !important',
        top: '-3px',
    },

    'input:-webkit-autofill': {
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
        border: 'none',
        borderRadius: '8px',
        boxShadow: `0 0 0 100px ${theme.palette.background.fifthInput} inset!important`,
        transitionDelay: '9999s',
        transitionProperty: 'background-color, color',
    },

    '.MuiPhoneNumber-flagButton': {
        height: 'auto',
        width: 'auto',
    },

    '& .MuiButtonBase-root': {
        zIndex: 1,
        minWidth: '53px !important',
        padding: '12px 8px 10px 8px',
    },

    input: {
        order: 2,
        padding: '0px',
        fontSize: '13px',
        lineHeight: '20px',
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.text.primary,
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
    label: {
        padding: 0,
        left: '0',
        backgroundColor: 'transparent',
        color: theme.palette.text.quaternary,

        '&.MuiInputLabel-shrink': {
            fontSize: '14px',
            lineHeight: '20px',
            top: '-16px',
            left: '0',
        },
    },

    'label,.MuiInputLabel-root.Mui-focused': {
        padding: 0,
        color: theme.palette.text.quaternary,
    },

    '&.drop': {
        color: 'red !important',
    },
}));
