import { InputAdornment, StandardTextFieldProps, useTheme } from '@mui/material';
import * as S from './style';
import { SearchIcon } from '@chirp/ui/assets/fleet-icons';
import { Loader } from '../loader';
import { useTranslation } from 'react-i18next';

interface ISearchInputProps extends Omit<StandardTextFieldProps, 'onChange'> {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    isLoading?: boolean;
}

export const SearchInput: React.FC<ISearchInputProps> = ({
    value,
    onChange,
    placeholder,
    isLoading = false,
    ...props
}) => {
    const theme = useTheme();
    const { t } = useTranslation('uiKit', { keyPrefix: 'SearchInput' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { value } = e.target;
        onChange(value);
    };

    return (
        <S.SearchInputWrapper
            fullWidth
            placeholder={placeholder || t('Search location')}
            InputProps={{
                value: isLoading ? 'Loading' : value,
                readOnly: isLoading,
                onChange: handleInputChange,
                sx: {
                    borderRadius: '6px !important',
                    '& .MuiInputAdornment-root': {
                        svg: {
                            path: {
                                opacity: 0.3,
                            },
                        },
                    },
                    '& .MuiInputBase-input.Mui-disabled': {
                        padding: '4px 12px 4px 0',
                        height: '20px',
                    },
                    '.MuiInputBase-input': {
                        color: isLoading ? theme.palette.text.textInput60 : theme.palette.text.text1,
                        cursor: isLoading ? 'wait' : 'text',
                    },
                    '&:focus-within .MuiInputBase-input': {
                        color: isLoading ? theme.palette.text.textInput60 : theme.palette.text.text1,
                    },
                    '.MuiInputAdornment-root': {
                        marginRight: isLoading ? '4px' : '8px',
                    },
                },
                startAdornment: (
                    <InputAdornment position="start">{isLoading ? <Loader /> : <SearchIcon />}</InputAdornment>
                ),
            }}
            {...props}
        />
    );
};
