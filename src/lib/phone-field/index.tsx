import { MuiPhoneNumberProps } from 'mui-phone-number';
import { FormControl, InputAdornment } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import * as S from './styles';
import { SelectIndicator } from '../select-indicator';
import { getCountryCode } from './get-country-code';

type IMuiPhoneNumberProps = Omit<MuiPhoneNumberProps, 'onChange'> & {
    onChange: (value: string) => void;
    value: string;
};

export const PhoneField: FC<IMuiPhoneNumberProps> = ({ onChange, value: propsValue, defaultCountry, ...props }) => {
    const [localValue, setLocalValue] = useState('');
    const [dialCodeState, setDialCodeState] = useState('');
    const [countryCode, setCountryCode] = useState(defaultCountry);

    // Для задания первоначального значения (если оно передается)
    useEffect(() => {
        console.log('24124');
        const countryCode = getCountryCode(propsValue);
        setCountryCode(countryCode.countryCode);
        setDialCodeState(countryCode.countryCallingCode);
        setLocalValue(countryCode.number);
    }, []);

    const handleChange = (value: string, dialCode: string) => {
        const correctDialCode = `${dialCode}`;

        // Для defaultCountry
        const dial = getCountryCode(`${dialCode}(234) 567-89-00`);
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
