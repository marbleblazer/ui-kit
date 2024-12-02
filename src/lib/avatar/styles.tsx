import { Avatar, styled } from '@mui/material';

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    color: theme.palette.text.text8,
    backgroundColor: theme.palette.background.background5,
    border: '1px solid',
    borderColor: theme.palette.border.border4,
}));
