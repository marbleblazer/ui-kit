import { styled } from '@mui/material';
import { Typography } from '../../typogrpahy';

export const Text = styled(Typography)(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 4,
}));
