import { Stack, styled } from '@mui/material';

export const Wrapper = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.background.secondary,
    borderRadius: '12px',
    padding: '14px 12px',
    height: '124px',
    width: '205px',
    justifyContent: 'space-between',
}));
