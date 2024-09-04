import { Menu as MUIMenu, styled } from '@mui/material';

export const Menu = styled(MUIMenu)(({ theme }) => ({
    '.MuiList-root': {
        background: theme.palette.darkShades.primary,
        color: theme.palette.lightShades.primary,
    },
}));
