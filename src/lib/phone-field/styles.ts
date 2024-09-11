import { styled } from '@mui/material';
import MuiPhoneNumber, { MuiPhoneNumberProps } from 'material-ui-phone-number';

type PhoneFieldPropsType = MuiPhoneNumberProps & {
    dialCode?: string;
};

export const PhoneField = styled(MuiPhoneNumber)<PhoneFieldPropsType>(({ theme, dialCode }) => ({
    fontFamily: theme?.typography.fontFamily,
    marginTop: '16px',
    border: 'none',

    '.MuiInputBase-root.Mui-focused': {
        borderColor: theme.palette.border.secondary,
    },

    '.MuiInputBase-root': {
        border: '1px solid',
        borderRadius: '8px',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.darkShades.fifth : theme.palette.darkShades.ternary,

        '&:hover:not(.Mui-disabled)': {
            backgroundColor:
                theme.palette.mode === 'dark' ? theme.palette.darkShades.fifth : theme.palette.darkShades.ternary,
        },
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.info.main : theme.palette.info.light,
        '&.Mui-disabled': {
            opacity: '0.3 !important',
        },
    },

    '& svg': { height: '20px' },

    '& .MuiInputBase-root': {
        height: 'auto',

        '&.MuiInput-root': {
            marginTop: '0',

            '.MuiPhoneNumber-positionStart': {
                left: '8px',
            },

            '&:before, &:after': {
                display: 'none',
                borderBottom: 'none',
            },
        },
    },

    '.MuiInputAdornment-positionEnd': {
        order: 1,
        width: '8px',
        height: '20px',
        paddingRight: '8px',
        transform: 'translate(-12px)',
        svg: {
            width: '20px',
            height: '20px',
        },
    },
    '.MuiInputAdornment-positionStart': {
        order: 0,
        button: {
            '&::before': {
                content: dialCode ? `"+${dialCode}"` : '""',
                fontSize: '13px',
                lineHeight: '20px',
                fontFamily: theme?.typography.fontFamily,
                color: theme.palette.text.primary,
            },

            svg: {
                display: 'none',
            },
        },
    },

    '.MuiFormLabel-root': {
        '&.Mui-focused': {},
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
        boxShadow: `0 0 0 100px ${theme.palette.darkShades.quaternary} inset!important`,
        transitionDelay: '9999s',
        transitionProperty: 'background-color, color',
    },
    '.MuiPhoneNumber-flagButton': {
        height: 'auto',
        width: 'auto',
    },
    '& .MuiButtonBase-root': {
        zIndex: 1,
        padding: '12px 8px 10px 8px',
    },
    input: {
        order: 2,
        padding: '12px 16px 10px 0px',
        fontSize: '13px',
        lineHeight: '20px',
        fontFamily: theme?.typography.fontFamily,
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
        left: '-12px',
        backgroundColor: 'transparent',
        color: theme.palette.lightShades.ternary,

        '&.MuiInputLabel-shrink': {
            fontSize: '14px',
            lineHeight: '20px',
            top: '-8px',
            left: '-12px',
        },
    },
}));
