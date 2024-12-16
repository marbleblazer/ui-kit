import { alpha, styled } from '@mui/material';
import { TextField } from '../text-field';

interface ISearchInputWrapperProps {
    isLoading?: boolean;
}

export const SearchInputWrapper = styled(TextField)<ISearchInputWrapperProps>(({ theme, isLoading }) => ({
    backgroundColor: theme.palette.background.background2,
    marginTop: 0,

    svg: {
        color: theme.palette.text.search,
    },

    '.MuiInputBase-root': {
        borderRadius: '6px !important',
        borderColor: alpha(theme.palette.border.input, 0.14),
        paddingLeft: '12px',
        backgroundColor: theme.palette.background.background2,

        'input::placeholder': {
            color: theme.palette.text.textInput60,
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
        color: isLoading ? theme.palette.text.textInput60 : theme.palette.text.text1,
        cursor: isLoading ? 'wait' : 'text',
    },

    '&:focus-within .MuiInputBase-input': {
        color: isLoading ? theme.palette.text.textInput60 : theme.palette.text.text1,
    },

    '.MuiInputAdornment-root': {
        width: '24px',
        height: '24px',
        marginRight: isLoading ? '4px' : '8px',
    },
}));
