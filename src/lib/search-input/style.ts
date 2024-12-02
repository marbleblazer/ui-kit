import { styled } from '@mui/material';
import { TextField } from '../text-field';

export const SearchInputWrapper = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.background.background2,
    borderColor: theme.palette.border.input,
    borderRadius: '6px',

    marginTop: 0,

    svg: {
        color: theme.palette.text.search,
    },

    '.MuiInputBase-root': {
        paddingLeft: '12px',
        backgroundColor: theme.palette.background.background2,

        'input::placeholder': {
            color: theme.palette.text.tertiary,
            opacity: 1,
        },
        '&:hover': {
            backgroundColor: `${theme.palette.background.background2} !important`,
        },
    },

    '.MuiInputBase-input': {
        padding: '4px 12px 4px 0',
        FontSize: '13px',
        height: '20px',
    },
}));
