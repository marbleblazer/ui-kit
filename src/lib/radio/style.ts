import { styled } from '@mui/system';
import { Radio as MuiRadio, RadioProps } from '@mui/material';

export const StyledRadio = styled(MuiRadio)<RadioProps>(({ theme }) => ({
    color: theme.palette.text.text8,

    '&:hover': {
        color: theme.palette.base.color6,
    },

    '&.Mui-checked': {
        color: theme.palette.base.color6,
    },
}));
