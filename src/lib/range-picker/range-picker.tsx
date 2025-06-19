import { ChangeEvent, FC, useState } from 'react';
import { capitalize, Divider, Stack, alpha, useTheme, Box } from '@mui/material';
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

const DATE_FORMAT = 'DD/MM/YYYY';

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

    const [isSelectingStart, setIsSelectingStart] = useState(true);
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

            if (moment(value, DATE_FORMAT).isValid()) {
                setStartDate(moment(value));
            }
        } else {
            setEndInputDate(value);

            if (moment(value, DATE_FORMAT).isValid()) {
                setEndDate(moment(value));
            }
        }
    };

    const handleCalendarDateChange = (date: Date | null) => {
        if (!date) return;
        const formattedDate = moment(date);

        if (setActiveQuickSelectState) {
            setActiveQuickSelectState(null);
        }

        if (isSelectingStart) {
            setStartDate(formattedDate);
            setStartInputDate(formattedDate.format(DATE_FORMAT));
            setIsSelectingStart(false); // следующий выбор будет end
        } else {
            const start = moment(startDate);

            if (formattedDate.isBefore(start)) {
                // Выбрали дату раньше start — переставляем местами
                setStartDate(formattedDate);
                setStartInputDate(formattedDate.format(DATE_FORMAT));
                setEndDate(start);
                setEndInputDate(start.format(DATE_FORMAT));
            } else {
                setEndDate(formattedDate);
                setEndInputDate(formattedDate.format(DATE_FORMAT));
            }
            setIsSelectingStart(true); // следующий выбор — снова start
        }

        // if (key === 'start') {
        //     setStartDate(moment(date));
        //     setStartInputDate(formattedDate.format(DATE_FORMAT));
        // } else {
        //     setEndDate(moment(date));
        //     setEndInputDate(formattedDate.format(DATE_FORMAT));
        // }
    };

    const handleClearDateRange = () => {
        onClearDate();
        setActiveQuickSelectState && setActiveQuickSelectState(null);
        handleCloseCalendar();
    };

    const isStartDateValid = moment(startInputDate, DATE_FORMAT).isValid();
    const isEndDateValid =
        moment(endInputDate, DATE_FORMAT).isValid() &&
        moment(startInputDate, DATE_FORMAT) <= moment(endInputDate, DATE_FORMAT);

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
        <Stack direction="column" gap={4}>
            <Stack direction="row" gap={6}>
                <Stack gap={2}>
                    <Stack direction="column" gap="14px">
                        <Typography variant="caption12" color={theme.palette.text.text8}>
                            {t('Choose date range')}
                        </Typography>
                    </Stack>
                    <Stack gap={7}>
                        <Stack direction="row" alignItems="flex-start" gap={4}>
                            <Stack direction="row" gap="16px" alignItems="center" width="50%">
                                <Box>
                                    <TextField
                                        error={!isStartDateValid}
                                        value={startInputDate}
                                        size="small"
                                        placeholder={t('Start date')}
                                        onChange={(e) => handleInputDateChange(e, 'start')}
                                        sx={{
                                            borderColor: alpha(theme.palette.border?.input, 0.14),
                                            flexGrow: 'unset',
                                            flex: '1 1',
                                            margin: 0,
                                            minWidth: '100px',
                                            input: {
                                                height: '36px',
                                                textAlign: 'center',
                                                padding: 0,
                                                fontSize: '13px',
                                                backgroundColor: theme.palette.background.background2,
                                            },
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <TextField
                                        error={!isEndDateValid}
                                        value={endInputDate}
                                        size="small"
                                        placeholder={t('End date')}
                                        onChange={(e) => handleInputDateChange(e, 'end')}
                                        sx={{
                                            flex: '1 1',
                                            margin: 0,
                                            borderColor: alpha(theme.palette.border?.input, 0.14),
                                            flexGrow: 'unset',
                                            minWidth: '100px',
                                            input: {
                                                height: '36px',
                                                textAlign: 'center',
                                                padding: 0,
                                                fontSize: '13px',
                                                backgroundColor: theme.palette.background.background2,
                                            },
                                        }}
                                    />
                                </Box>
                            </Stack>
                        </Stack>

                        <Stack direction="row" gap="16px">
                            <DatePickerWrapper>
                                <DatePicker
                                    selected={startDate.toDate()}
                                    onChange={(date) => handleCalendarDateChange(date)}
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
                        </Stack>
                    </Stack>
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
            <Divider />

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
