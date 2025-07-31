import { ReactNode, useEffect, useState } from 'react';
import { AccordionDetails, Box, Stack } from '@mui/material';

import * as S from './style';
import { Typography } from '../typogrpahy';
import { SelectIndicator } from '../select-indicator';
import { BooleanRadioGroup } from '../boolean-radio-group';

export type RadioVariantType = 'check' | 'visible';

export interface IAccordionRadioGroupProps<T extends Record<string, boolean>> {
    label: ReactNode;
    positiveLabel: string;
    negativeLabel: string;
    childrens: T;

    resolveChildrenLabel?: (key: keyof T) => ReactNode | string;
    onChange: (data: T) => void;
}

export const AccordionRadioGroup = <T extends Record<string, boolean>>({
    label,
    positiveLabel,
    negativeLabel,
    childrens,

    resolveChildrenLabel,
    onChange,
}: IAccordionRadioGroupProps<T>) => {
    const [allCheckedState, setAllCheckedState] = useState(false);

    const handleChangeAll = () => {
        if (!allCheckedState) {
            setAllCheckedState(true);
            const newData = Object.keys(childrens).reduce((acc, key) => ({ ...acc, [key]: true }), {} as T);
            onChange(newData);
        } else {
            setAllCheckedState(false);
            const newData = Object.keys(childrens).reduce((acc, key) => ({ ...acc, [key]: false }), {} as T);
            onChange(newData);
        }
    };

    useEffect(() => {
        const allChecked = Object.keys(childrens).every((key) => childrens[key]);
        setAllCheckedState(allChecked);
    }, [childrens]);

    const handleChangeChildren = (data: T) => {
        onChange(data);
    };

    return (
        <S.AccordionListItem
            sx={{
                height: 'auto',
                margin: '6px 0',
            }}
        >
            <S.Accordion>
                <Stack direction="row" className="accordion-summary-wrapper" alignItems="center">
                    <S.AccordionSummary expandIcon={<SelectIndicator />}>
                        <div className="content-container">
                            <Typography className="title" variant="body1" color="text.text14">
                                {label}
                            </Typography>
                        </div>
                    </S.AccordionSummary>
                    <S.AccordionActions>
                        <BooleanRadioGroup
                            positiveLabel={positiveLabel}
                            negativeLabel={negativeLabel}
                            value={allCheckedState}
                            handleChange={handleChangeAll}
                        />
                    </S.AccordionActions>
                </Stack>
                <AccordionDetails sx={{ p: 0, pl: 5 }}>
                    <Box>
                        <Stack gap={6}>
                            {Object.keys(childrens).map((key) => (
                                <BooleanRadioGroup
                                    label={resolveChildrenLabel?.(key) || key}
                                    positiveLabel={positiveLabel}
                                    negativeLabel={negativeLabel}
                                    value={childrens[key]}
                                    handleChange={(checked) => handleChangeChildren({ ...childrens, [key]: checked })}
                                />
                            ))}
                        </Stack>
                    </Box>
                </AccordionDetails>
            </S.Accordion>
        </S.AccordionListItem>
    );
};
