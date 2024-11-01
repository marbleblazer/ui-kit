import { AccordionDetails, ListItemProps as MUIListItemProps, Stack } from '@mui/material';
import { FC } from 'react';
import * as S from '../style';
import { SelectIndicator } from '../../select-indicator';
import { Checkbox, ICheckboxProps } from '../../checkbox';
import { Typography } from '../../typogrpahy';

interface IAccordionProps extends MUIListItemProps {
    title: string;
    key: string | number;
    checkboxProps?: Omit<ICheckboxProps, 'label'>; // if undefined - no checkbox
}

export const AccordionItem: FC<IAccordionProps> = ({ title, children, secondaryAction, checkboxProps, ...props }) => {
    return (
        <S.AccordionListItem
            {...props}
            sx={{
                height: 'auto',
                margin: '6px 0',
            }}
        >
            <S.Accordion>
                <Stack direction="row" className="accordion-summary-wrapper" alignItems="center">
                    <S.AccordionSummary expandIcon={<SelectIndicator />}>
                        <div className="content-container">
                            {checkboxProps ? (
                                <Checkbox label={title} {...checkboxProps} />
                            ) : (
                                <Typography className="title" variant="body1" color="text.primary">
                                    {title}
                                </Typography>
                            )}
                        </div>
                    </S.AccordionSummary>
                    <S.AccordionActions>{secondaryAction}</S.AccordionActions>
                </Stack>
                <AccordionDetails>{children}</AccordionDetails>
            </S.Accordion>
        </S.AccordionListItem>
    );
};
