import { MuiPhoneNumberProps } from 'mui-phone-number';
import { FormControl, InputAdornment } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import * as S from './styles';
import { SelectIndicator } from '../select-indicator';
import { getParsedNumber } from './get-parsed-number';
import { CountryCode, getCountryCallingCode } from 'libphonenumber-js';

type IMuiPhoneNumberProps = Omit<MuiPhoneNumberProps, 'onChange'> & {
    onChange: (value: string) => void;
    value: string;
    onlyCountries: string[];
};

export const PhoneField: FC<IMuiPhoneNumberProps> = ({
    onChange,
    value: propsValue,
    defaultCountry,
    onlyCountries: validCountryCodes,
    ...props
}) => {
    const [localValue, setLocalValue] = useState<string>(''); // Телефонный номер без кода

    const [dialCodeState, setDialCodeState] = useState<string>(
        getCountryCallingCode(defaultCountry?.toUpperCase() as CountryCode),
    ); // Код страны в формате "34", "7"

    const [countryCode, setCountryCode] = useState<string | undefined>(defaultCountry); // Страна в формате "us"

    const [initialValueSet, setInitialValueSet] = useState<boolean>(false); // Было ли установлено initial значение

    // Для очистки localValue при изменении defaultCountry
    useEffect(() => {
        if (countryCode && !initialValueSet) {
            setLocalValue('');
        }
    }, [countryCode]);

    // Для задания первоначального значения (если оно передается)
    useEffect(() => {
        if (propsValue && !initialValueSet && propsValue.length > 3) {
            const countryCodeData = getParsedNumber(validCountryCodes, propsValue);
            setCountryCode(countryCodeData.countryCode);
            setDialCodeState(countryCodeData.countryCallingCode);
            setLocalValue(countryCodeData.number);
            setInitialValueSet(true);
        }
    }, []);

    const handleChange = (value: string, country: Record<string, string>) => {
        const dialCode = country.dialCode;
        const countryName = country.countryCode;

        // Проверка и удаление dialCode, если value начинается с dialCode
        let updatedValue = value;
        if (value.startsWith(dialCode)) {
            updatedValue = value.replace(dialCode, '');
        }

        // Проверяем, изменился ли фактический код страны
        if (dialCode !== dialCodeState) {
            setCountryCode(countryName);
            setDialCodeState(dialCode);
        }

        setLocalValue(updatedValue);
        onChange(`${dialCode}${updatedValue}`);
    };

    return (
        <FormControl fullWidth>
            <S.PhoneField
                {...props}
                defaultCountry={countryCode ?? defaultCountry}
                InputLabelProps={{ shrink: true }}
                dialCode={dialCodeState}
                disableCountryCode
                disableAreaCodes
                onlyCountries={validCountryCodes}
                InputProps={{
                    value: localValue,
                    endAdornment: (
                        <InputAdornment position="end">
                            <SelectIndicator />
                        </InputAdornment>
                    ),
                }}
                // @ts-ignore
                onChange={(value: string, country: Record<string, string>) => handleChange(value, country)}
            />
        </FormControl>
    );
};
