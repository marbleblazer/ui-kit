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
                onChange: handleInputChange,
                startAdornment: (
                    <InputAdornment position="start">{isLoading ? <Loader /> : <SearchIcon />}</InputAdornment>
                ),
            }}
            {...props}
        />
    );
};
