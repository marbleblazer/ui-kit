import { FC, useEffect, useMemo, useState } from 'react';
import { Select } from '../select';
import {
    alpha,
    Box,
    FormControl,
    InputAdornment,
    MenuItem,
    PaperProps,
    SelectChangeEvent,
    TextFieldProps,
    Typography,
    useTheme,
} from '@mui/material';
import * as S from './styles';
import { applyMask, getMaxLength, stripDialCode } from './helpers';
import { COUNTRIES } from './constants';
import { SelectIndicator } from '../select-indicator';
import { useTranslation } from 'react-i18next';

type PhoneFieldProps = Omit<TextFieldProps, 'onChange' | 'variant'> & {
    value: string;
    onChange: (value: string) => void;
    countries: string[]; // Массив ISO-кодов стран
    defaultCountry: string; // ISO-код страны по умолчанию
    PaperPropsSx?: PaperProps;
    isDisabled?: boolean;
};

export const PhoneField: FC<PhoneFieldProps> = ({
    value,
    onChange,
    countries,
    defaultCountry,
    PaperPropsSx,
    isDisabled = false,
    ...props
}) => {
    const theme = useTheme();

    const { t: countriesT } = useTranslation('uiKit', { keyPrefix: 'PhoneField.countries' });

    const translatedCountries = useMemo(() => COUNTRIES(countriesT), [countriesT]);

    const countryList = useMemo(
        () => countries.map((code) => ({ code, ...translatedCountries[code] })),
        [countries, translatedCountries],
    );

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
        const dialCode = translatedCountries[selectedCountry].dialCode.replace('+', '');
        const fullValue = `${dialCode}${localValue}`;

        if (fullValue !== value) {
            onChange(fullValue);
        }
    }, [selectedCountry, localValue, onChange, translatedCountries]);

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
                isDisabled={isDisabled}
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
                                sx={{
                                    '& .MuiSelect-select': {
                                        color:
                                            localValue && !isDisabled
                                                ? theme.palette.text.text1
                                                : alpha(theme.palette.text.textInput60, 0.6),
                                    },
                                    '.MuiSelect-icon': {
                                        color:
                                            localValue && !isDisabled
                                                ? theme.palette.text.text1 + '!important'
                                                : alpha(theme.palette.text.textInput60, 0.6) + '!important',
                                    },
                                }}
                            >
                                {countryList.map((country) => (
                                    <MenuItem key={country.code} value={country.code} sx={{ width: '100%' }}>
                                        <Box display="flex" alignItems="center" gap={1}>
                                            <Typography variant="text13">{country.name}</Typography>
                                            <Typography variant="text13" style={{ width: 40 }}>
                                                {country.dialCode}
                                            </Typography>
                                        </Box>
                                    </MenuItem>
                                ))}
                            </Select>
                        </InputAdornment>
                    ),
                    sx: {
                        '& .MuiInputBase-input': {
                            color:
                                localValue && !isDisabled
                                    ? theme.palette.text.text1
                                    : alpha(theme.palette.text.textInput60, 0.6),
                        },
                    },
                }}
            />
        </FormControl>
    );
};
