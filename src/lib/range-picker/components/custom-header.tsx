import { ChevronLeftIcon, ChevronRightIcon } from '@chirp/ui/assets/fleet-icons';
import { IconButton } from '../../icon-button';
import { Stack } from '@mui/material';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import { FC } from 'react';

export const CustomDatepickerHeader: FC<ReactDatePickerCustomHeaderProps> = ({
    decreaseMonth,
    monthDate,
    increaseMonth,
}) => {
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <IconButton
                size="small"
                variant="gray"
                aria-label="Previous Month"
                // style={customHeaderCount === 1 ? { visibility: 'hidden' } : {}}
                onClick={decreaseMonth}
                sx={{ icon: { color: 'text.text7' }, backgroundColor: 'background.background1' }}
            >
                <ChevronLeftIcon />
            </IconButton>
            <span className="react-datepicker__current-month">
                {monthDate.toLocaleString('en-US', {
                    month: 'long',
                    year: 'numeric',
                })}
            </span>
            <IconButton
                size="small"
                variant="gray"
                aria-label="Next Month"
                // style={customHeaderCount === 0 ? { visibility: 'hidden' } : {}}
                onClick={increaseMonth}
                sx={{ icon: { color: 'text.text7' }, backgroundColor: 'background.background1' }}
            >
                <ChevronRightIcon />
            </IconButton>
        </Stack>
    );
};
