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
                ...theme.typography.caption12,
                color: theme.palette.text.text3,
            },
            'button.react-datepicker__navigation': {},
        },

        '.react-datepicker__day-names': {
            display: 'flex',
            margin: 0,

            justifyContent: 'space-around',
            '.react-datepicker__day-name': {
                ...theme.typography.caption12,
                color: theme.palette.text.text8,
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
            backgroundColor: theme.palette.background.background1,
            color: theme.palette.text.text7,
            border: '1px solid',
            borderColor: theme.palette.background.background1,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...theme.typography.caption12,

            '&:hover:not(&--disabled)': {
                borderColor: theme.palette.base.color6,
            },
            '&:first-of-type': {
                marginLeft: '0',
            },
            '&--in-range': {
                backgroundColor: theme.palette.base.color61,
                borderColor: 'transparent',
            },
            '&--outside-month': {
                visibility: 'hidden',
            },
            '&--disabled': {
                opacity: '.3',
            },
        },

        '.react-datepicker__day--selected': {
            backgroundColor: theme.palette.base.color6,
            color: theme.palette.base.color1,
        },
    },
}));
