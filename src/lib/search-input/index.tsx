import { InputAdornment } from '@mui/material';
import * as S from './style';
import { LoaderCircleIcon, SearchIcon } from '@chirp/ui/assets/fleet-icons';

interface ISearchInputProps {
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
            InputProps={{
                value,
                onChange: handleInputChange,
                startAdornment: (
                    <InputAdornment position="start">
                        {isLoading ? <LoaderCircleIcon /> : <SearchIcon />}
                    </InputAdornment>
                ),
            }}
        />
    );
};
