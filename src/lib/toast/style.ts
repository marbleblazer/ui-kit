import { alpha, Stack, styled } from '@mui/material';
import { ToastProps } from 'react-toastify/dist/types';

export const Root = styled(Stack)<Partial<ToastProps>>(({ theme }) => ({
    background: theme.palette.background.background1,
    border: `1px solid ${alpha(theme.palette.border.input, 0.14)}`,
    padding: '10px 16px',
    borderRadius: '8px',
    width: '400px',
    minHeight: '62px',
    position: 'relative',
    paddingRight: '40px',
}));
