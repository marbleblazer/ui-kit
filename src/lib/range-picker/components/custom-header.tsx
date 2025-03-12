import { ChevronLeftIcon, ChevronRightIcon } from '@chirp/ui/assets/fleet-icons';
import { IconButton } from '../../icon-button';
import { capitalize, Stack } from '@mui/material';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const CustomDatepickerHeader: FC<ReactDatePickerCustomHeaderProps> = ({
    decreaseMonth,
    monthDate,
    increaseMonth,
}) => {
    const { i18n, t } = useTranslation('uiKit', { keyPrefix: 'RangePicker' });

    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <IconButton
                size="small"
                variant="gray"
                aria-label={t('Previous Month')}
                onClick={decreaseMonth}
                sx={{ icon: { color: 'text.text7' }, backgroundColor: 'background.background1' }}
            >
                <ChevronLeftIcon />
            </IconButton>
            <span className="react-datepicker__current-month">
                {capitalize(
                    monthDate.toLocaleString(i18n.language, {
                        month: 'long',
                        year: 'numeric',
                    }),
                )}
            </span>
            <IconButton
                size="small"
                variant="gray"
                aria-label={t('Next Month')}
                onClick={increaseMonth}
                sx={{ icon: { color: 'text.text7' }, backgroundColor: 'background.background1' }}
            >
                <ChevronRightIcon />
            </IconButton>
        </Stack>
    );
};
