import { FC, ReactNode } from 'react';
import { FormControlLabel, FormControlLabelProps, RadioProps } from '@mui/material';

import * as S from './style';
import { CustomTypographyVariant } from '@chirp/ui/styles/theme/template';
import { RadioCheckedIcon, RadioUncheckedIcon } from '@chirp/ui/assets/fleet-icons';

export type RadioVariantType = 'check' | 'visible';

export interface IRadioProps extends RadioProps {
    label?: ReactNode;
    variant?: RadioVariantType;
    labelTypographyVariant?: CustomTypographyVariant;
    formControlLabelProps?: Omit<FormControlLabelProps, 'label' | 'control'>;
}

export const Radio: FC<IRadioProps> = ({
    label,
    labelTypographyVariant = 'body1',
    formControlLabelProps,
    ...props
}) => {
    return (
        <FormControlLabel
            label={label}
            componentsProps={{
                typography: {
                    variant: labelTypographyVariant,
                },
            }}
            control={
                <S.StyledRadio
                    sx={{
                        '&:hover': { bgcolor: 'transparent' },
                    }}
                    checkedIcon={<RadioCheckedIcon />}
                    icon={<RadioUncheckedIcon />}
                    disableRipple
                    color="default"
                    {...props}
                />
            }
            {...formControlLabelProps}
        />
    );
};
