import { Stack, Box } from '@mui/material';
import { alpha, styled } from '@mui/material';

export const CardContainer = styled(Stack)(({ theme }) => ({
    width: '300px',
    height: '150px',
    gap: '16px',
    backgroundColor: theme.palette.background.background7,
    borderRadius: '12px',
    padding: '20px',
    overflow: 'hidden',
}));

export const CardHeader = styled(Box)(({ theme }) => ({
    ...theme.typography.title16,
    color: theme.palette.text.text1,
    minHeight: '28px',
    borderBottom: `1px solid ${alpha(theme.palette.border.border3, 0.1)}`,
}));

export const CardContent = styled(Box)(({ theme }) => ({
    ...theme.typography.caption12,
    minHeight: '20px',
    height: '100%',
    overflow: 'auto',
}));
