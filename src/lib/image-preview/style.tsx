import { Stack, styled } from '@mui/material';
import { Button } from '../button';

export const ImageWrapper = styled(Stack)(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.background.background9,
    alignItems: 'center',
    overflow: 'hidden',
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
    maxWidth: '32px',
    maxHeight: '32px',
    minWidth: 'auto',
    height: 'auto',
    padding: '5.5px',
    color: theme.palette.base.color6,
    backgroundColor: theme.palette.mode === 'dark' ? '#4F2B20' : '#F0D3CA',
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
    width: '150px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    svg: {
        color: theme.palette.text.text8,
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
