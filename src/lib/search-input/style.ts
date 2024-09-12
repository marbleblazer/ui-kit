import { styled, TextField as MUITextField } from '@mui/material';

export const TextField = styled(MUITextField)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.secondary : 'transparent',
    // color: theme.palette.border.secondary,
    borderColor: theme.palette.border.secondary,
    borderRadius: '6px',

    svg: {
        color: theme.palette.background.primary,
    },

    '.MuiInputBase-root': {
        paddingLeft: '12px',
    },

    '.MuiInputBase-input': {
        padding: '4px 12px 4px 0',
        FontSize: '13px',
        height: '20px',
    },
}));
