import { StandardTextFieldProps } from '@mui/material';
import React from 'react';
import { TextField } from '../text-field';

interface IDateInputProps extends Omit<StandardTextFieldProps, 'onChange'> {
    onChange: (date: string) => void;
}

export const DateInput: React.FC<IDateInputProps> = ({ onChange, ...props }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value.replace(/\D/g, ''); // Убираем все нецифровые символы
        let formattedValue = '';

        if (inputValue.length > 8) {
            inputValue = inputValue.slice(0, 8); // Ограничиваем ввод 8 символами
        }

        for (let i = 0; i < inputValue.length; i++) {
            if (i === 2 || i === 4) {
                formattedValue += '/';
            }
            formattedValue += inputValue[i];
        }

        onChange(formattedValue);
    };

    return <TextField type="text" onChange={handleChange} {...props} />;
};
