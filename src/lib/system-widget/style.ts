import { Box, styled } from '@mui/material';

export const Card = styled(Box)(({ theme }) => ({
    height: 'auto',
    minHeight: '84px',
    background: theme.palette.background.background7,
    padding: '20px',
    borderRadius: '12px',
}));
