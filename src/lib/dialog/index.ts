import {
    Dialog as MuiDialog,
    dialogClasses,
    DialogTitle as MuiDialogTitle,
    dialogTitleClasses,
    DialogContentText as MuiDialogContentText,
    dialogContentTextClasses,
    dialogContentClasses,
    DialogActions as MuiDialogActions,
    dialogActionsClasses,
    IconButton as MuiIconButton,
    styled,
} from '@mui/material';

export const Dialog = styled(MuiDialog)(({ theme }) => ({
    [`& .${dialogClasses.paper}`]: {
        background: theme.palette.background.background2,
        borderRadius: '12px',
        boxShadow: 'none',
        padding: '20px',
        minWidth: 'unset',

        [`${theme.breakpoints.down('md')}`]: {
            width: '100%',
            margin: '0 12px',
            maxWidth: 'unset',
            maxHeight: 'unset',
            alignItems: 'center',
        },
    },
}));

export const DialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
    [`&.${dialogTitleClasses.root}`]: {
        fontSize: '16px',
        lineHeight: '20px',
        color: theme.palette.text.text1,
        marginBottom: '8px',
    },
}));

export const DialogContent = styled(MuiDialogTitle)(() => ({
    [`&.${dialogContentClasses.root}`]: {
        margin: 0,
    },
}));

export const DialogContentText = styled(MuiDialogContentText)(({ theme }) => ({
    [`&.${dialogContentTextClasses.root}`]: {
        fontSize: '13px',
        lineHeight: '20px',
        color: theme.palette.text.text8,
        margin: 0,
        textTransform: 'none',
        letterSpacing: '0.5%',
        fontFamily: theme.typography.body1.fontFamily,
    },
}));

export const DialogActions = styled(MuiDialogActions)(() => ({
    [`&.${dialogActionsClasses.root}`]: {
        display: 'flex',
        marginTop: '24px',
        flexDirection: 'column',
        gap: 0,

        'button:not(:first-of-type)': {
            marginTop: '8px',
            marginLeft: 0,
        },
    },
}));

export const CloseButton = styled(MuiIconButton)(() => ({
    marginTop: '-12px',
    marginRight: '-12px',
}));
