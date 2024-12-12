import { styled, Switch as MUISwitch } from '@mui/material';

export const Switch = styled(MUISwitch)(({ theme }) => ({
    padding: 0,
    height: '30px',
    color: theme.palette.text.text1,
    ...theme.typography.text13,

    '& .MuiSwitch-track': {
        border: `1px solid ${theme.palette.border.border5}`,
        borderRadius: '6px',
        opacity: 1,
        backgroundColor: theme.palette.background.background1,

        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
        },
        '&::before': {
            left: '13px',
        },
        '&::after': {
            right: '13px',
        },
    },

    '.MuiButtonBase-root.MuiSwitch-switchBase': {
        '.MuiSwitch-input': {
            left: 0,
        },
        color: theme.palette.background.background5,

        '&.Mui-checked': {
            transform: 'translateX(-100%)',
            left: '100%',
            transition: 'left 0.2s',
            color: theme.palette.background.background5,

            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.background.background1,
                opacity: 1,
            },
            '.MuiSwitch-input': {
                left: 'auto',
                right: 0,
            },
        },
    },

    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: '24.3px',
        height: '22px',
        padding: 0,
        borderRadius: '4px',
    },

    '.MuiSwitch-switchBase': {
        padding: '4px 4px',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
}));
