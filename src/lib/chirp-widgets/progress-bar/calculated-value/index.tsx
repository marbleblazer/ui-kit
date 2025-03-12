import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
    value: number;
    postfix: string;
    label: 'min' | 'max' | 'avg';
    color: string;
};

export const CalculatedValue: React.FC<Props> = ({ value, postfix, label, color }) => {
    const roundedValue = Math.round(value * 10) / 10;
    const { t } = useTranslation('uiKit', { keyPrefix: 'widgets' });

    if (isNaN(roundedValue)) {
        return null;
    }

    return (
        <Typography fontWeight={500} fontSize="16px" lineHeight="28px" textTransform="capitalize" color={color}>
            {t(label)} {roundedValue}
            {postfix && (
                <Typography component="span" sx={{ paddingLeft: '2px', fontSize: '10px', verticalAlign: 'super' }}>
                    {postfix}
                </Typography>
            )}
        </Typography>
    );
};
