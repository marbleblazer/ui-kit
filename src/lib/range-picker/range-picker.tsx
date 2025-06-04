import { ChangeEvent, FC, useState } from 'react';
import { capitalize, Divider, Stack, alpha, useTheme } from '@mui/material';
import DatePicker, { registerLocale } from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import { CustomDatepickerHeader } from './components/custom-header';
import { DatePickerWrapper } from './styles';
import { TextField } from '../text-field';
import { Button } from '../button';
import { Typography } from '../typogrpahy';
import { useTranslation } from 'react-i18next';
import { getLocaleObj } from './helpers/get-locale';
import { QUICK_SELECT_OPTIONS } from './constants';

import * as S from './styles';
import { Checkmark } from '@chirp/ui/assets/icons';

export interface RangePickerProps {
    initialStartDate?: Date;
    initialEndDate?: Date;
    withQuickSelect?: boolean;

    activeQuickSelectState?: keyof typeof QUICK_SELECT_OPTIONS | null;
    setActiveQuickSelectState?: (state: keyof typeof QUICK_SELECT_OPTIONS | null) => void;
    onClearDate: () => void;
    onDateChange: (after: string, before: string) => void;
    handleCloseCalendar: () => void;
}

const DATE_FORMAT = 'YYYY-MM-DD';

export const RangePicker: FC<RangePickerProps> = ({
    handleCloseCalendar,
    onDateChange,
    onClearDate,
    withQuickSelect,
    activeQuickSelectState,
    setActiveQuickSelectState,
    initialStartDate = new Date(),
    initialEndDate = new Date(),
}) => {
    const theme = useTheme();

    const { t, i18n } = useTranslation('uiKit', { keyPrefix: 'RangePicker' });

    const [startDate, setStartDate] = useState(() => moment(initialStartDate));
    const [endDate, setEndDate] = useState(() => moment(initialEndDate));
    const [startInputDate, setStartInputDate] = useState<string | Date>(moment(initialStartDate).format(DATE_FORMAT));
    const [endInputDate, setEndInputDate] = useState<string | Date>(moment(initialEndDate).format(DATE_FORMAT));

    const handleApplyDateRange = () => {
        if (!startDate || !endDate) {
            console.error('Please select date range!');

            return;
        }

        if (!startDate.isValid() || !endDate.isValid()) {
            console.error('Please select correct date range!');

            return;
        }

        onDateChange(startDate.startOf('day').toISOString(), endDate.endOf('day').toISOString());
        handleCloseCalendar();
    };

    const handleInputDateChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: 'start' | 'end') => {
        const { value } = e.target;

        if (setActiveQuickSelectState) {
            setActiveQuickSelectState(null);
        }

        if (key === 'start') {
            setStartInputDate(value);

            if (moment(value).isValid()) {
                setStartDate(moment(value));
            }
        } else {
            setEndInputDate(value);

            if (moment(value).isValid()) {
                setEndDate(moment(value));
            }
        }
    };

    const handleCalendarDateChange = (date: Date | null, key: 'start' | 'end') => {
        if (!date) return;
        const formattedDate = moment(date);

        if (setActiveQuickSelectState) {
            setActiveQuickSelectState(null);
        }

        if (key === 'start') {
            setStartDate(moment(date));
            setStartInputDate(formattedDate.format(DATE_FORMAT));
        } else {
            setEndDate(moment(date));
            setEndInputDate(formattedDate.format(DATE_FORMAT));
        }
    };

    const handleClearDateRange = () => {
        onClearDate();
        setActiveQuickSelectState && setActiveQuickSelectState(null);
        handleCloseCalendar();
    };

    const isStartDateValid = moment(startInputDate).isValid();
    const isEndDateValid = moment(endInputDate).isValid() && moment(startInputDate) <= moment(endInputDate);

    registerLocale(i18n.language.split('-')[0], getLocaleObj(i18n.language));

    const handleQuickSelect = (option: keyof typeof QUICK_SELECT_OPTIONS) => {
        setActiveQuickSelectState && setActiveQuickSelectState(option);
        const startDate = moment(QUICK_SELECT_OPTIONS[option][0]);
        const endDate = moment(QUICK_SELECT_OPTIONS[option][1]);
        setStartDate(startDate);
        setStartInputDate(startDate.format(DATE_FORMAT));

        setEndDate(endDate);
        setEndInputDate(endDate.format(DATE_FORMAT));
    };

    return (
        <Stack direction="column" gap="8px">
            <Stack direction="column" gap="14px">
                <Typography variant="caption12" color={theme.palette.text.text8}>
                    {t('Choose date range')}
                </Typography>
            </Stack>
            <Stack direction="row" alignItems="flex-start" gap={4}>
                <Stack direction="row" gap="8px" alignItems="center" width="100%">
                    <TextField
                        label={t('Input')}
                        error={!isStartDateValid}
                        value={startInputDate}
                        placeholder={t('Start date')}
                        onChange={(e) => handleInputDateChange(e, 'start')}
                        sx={{
                            label: { color: `${theme.palette.text.text8} !important` },
                            borderColor: alpha(theme.palette.border?.input, 0.14),
                            input: {
                                backgroundColor: theme.palette.background.background2,
                            },
                        }}
                    />
                    <div>
                        <Divider
                            orientation="horizontal"
                            flexItem
                            sx={{ width: '12px', borderColor: theme.palette.text.text8 }}
                        />
                    </div>
                    <TextField
                        label={t('Label')}
                        error={!isEndDateValid}
                        value={endInputDate}
                        placeholder={t('End date')}
                        onChange={(e) => handleInputDateChange(e, 'end')}
                        sx={{
                            label: { color: `${theme.palette.text.text8} !important` },
                            borderColor: alpha(theme.palette.border?.input, 0.14),
                            input: {
                                backgroundColor: theme.palette.background.background2,
                            },
                        }}
                    />
                </Stack>
                {activeQuickSelectState || withQuickSelect ? (
                    <S.CalendarQuickSelect>
                        {(Object.keys(QUICK_SELECT_OPTIONS) as Array<keyof typeof QUICK_SELECT_OPTIONS>).map(
                            (option) => {
                                const isActive = activeQuickSelectState === option;

                                return (
                                    <S.CalendarQuickSelectItem key={option}>
                                        <S.CalendarQuickSelectButton
                                            onClick={() => handleQuickSelect(option)}
                                            sx={{
                                                color: isActive
                                                    ? theme.palette.primaryColors.accent
                                                    : theme.palette.lightShades.ternary,
                                            }}
                                        >
                                            {t(option)}
                                            {isActive ? <Checkmark /> : null}
                                        </S.CalendarQuickSelectButton>
                                    </S.CalendarQuickSelectItem>
                                );
                            },
                        )}
                    </S.CalendarQuickSelect>
                ) : null}
            </Stack>

            <Stack direction="row" gap="16px">
                <DatePickerWrapper>
                    <DatePicker
                        selected={startDate.toDate()}
                        onChange={(date) => handleCalendarDateChange(date, 'start')}
                        startDate={startDate.toDate()}
                        endDate={endDate.toDate()}
                        selectsStart
                        locale={i18n.language}
                        showFullMonthYearPicker
                        inline
                        renderCustomHeader={(props) => <CustomDatepickerHeader {...props} />}
                        formatWeekDay={(nameOfDay) => capitalize(nameOfDay.substr(0, 3))}
                    />
                </DatePickerWrapper>
                <DatePickerWrapper>
                    <DatePicker
                        selected={endDate.toDate()}
                        onChange={(date) => handleCalendarDateChange(date, 'end')}
                        startDate={startDate.toDate()}
                        endDate={endDate.toDate()}
                        selectsEnd
                        locale={i18n.language}
                        minDate={startDate.toDate()}
                        showFullMonthYearPicker
                        inline
                        renderCustomHeader={(props) => <CustomDatepickerHeader {...props} />}
                        formatWeekDay={(nameOfDay) => capitalize(nameOfDay.substr(0, 3))}
                    />
                </DatePickerWrapper>
                <Divider />
            </Stack>

            <Stack justifyContent="flex-end" direction="row" gap="8px">
                <Button size="medium" variant="secondary" onClick={handleClearDateRange}>
                    {t('Clear data range')}
                </Button>
                <Button
                    size="medium"
                    variant="primary"
                    onClick={handleApplyDateRange}
                    disabled={!isStartDateValid || !isEndDateValid}
                >
                    {t('Apply changes')}
                </Button>
            </Stack>
        </Stack>
    );
};
