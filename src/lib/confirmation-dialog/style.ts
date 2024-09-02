import { alpha, Dialog as MuiDialog, dialogClasses, Stack, styled, IconButton } from '@mui/material';

export const Dialog = styled(MuiDialog)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        maxWidth: '360px',
        margin: 'auto',
    },

    [`& .${dialogClasses.paper}`]: {
        alignItems: 'center',
        width: '100%',
        minWidth: '360px',
        maxWidth: '450px',
        overflow: 'hidden',
        margin: '0px',
        padding: '0px 20px 20px',
        borderRadius: '12px',
        backgroundColor: theme.palette.darkShades.ternary,
    },
}));

export const CloseIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '12px',
    right: '12px',
    color: theme.palette.lightShades.ternary,

    '&:hover': {
        backgroundColor: 'transparent',
    },
}));

export const IconWrapper = styled(Stack)(({ theme }) => ({
    justifyContent: 'center',
    alignItems: 'center',
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    marginTop: '20px',
    color: theme.palette.primaryColors.accent,
    backgroundImage: `linear-gradient(180deg,
    ${alpha(theme.palette.primaryColors.accent, 0.2)} 0%,
    ${alpha(theme.palette.primaryColors.accent, 0)} 100%)`,
}));

export const Content = styled(Stack)(() => ({
    gap: '8px',
    padding: '32px',
    whiteSpace: 'break-spaces',
    textAlign: 'center',
}));

export const ButtonGroup = styled(Stack)(() => ({
    flexDirection: 'row',
    gap: '8px',
    width: '100%',
    paddingBottom: '10px',

    button: {
        padding: '12px 16px',
        lineHeight: 1,
    },
}));