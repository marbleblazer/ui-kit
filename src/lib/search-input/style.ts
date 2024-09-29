import { styled } from '@mui/material';
import { TextField } from '../text-field';

export const SearchInputWrapper = styled(TextField)(({ theme }) => ({
    backgroundColor: 'transparent',
    borderColor: theme.palette.border.primary,
    borderRadius: '6px',

    marginTop: 0,

    svg: {
        color: theme.palette.text.tertiary,
    },

    '.MuiInputBase-root': {
        paddingLeft: '12px',
        backgroundColor: 'transparent',
        'input::placeholder': {
            color: theme.palette.text.tertiary,
            opacity: 1,
        },
    },

    '.MuiInputBase-input': {
        padding: '4px 12px 4px 0',
        FontSize: '13px',
        height: '20px',
    },
}));
