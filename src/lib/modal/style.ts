import { alpha, styled } from '@mui/material';
import { Box, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
    background: `${alpha(theme.palette.background.fifth as string, 0.5)}`,
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
    background: theme.palette.background.default,
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

export const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: '16px',
    textAlign: 'center',
}));

export const Description = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: '12px',
    textAlign: 'center',
}));
