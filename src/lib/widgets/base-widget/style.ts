import { Stack, styled } from '@mui/material';

export const Container = styled(Stack)(({ theme }) => ({
    gap: '20px',
    padding: '20px',
    width: '100%',
    height: '100%',
    borderRadius: '12px',
    backgroundColor: theme.palette.background.background7,
}));

export const Header = styled(Stack)(() => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: '20px',
}));

export const HeaderContent = styled(Stack)(() => ({
    alignItems: 'center',
    flexDirection: 'row',
}));
