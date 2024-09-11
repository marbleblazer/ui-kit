import { Box, Stack, styled } from '@mui/material';
import { Button } from '../button';

export const ImageWrapper = styled(Box)(({ theme }) => ({
    borderRadius: '8px',
    width: '160px',
    height: '160px',
    borderColor: theme.palette.primaryColors.secondary,
    position: 'relative',
    backgroundColor: theme.palette.background.fifthInput,
}));

export const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

export const DeleteBtn = styled(Button)(({ theme }) => ({
    position: 'absolute',
    bottom: '4px',
    right: '4px',
    width: '32px',
    border: 'none',
    maxHeight: '32px',
    height: 'auto',
    padding: '5.5px',
    color: theme.palette.accent.accent,
    '&:hover': {
        backgroundColor: 'transparent',
    },
    svg: {
        height: '20px',
        width: '20px',
    },
}));

export const EmptyFallbackWrapper = styled(Stack)(({ theme }) => ({
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.tertiary,
    svg: {
        transform: 'rotate(45deg)',
        width: '31px',
        height: '31px',
    },
}));

export const UploadInput = styled('input')({
    position: 'absolute',
    opacity: 0,
    zIndex: 1,
    width: '100%',
    cursor: 'pointer',
    height: '100%',
});
