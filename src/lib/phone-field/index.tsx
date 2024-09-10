import { MuiPhoneNumberProps } from 'material-ui-phone-number';
import { FormControl, InputAdornment } from '@mui/material';
import { FC, useState } from 'react';

import * as S from './styles';
import { SelectIndicator } from '../select-indicator';

type IMuiPhoneNumberProps = Omit<MuiPhoneNumberProps, 'onChange'> & {
    onChange: (value: string) => void;
};

export const PhoneField: FC<IMuiPhoneNumberProps> = ({ onChange, value: propsValue, ...props }) => {
    const [localValue, setLocalValue] = useState('');
    const [dialCodeState, setDialCodeState] = useState('');

    const handleChange = (value: string, dialCode: string) => {
        const correctDialCode = `${dialCode}`;
        setDialCodeState(correctDialCode);
        setLocalValue(value.replace(dialCode, ''));
        onChange(`${correctDialCode}${localValue}`);
    };

    return (
        <FormControl fullWidth>
            <S.PhoneField
                {...props}
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
