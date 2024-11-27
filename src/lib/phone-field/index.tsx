import { FC, useEffect, useMemo, useState } from 'react';
import { Select } from '../select';
import { Box, FormControl, InputAdornment, MenuItem, SelectChangeEvent, Typography } from '@mui/material';
import * as S from './styles';
import { applyMask, getMaxLength, stripDialCode } from './helpers';
import { COUNTRIES } from './constants';

type PhoneFieldProps = {
    value: string;
    onChange: (value: string) => void;
    countries: string[]; // Массив ISO-кодов стран
    defaultCountry: string; // ISO-код страны по умолчанию
    label?: string;
    placeholder?: string;
};

export const PhoneField: FC<PhoneFieldProps> = ({
    value,
    onChange,
    countries,
    defaultCountry,
    label,
    placeholder,
    ...props
}) => {
    const countryList = useMemo(() => countries.map((code) => ({ code, ...COUNTRIES[code] })), [countries]);

    const extractInitialValues = (inputValue: string) => {
        for (const country of countryList) {
            const { dialCode, code } = country;
            const normalizedDialCode = dialCode.replace('+', '');

            if (inputValue.startsWith(normalizedDialCode)) {
                return {
                    initialCountry: code,
                    initialLocalValue: stripDialCode(inputValue, normalizedDialCode),
                };
            }
        }

        return {
            initialCountry: defaultCountry || countries[0],
            initialLocalValue: inputValue,
        };
    };

    const { initialCountry, initialLocalValue } = extractInitialValues(value);

    const [selectedCountry, setSelectedCountry] = useState<string>(initialCountry);
    const [localValue, setLocalValue] = useState<string>(applyMask(initialLocalValue, initialCountry));

    useEffect(() => {
        const unmaskedValue = localValue.replace(/\D/g, '');
        const dialCode = COUNTRIES[selectedCountry].dialCode.replace('+', '');
        onChange(`${dialCode}${unmaskedValue}`);
    }, [selectedCountry, localValue, onChange]);

    const handleCountryChange = (event: SelectChangeEvent<unknown>) => {
        const newCountry = event.target.value as string;
        setSelectedCountry(newCountry);
        setLocalValue(''); // Сбрасываем локальное значение при смене страны
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.replace(/\D/g, '');
        const maxLength = getMaxLength(selectedCountry);

        if (newValue.length <= maxLength) {
            setLocalValue(applyMask(newValue, selectedCountry));
        }
    };

    return (
        <FormControl fullWidth>
            <S.PhoneField
                {...props}
                label={label}
                placeholder={placeholder}
                value={localValue}
                onChange={handleInputChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Select
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                displayEmpty
                                sx={{ minWidth: 80, margin: 0 }}
                                renderValue={(selected) => {
                                    const country = countryList.find((c) => c.code === selected);
                                    return country ? country.dialCode : '';
                                }}
                                MenuProps={{
                                    anchorOrigin: {
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    },
                                    transformOrigin: {
                                        vertical: 'top',
                                        horizontal: 'left',
                                    },
                                }}
                            >
                                {countryList.map((country) => (
                                    <MenuItem key={country.code} value={country.code} sx={{ width: '100%' }}>
                                        <Box display="flex" alignItems="center" gap={1}>
                                            <Typography variant="body2">{country.name}</Typography>
                                            <Typography variant="body2" style={{ width: 40 }}>
                                                {country.dialCode}
                                            </Typography>
                                        </Box>
                                    </MenuItem>
                                ))}
                            </Select>
                        </InputAdornment>
                    ),
                }}
            />
        </FormControl>
    );
};
