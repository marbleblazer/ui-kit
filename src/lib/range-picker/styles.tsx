import { styled } from '@mui/material';

export const DatePickerWrapper = styled('div')(({ theme }) => ({
    '.react-datepicker': {
        backgroundColor: 'transparent',
        border: 'none',

        '.react-datepicker__header': {
            paddingTop: 0,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'transparent',
            gap: '12px',
            border: 'none',

            '.react-datepicker__current-month': {
                ...theme.typography.paragraphSecondary,
                fontFamily: theme.typography.fontFamily,
                color: theme.palette.text.primary,
            },
            'button.react-datepicker__navigation': {},
        },

        '.react-datepicker__day-names': {
            display: 'flex',
            margin: 0,

            justifyContent: 'space-around',
            '.react-datepicker__day-name': {
                ...theme.typography.caption,
                color: theme.palette.text.fifth,
            },
        },

        '.react-datepicker__month': {
            margin: '0',
        },
        '.react-datepicker__day': {
            width: '36px',
            height: '28px',
            margin: '2px 1px',
            borderRadius: '3px',
            backgroundColor: theme.palette.background.secondary,
            color: theme.palette.text.primary,
            border: '1px solid',
            borderColor: theme.palette.background.secondary,

            '&:hover:not(&--disabled)': {
                borderColor: theme.palette.primary.main,
            },
            '&:first-of-type': {
                marginLeft: '0',
            },
            '&--in-range': {
                backgroundColor: theme.palette.accent.accent10,
                borderColor: theme.palette.accent.accent10,
            },
            '&--outside-month': {
                visibility: 'hidden',
            },
            '&--disabled': {
                opacity: '.3',
            },
        },

        '.react-datepicker__day--selected': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        },
    },
}));
