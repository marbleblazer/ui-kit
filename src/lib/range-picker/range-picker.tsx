import { ChangeEvent, FC, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Divider, Stack } from '@mui/material';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import { CustomDatepickerHeader } from './components/custom-header';
import { DatePickerWrapper } from './styles';
import { TextField } from '../text-field';
import { Button } from '../button';
import { Typography } from '../typogrpahy';

export interface RangePickerProps {
    initialStartDate?: Date;
    initialEndDate?: Date;
    onClearDate: () => void;
    onDateChange: (after: string, before: string) => void;
    handleCloseCalendar: () => void;
}

const DATE_FORMAT = 'YYYY-MM-DD';

export const RangePicker: FC<RangePickerProps> = ({
    handleCloseCalendar,
    onDateChange,
    onClearDate,
    initialStartDate = new Date(),
    initialEndDate = new Date(),
}) => {
    const theme = useTheme();

    const [startDate, setStartDate] = useState(() => moment(initialStartDate));
    const [endDate, setEndDate] = useState(() => moment(initialEndDate));

    const [startInputDate, setStartInputDate] = useState<string | Date>(moment(initialStartDate).format(DATE_FORMAT));
    const [endInputDate, setEndInputDate] = useState<string | Date>(moment(initialEndDate).format(DATE_FORMAT));

    const handleApplyDateRange = () => {
        if (!startDate || !endDate) {
            console.error('Please select date range!');

            return;
        }

        if (moment().isBefore(startDate) || !startDate.isValid() || !endDate.isValid()) {
            console.error('Please select correct date range!');

            return;
        }

        onDateChange(startDate.startOf('day').toISOString(), endDate.endOf('day').toISOString());
        handleCloseCalendar();
    };

    const handleInputDateChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: 'start' | 'end') => {
        const { value } = e.target;

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
        handleCloseCalendar();
    };

    const isStartDateValid = moment(startInputDate).isValid();
    const isEndDateValid = moment(endInputDate).isValid() && moment(startInputDate) <= moment(endInputDate);

    return (
        <Stack direction="column" gap="8px">
            <Stack direction="column" gap="14px">
                <Typography variant="caption" color={theme.palette.text.quaternary}>
                    Choose date range
                </Typography>
            </Stack>
            <Stack direction="row">
                <Stack direction="row" gap="8px" alignItems="center">
                    <TextField
                        label="From"
                        error={!isStartDateValid}
                        value={startInputDate}
                        onChange={(e) => handleInputDateChange(e, 'start')}
                    />
                    <div>
                        <Divider orientation="horizontal" flexItem sx={{ width: '12px' }} />
                    </div>
                    <TextField
                        label="To"
                        error={!isEndDateValid}
                        value={endInputDate}
                        onChange={(e) => handleInputDateChange(e, 'end')}
                    />
                </Stack>
            </Stack>

            <Stack direction="row" gap="16px">
                <DatePickerWrapper>
                    <DatePicker
                        selected={startDate.toDate()}
                        onChange={(date) => handleCalendarDateChange(date, 'start')}
                        startDate={startDate.toDate()}
                        endDate={endDate.toDate()}
                        selectsStart
                        showFullMonthYearPicker
                        inline
                        renderCustomHeader={(props) => <CustomDatepickerHeader {...props} />}
                    />
                </DatePickerWrapper>
                <DatePickerWrapper>
                    <DatePicker
                        selected={endDate.toDate()}
                        onChange={(date) => handleCalendarDateChange(date, 'end')}
                        startDate={startDate.toDate()}
                        endDate={endDate.toDate()}
                        selectsEnd
                        minDate={startDate.toDate()}
                        showFullMonthYearPicker
                        inline
                        renderCustomHeader={(props) => <CustomDatepickerHeader {...props} />}
                    />
                </DatePickerWrapper>
                <Divider />
            </Stack>
            <Stack justifyContent="flex-end" direction="row" gap="8px">
                <Button size="medium" variant="secondary" onClick={handleClearDateRange}>
                    Clear filter
                </Button>
                <Button
                    size="medium"
                    variant="primary"
                    onClick={handleApplyDateRange}
                    disabled={!isStartDateValid || !isEndDateValid}
                >
                    Apply changes
                </Button>
            </Stack>
        </Stack>
    );
};
