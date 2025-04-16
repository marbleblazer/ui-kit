import { Stack, styled } from '@mui/material';
import { Typography } from '@chirp/ui/lib';

export const LegendContainer = styled(Stack)(() => ({
    flexDirection: 'row',
    gap: '16px',
    maxWidth: '359px',
    flexWrap: 'wrap',
    rowGap: '8px',
    minHeight: '40px',
    alignItems: 'flex-start',
}));

export const LabelAndDotWrapper = styled(Stack)(() => ({
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    whiteSpace: 'nowrap',
}));

export const Dot = styled(Stack)(() => ({
    width: '4px',
    height: '4px',
    borderRadius: '50%',
}));

export const Label = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.textInput80,
}));
