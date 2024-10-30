import { CheckboxProps, FormControlLabel, FormControlLabelProps } from '@mui/material';
import { Checkbox as MuiCheckbox } from '@mui/material';

import * as S from './style';
import { FC, ReactNode } from 'react';
import { CustomTypographyVariant } from '@chirp/ui/styles/theme/template';

export type CheckoxVariantType = 'check' | 'visible';

export interface IChecboxProps extends CheckboxProps {
    label?: ReactNode;
    variant?: CheckoxVariantType;
    labelTypographyVariant?: CustomTypographyVariant;
    formControlLabelProps?: Omit<FormControlLabelProps, 'label' | 'control'>;
}

export const Checkbox: FC<IChecboxProps> = ({
    label,
    variant = 'check',
    labelTypographyVariant = 'body1',
    formControlLabelProps,
    ...props
}) => {
    const resolvedIcon = variant === 'check' ? <S.CheckboxIcon /> : <S.CustomOpenEyeIcon />;
    const resolvedCheckedIcon = variant === 'check' ? <S.CheckboxCheckedIcon /> : <S.CustomCloseEyeIcon />;

    return (
        <FormControlLabel
            label={label}
            componentsProps={{
                typography: {
                    variant: labelTypographyVariant,
                },
            }}
            control={
                <MuiCheckbox
                    sx={{
                        '&:hover': { bgcolor: 'transparent' },
                    }}
                    disableRipple
                    color="default"
                    checkedIcon={resolvedCheckedIcon}
                    icon={resolvedIcon}
                    {...props}
                />
            }
            {...formControlLabelProps}
        />
    );
};
