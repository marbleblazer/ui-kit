import { FC, useEffect, useMemo, useState } from 'react';
import { Select } from '../select';
import {
    Box,
    FormControl,
    InputAdornment,
    MenuItem,
    PaperProps,
    SelectChangeEvent,
    TextFieldProps,
    Typography,
} from '@mui/material';
import * as S from './styles';
import { applyMask, getMaxLength, stripDialCode } from './helpers';
import { COUNTRIES } from './constants';
import { SelectIndicator } from '../select-indicator';

type PhoneFieldProps = Omit<TextFieldProps, 'onChange'> & {
    value: string;
    onChange: (value: string) => void;
    countries: string[]; // Массив ISO-кодов стран
    defaultCountry: string; // ISO-код страны по умолчанию
    PaperPropsSx?: PaperProps;
};

export const PhoneField: FC<PhoneFieldProps> = ({
    value,
    onChange,
    countries,
    defaultCountry,
    PaperPropsSx,
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
                value={localValue}
                onChange={handleInputChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Select
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                displayEmpty
                                renderValue={(selected) => {
                                    const country = countryList.find((c) => c.code === selected);
                                    return country ? country.dialCode : '';
                                }}
                                IconComponent={SelectIndicator}
                                MenuProps={{
                                    PaperProps: {
                                        ...PaperPropsSx,
                                    },
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
