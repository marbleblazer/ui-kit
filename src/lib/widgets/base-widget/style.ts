import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Stack)(({ theme }) => ({
    gap: '20px',
    padding: '20px',
    minWidth: '100%',
    minHeight: '100%',
    borderRadius: '12px',
    backgroundColor: theme.palette.background.background7,
}));

export const Header = styled(Stack)(() => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: '20px',
}));

export const HeaderContent = styled(Stack)(() => ({
    flexDirection: 'row',
}));
