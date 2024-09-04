import { styled, TextField as MUITextField } from '@mui/material';

export const TextField = styled(MUITextField)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.darkShades.ternary : 'transparent',
    color: theme.palette.mode === 'dark' ? theme.palette.lightShades.ternary : theme.palette.lightShades.quaternary,
    borderColor: theme.palette.mode === 'dark' ? theme.palette.borders.secondary : theme.palette.borders.primary,
    borderRadius: '6px',

    svg: {
        color: theme.palette.mode === 'dark' ? theme.palette.lightShades.primary : theme.palette.lightShades.quaternary,
    },

    '.MuiInputBase-root': {
        paddingLeft: '12px',
    },

    '.MuiInputBase-input': {
        padding: '4px 12px 4px 0',
        height: '20px',
    },
}));
