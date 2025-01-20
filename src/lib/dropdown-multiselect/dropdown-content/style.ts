import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
    borderTop: '1px solid',
    borderColor: theme.palette.border.input,
}));
