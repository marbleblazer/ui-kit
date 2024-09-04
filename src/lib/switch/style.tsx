import { styled, Switch as MUISwitch } from '@mui/material';

export const Switch = styled(MUISwitch)(({ theme }) => ({
    padding: 0,
    height: '28px',
    color: theme.palette.mode === 'dark' ? theme.palette.lightShades.secondary : theme.palette.lightShades.secondary,
    // TODO: include mixin
    fontSize: 13,
    letterSpacing: '0.4px',
    fontFamily: '"Alliance No.2", Arial, sans-serif',
    lineHeight: '16px',
    fontWeight: 400,
    '& .MuiSwitch-track': {
        borderRadius: '3px',
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.darkShades.primary : theme.palette.darkShades.secondary,
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
        color: theme.palette.mode === 'dark' ? theme.palette.lightShades.secondary : theme.palette.borders.secondary,

        '&.Mui-checked': {
            transform: 'translateX(-100%)',
            left: '100%',
            transition: 'left 0.2s',
            color:
                theme.palette.mode === 'dark' ? theme.palette.lightShades.secondary : theme.palette.borders.secondary,

            '& + .MuiSwitch-track': {
                backgroundColor:
                    theme.palette.mode === 'dark'
                        ? theme.palette.darkShades.primary
                        : theme.palette.darkShades.secondary,
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
        width: '24px',
        height: '22px',
        padding: 0,
        borderRadius: '3px',
    },
    '.MuiSwitch-switchBase': {
        padding: '3px 2px',
    },
}));
