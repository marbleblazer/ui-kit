import { Stack, styled } from '@mui/material';

export const Row = styled(Stack)(() => ({
    gap: '35px',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
}));

export const IconDescriptionContainer = styled(Stack)(() => ({
    flexDirection: 'row',
    gap: '16px',
}));

export const IconContainer = styled(Stack)(({ theme }) => ({
    width: '48px',
    height: '48px',
    backgroundColor: theme.palette.background.background2,
    borderRadius: '4px',
    alignItems: 'center',
    justifyContent: 'center',
}));
