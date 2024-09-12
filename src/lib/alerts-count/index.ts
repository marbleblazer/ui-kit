import { Box, styled } from '@mui/material';

export const AlertsCount = styled(Box)(({ theme }) => ({
    position: 'absolute',
    backgroundColor: theme.palette.accent.accent,
    borderRadius: '4px',
    padding: '1px 3px',
    fontSize: '10px',
    lineHeight: '12px',
    top: '5px',
    left: '11px',
}));
