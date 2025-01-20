import { alpha, styled } from '@mui/material';
import { TextField } from '../text-field';

export const PhoneField = styled(TextField, {
    shouldForwardProp: (prop) => prop !== 'isDisabled',
})<{ isDisabled?: boolean }>(({ theme, isDisabled }) => ({
    marginTop: '20px !important',

    '.MuiInputBase-root': {
        borderRadius: '8px',
        color: alpha(theme.palette.text.textInput60, 0.6),
        height: '40px',
        paddingLeft: '0px',
        backgroundColor: isDisabled ? theme.palette.background.background8 : theme.palette.background.background2,
    },

    '& svg': { height: '20px' },

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
            height: '40px',
            backgroundColor: 'transparent',
            margin: '0',
            '.MuiSelect-select': {
                justifyContent: 'space-around',
                paddingRight: '15px !important',
            },
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
    },

    '&:focus-within .MuiInputAdornment-positionStart .MuiInputBase-root': {
        color: theme.palette.text.text2 + ' !important',
    },

    '.MuiFormControl-root.MuiTextField-root': {
        borderRadius: '8px',
    },

    '.MuiSelect-select': {
        padding: '0px !important',

        '&:hover': {
            backgroundColor: 'transparent',
        },

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
        top: '10px',
        color: alpha(theme.palette.text.textInput60, 0.6) + '!important',
    },

    '&:hover .MuiSelect-icon': {
        color: alpha(theme.palette.text.textInput60, 0.8) + '!important',
    },

    '&:focus-within .MuiInputAdornment-positionStart .MuiSelect-icon': {
        color: theme.palette.text.text2 + '!important',
    },

    '&:focus-within .MuiSelect-icon': {
        color: theme.palette.text.text2 + '!important',
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
        paddingLeft: '8px',
        order: 2,
        color: alpha(theme.palette.text.textInput60, 0.6),
    },

    fieldset: {
        border: 'none',
        top: 0,
    },

    legend: {
        backgroundColor: 'transparent',
        span: {
            padding: 0,
        },
    },

    label: {
        padding: 0,
        left: '0',
        backgroundColor: 'transparent',

        '&.MuiInputLabel-shrink': {
            top: '-16px',
            left: '0',
        },
    },

    'label,.MuiInputLabel-root.Mui-focused': {
        padding: 0,
    },

    ...(isDisabled && {
        pointerEvents: 'none',
    }),
}));
