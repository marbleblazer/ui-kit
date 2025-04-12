import { Stack, styled } from '@mui/material';
import { Typography } from '../../typogrpahy';

export const Row = styled(Stack)(() => ({
    gap: '35px',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
}));

export const IconDescriptionContainer = styled(Stack)(() => ({
    alignItems: 'center',
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

export const DescriptionHeader = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.text3,
}));

export const DescriptionSubheader = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.text8,
}));
