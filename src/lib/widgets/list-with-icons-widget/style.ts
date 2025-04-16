import { Box, Divider, Stack, styled } from '@mui/material';

export const Row = styled(Stack)(() => ({
    cursor: 'pointer',
    gap: '35px',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: '8px',
    padding: '8px 8px 8px 12px',
    position: 'relative',
}));

export const IconDescriptionContainer = styled(Stack)(() => ({
    alignItems: 'center',
    flexDirection: 'row',
    gap: '16px',
}));

export const IconContainer = styled(Stack)(() => ({
    width: '48px',
    height: '48px',
    borderRadius: '4px',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const Image = styled('img')(() => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
}));

export const Circle = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '5px',
    left: '9px',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: `2px solid ${theme.palette.background.background7}`,
}));

export const CustomDivider = styled(Divider)(({ theme }) => ({
    borderColor: theme.palette.border.border3,
}));
