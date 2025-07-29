import { FC, ReactNode, useState } from 'react';
import { AccordionDetails, Box, Stack } from '@mui/material';

import * as S from './style';
import { Typography } from '../typogrpahy';
import { SelectIndicator } from '../select-indicator';
import { BooleanRadioGroup } from '../boolean-radio-group';

export type RadioVariantType = 'check' | 'visible';

export interface IAccordionRadioGroupProps {
    label: ReactNode;
    positiveLabel: string;
    negativeLabel: string;
    childrens: Record<string, boolean>;

    onChange: (data: Record<string, boolean>) => void;
}

export const AccordionRadioGroup: FC<IAccordionRadioGroupProps> = ({
    label,
    positiveLabel,
    negativeLabel,

    childrens,
    onChange,
}) => {
    const [allCheckedState, setAllCheckedState] = useState(false);

    const handleChangeAll = () => {
        if (!allCheckedState) {
            setAllCheckedState(true);
            const newData = Object.keys(childrens).reduce((acc, key) => ({ ...acc, [key]: true }), {});
            onChange(newData);
        } else {
            setAllCheckedState(false);
            const newData = Object.keys(childrens).reduce((acc, key) => ({ ...acc, [key]: false }), {});
            onChange(newData);
        }
    };

    const handleChangeChildren = (data: Record<string, boolean>) => {
        onChange(data);
        const allChecked = Object.keys(data).every((key) => data[key]);
        setAllCheckedState(allChecked);
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
                                    label={key}
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
