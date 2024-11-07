import { MuiPhoneNumberProps } from 'mui-phone-number';
import { FormControl, InputAdornment } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import * as S from './styles';
import { SelectIndicator } from '../select-indicator';
import { getParsedNumber } from './get-parsed-number';

type IMuiPhoneNumberProps = Omit<MuiPhoneNumberProps, 'onChange'> & {
    onChange: (value: string) => void;
    value: string;
};

export const PhoneField: FC<IMuiPhoneNumberProps> = ({ onChange, value: propsValue, defaultCountry, ...props }) => {
    const [localValue, setLocalValue] = useState('');
    const [dialCodeState, setDialCodeState] = useState('');
    const [countryCode, setCountryCode] = useState(defaultCountry);
    const [initialValueSet, setInitialValueSet] = useState(false); // Было ли установлено initial значение

    // Для задания первоначального значения (если оно передается)
    useEffect(() => {
        if (propsValue && !initialValueSet) {
            const countryCodeData = getParsedNumber(propsValue);
            setCountryCode(countryCodeData.countryCode);
            setDialCodeState(countryCodeData.countryCallingCode);
            setLocalValue(countryCodeData.number);
            setInitialValueSet(true);
        }
    }, [propsValue, initialValueSet]);

    // Для очистки localValue при изменении defaultCountry
    useEffect(() => {
        if (initialValueSet) {
            setLocalValue('');
        }
    }, [defaultCountry]);

    const handleChange = (value: string, dialCode: string) => {
        const correctDialCode = `${dialCode}`;

        // Для defaultCountry
        const dial = getParsedNumber(`${dialCode}(234) 567-89-00`);
        setCountryCode(dial.countryCode);

        setDialCodeState(correctDialCode);
        setLocalValue(value.replace(dialCode, ''));
        onChange(`${correctDialCode}${localValue}`);
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
                InputProps={{
                    value: localValue,
                    endAdornment: (
                        <InputAdornment position="end">
                            <SelectIndicator />
                        </InputAdornment>
                    ),
                }}
                // @ts-ignore
                onChange={(value: string, { dialCode }: { dialCode: string }) => handleChange(value, dialCode)}
            />
        </FormControl>
    );
};
