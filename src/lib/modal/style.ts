import { alpha, styled } from '@mui/material';
import { Box } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
    background: `${alpha(theme.palette.background.background4 as string, 0.5)}`,
    backdropFilter: 'blur(5px)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
}));

export const Modal = styled(Box)(({ theme }) => ({
    background: theme.palette.background.background7,
    borderRadius: '12px',
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    [theme.breakpoints.up('md')]: {
        minWidth: '460px',
    },
}));
