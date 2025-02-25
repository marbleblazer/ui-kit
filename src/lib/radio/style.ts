import { styled } from '@mui/material';
import { Radio as MuiRadio } from '@mui/material';

export const StyledRadio = styled(MuiRadio)(({ theme }) => ({
    color: theme.palette.text.text8,

    '&:hover': {
        color: theme.palette.base.color6,
    },

    '&.Mui-checked': {
        color: theme.palette.base.color6,
    },
})) as typeof MuiRadio;
