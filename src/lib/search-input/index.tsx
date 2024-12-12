import { InputAdornment, StandardTextFieldProps } from '@mui/material';
import * as S from './style';
import { SearchIcon } from '@chirp/ui/assets/fleet-icons';
import { Loader } from '../loader';

interface ISearchInputProps extends Omit<StandardTextFieldProps, 'onChange'> {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    isLoading?: boolean;
}

export const SearchInput: React.FC<ISearchInputProps> = ({
    value,
    onChange,
    placeholder = 'Search location',
    isLoading = false,
    ...props
}) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { value } = e.target;
        onChange(value);
    };

    return (
        <S.SearchInputWrapper
            fullWidth
            placeholder={placeholder}
            isLoading={isLoading}
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
                },

                startAdornment: (
                    <InputAdornment position="start">{isLoading ? <Loader /> : <SearchIcon />}</InputAdornment>
                ),
            }}
            {...props}
        />
    );
};
