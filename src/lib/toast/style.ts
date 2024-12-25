import { alpha, styled } from '@mui/material';
import { Stack } from '@mui/material';

export const Root = styled(Stack)(({ theme }) => ({
    background: theme.palette.background.background1,
    border: `1px solid ${alpha(theme.palette.border.input, 0.14)}`,
    padding: '10px 16px',
    borderRadius: '8px',
    width: '400px',
    minHeight: '50px',
    position: 'relative',
}));
