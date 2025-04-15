import { Box, Stack, styled } from '@mui/material';

export const ListItem = styled(Stack)(() => ({
    cursor: 'pointer',
    flexDirection: 'row',
    borderBottom: `1px solid`,
    justifyContent: 'space-between',
    paddingBottom: '12px',
}));

export const Circle = styled(Box)(() => ({
    width: '6px',
    height: '6px',
    borderRadius: '50%',
}));

export const QuantityBox = styled(Box)(() => ({
    minWidth: '27px',
    height: '22px',
    borderRadius: '100px',
    padding: '2px 10px',
}));
