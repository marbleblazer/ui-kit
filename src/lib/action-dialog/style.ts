import { alpha, styled, Dialog as MuiDialog, Stack } from '@mui/material';

export const Dialog = styled(MuiDialog)(({ theme }) => ({
    backdropFilter: 'blur(4px)',

    '.MuiPaper-root': {
        width: '360px',
        minWidth: '360px',
        padding: '20px 20px 30px',
        borderRadius: '12px',
        background: theme.palette.background.background7,

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            minWidth: 'auto',
            margin: '8px',
            padding: '20px 20px 30px',
        },
    },
}));

export const Card = styled(Stack)(({ theme }) => ({
    alignItems: 'center',
    maxWidth: '360px',
    width: '100%',
    background: theme.palette.background.background7,
}));

export const IconWrapper = styled(Stack)(({ theme }) => ({
    justifyContent: 'center',
    alignItems: 'center',
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    backgroundImage: `linear-gradient(180deg, ${alpha(theme.palette.base.color6, 0.2)} 0%, ${alpha(
        theme.palette.base.color6,
        0,
    )} 100%)`,
    color: theme.palette.base.color6,
}));
