import { Avatar, styled } from '@mui/material';

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    color: theme.palette.text.text8,
    backgroundColor: theme.palette.text.titleInput,
}));
