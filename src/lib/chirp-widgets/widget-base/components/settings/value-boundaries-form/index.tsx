import { Stack } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import * as S from './style';
import { ValueBoundaries } from '@chirp/ui/lib/chirp-widgets/types';
import { numericFormat } from '@chirp/ui/helpers/validation';
import { capitalizeString } from '@chirp/ui/helpers/capitalizeString';
import { Checkmark } from '@chirp/ui/assets/icons';
import { Button } from '@chirp/ui/lib/button';
import { Typography } from '@chirp/ui/lib/typogrpahy';
import { useTranslation } from 'react-i18next';

const convertValue = (value: number | string | null) => {
    if (value === null || value === '' || isNaN(+value)) {
        return null;
    }

    return +value;
};

const rangeValidation = (value: number | '') =>
    typeof value === 'number' && !isNaN(+value) ? { value, message: 'Invalid range' } : undefined;

type Props = {
    isLoading: boolean;
    valueFrom?: number;
    valueTo?: number;
    onSave(boundaries: ValueBoundaries): void;
    units: string;
};

export const ValueBoundariesForm: React.FC<Props> = ({ isLoading, valueFrom, valueTo, onSave, units }) => {
    const { t } = useTranslation('uiKit', { keyPrefix: 'widgets' });
    const {
        control,
        formState: { errors, isValid },
        handleSubmit,
        setValue,
        watch,
    } = useForm<Record<keyof ValueBoundaries, number | ''>>({
        defaultValues: {
            from: valueFrom ?? '',
            to: valueTo ?? '',
        },
        mode: 'onChange',
    });

    const from = watch('from');
    const to = watch('to');

    const fieldNames: Array<keyof ValueBoundaries> = ['from', 'to'];

    const isSaved = useMemo(() => {
        const isValueFromIdentical = valueFrom === +from || (valueFrom === undefined && from === '');
        const isValueToIdentical = valueTo === +to || (valueTo === undefined && to === '');
        const areValuesEmpty = valueFrom === undefined && valueTo === undefined;

        return isValueFromIdentical && isValueToIdentical && !areValuesEmpty && !isLoading;
    }, [valueFrom, valueTo, from, to, isLoading]);

    const onSubmit: SubmitHandler<Record<keyof ValueBoundaries, number | ''>> = (boundaries) => {
        onSave({
            from: convertValue(boundaries.from),
            to: convertValue(boundaries.to),
        });
    };

    const onReset = () => {
        onSave({ from: null, to: null });
    };

    useEffect(() => {
        setValue('from', valueFrom ?? '');
        setValue('to', valueTo ?? '');
    }, [valueFrom, valueTo, setValue]);

    return (
        <S.Form component="form" onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
            <Stack direction="row" justifyContent="space-between">
                <Typography color="text.text3" variant="caption12">
                    {t('Set the optimal value range')}
                </Typography>
                <S.ResetInput type="reset" value={t('Reset')} disableUnderline disabled={isLoading} onClick={onReset} />
            </Stack>
            <Stack direction="row" gap="8px" alignItems="flex-end">
                {fieldNames.map((fieldName) => (
                    <Controller
                        key={fieldName}
                        name={fieldName}
                        control={control}
                        rules={{
                            min: fieldName === 'from' ? undefined : rangeValidation(from),
                            max: fieldName === 'to' ? undefined : rangeValidation(to),
                            pattern: { value: numericFormat, message: 'Invalid format' },
                        }}
                        render={({ field }) => (
                            <S.TextField
                                {...field}
                                label={errors[fieldName]?.message || capitalizeString(fieldName)}
                                error={!!errors[fieldName]}
                                placeholder={`0 ${units}`}
                            />
                        )}
                    />
                ))}
                <Button
                    type="submit"
                    size="small"
                    variant="primary"
                    disabled={!isValid || isLoading}
                    sx={{
                        minWidth: '80px',

                        '&, &:hover, &:focus': {
                            backgroundColor: isSaved ? 'alerts.success' : 'alerts.alert',
                            borderColor: isSaved ? 'alerts.success' : 'alerts.alert',
                        },
                    }}
                >
                    {isSaved ? 'Saved' : 'Save'}
                    {isSaved && <Checkmark />}
                </Button>
            </Stack>
        </S.Form>
    );
};
