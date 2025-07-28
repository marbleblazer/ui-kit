import { FC, ReactNode } from 'react';
import { FormControl, RadioGroup as MUIRadioGroup, Stack } from '@mui/material';

import { CustomTypographyVariant } from '@chirp/ui/styles/theme/template';
import { Radio } from '../radio';
import { Typography } from '../typogrpahy';

export type RadioVariantType = 'check' | 'visible';

export interface IPropsBooleanRadioGroupProps {
    label?: ReactNode;
    labelTypographyVariant?: CustomTypographyVariant;
    value?: true | false;
    positiveLabel?: string;
    negativeLabel?: string;

    handleChange?: (value: boolean) => void;
}

export const BooleanRadioGroup: FC<IPropsBooleanRadioGroupProps> = ({
    label,
    value,
    labelTypographyVariant = 'body1',
    positiveLabel,
    negativeLabel,
    handleChange,
}) => {
    const handleChangeClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleChange?.(event.target.value === 'true');
    };

    return (
        <FormControl>
            <Stack direction="row" justifyContent="space-between" alignItems="center" gap={13}>
                <Typography color="text.text1" variant={labelTypographyVariant}>
                    {label}
                </Typography>
                <MUIRadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChangeClick}
                >
                    <Stack direction="row" gap={13}>
                        <Radio value={true} label={positiveLabel} />
                        <Radio value={false} label={negativeLabel} />
                    </Stack>
                </MUIRadioGroup>
            </Stack>
        </FormControl>
    );
};
