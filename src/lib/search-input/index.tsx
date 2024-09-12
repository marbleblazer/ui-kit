import { SearchIcon } from '@chirp/ui/assets/icons';
import { InputAdornment } from '@mui/material';
import * as S from './style';

interface ISearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

export const SearchInput: React.FC<ISearchInputProps> = ({ value, onChange }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { value } = e.target;
        onChange(value);
    };

    return (
        // TODO: change source to ui-kit
        <S.TextField
            fullWidth
            placeholder="Search location"
            InputProps={{
                value,
                onChange: handleInputChange,
                startAdornment: (
                    <InputAdornment position="start">
                        {/* TODO: change to new Icon */}
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
};
