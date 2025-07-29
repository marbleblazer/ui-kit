import { styled } from '@mui/material';
import { Radio as MuiRadio } from '@mui/material';

export const StyledRadio = styled(MuiRadio)(({ theme }) => ({
    '.MuiTypography-root': {
        color: theme.palette.text.text1,
    },

    '.PrivateSwitchBase-input': {
        width: '24px',
        height: '24px',
    },

    svg: {
        width: '18px',
        height: '18px',
    },

    '&:hover': {
        color: theme.palette.base.color6,
    },

    '&.Mui-checked': {
        color: theme.palette.base.color6,
    },
})) as typeof MuiRadio;
