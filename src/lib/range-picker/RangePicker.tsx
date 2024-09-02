import { Divider, Stack, Typography, useTheme } from '@mui/material';
import moment from 'moment';
import { FC } from 'react';
import 'react-date-range/dist/styles.css';
import { DateRange, Range, RangeKeyDict } from 'react-date-range';

import { Checkmark } from '@/assets/icons/Checkmark';
import { Button } from '@/components/Button';
import { getValidRange } from '@/helpers/getValidRange';
import { showNotification } from '@/helpers/showNotification';
import { useBreakpoints } from '@/hooks/useBreakpoints';

import { MobileDateInput, RangePickerWrapper } from './RangePickerWrapper';
import { CalendarQuickSelect, CalendarQuickSelectButton, CalendarQuickSelectItem } from './style';
import { QUICK_SELECT_OPTIONS } from './types';

export interface RangePickerProps {
  setAfter: (after: number | undefined) => void;
  setBefore: (before: number | undefined) => void;
  handleCloseCalendar: () => void;
  quickSelect: string | undefined;
  setQuickSelect: (quickSelect: string | undefined) => void;
  selectionRange: Range;
  setSelectionRange: (range: Range) => void;
  disabledDay?: (date: Date) => boolean;
}

// import moment from 'moment-timezone';
export const RangePicker: FC<RangePickerProps> = ({
  handleCloseCalendar,
  setAfter,
  setBefore,
  quickSelect,
  setQuickSelect,
  selectionRange,
  setSelectionRange,
  disabledDay,
}) => {
  const theme = useTheme();
  const { isMobile } = useBreakpoints();

  const startDate = moment(selectionRange.startDate);
  const endDate = moment(selectionRange.endDate);

  const handleApplyDateRange = () => {
    if (!startDate || !endDate) {
      showNotification('error', 'Please select date range!');

      return;
    }

    if (moment().isBefore(startDate) || !startDate.isValid() || !endDate.isValid()) {
      showNotification('error', 'Please select correct date range!');

      return;
    }

    setAfter(startDate.startOf('day').unix());
    setBefore(endDate.endOf('day').unix());
    handleCloseCalendar();
  };

  const handleClearDateRange = () => {
    setBefore(undefined);
    setAfter(undefined);
    setQuickSelect(undefined);
    handleCloseCalendar();
    setSelectionRange({ startDate: moment().toDate(), endDate: moment().toDate(), key: 'selection' });
  };

  const handleSelect = (range: RangeKeyDict) => {
    setSelectionRange(range.selection);
    setQuickSelect(undefined);
  };

  const handleChange = (date: string, type: 'startDate' | 'endDate') => {
    setSelectionRange({
      ...selectionRange,
      [type]: moment(date).toDate(),
    });
  };

  const handleQuickSelect = (option: string) => {
    setQuickSelect(option);
    setSelectionRange({
      startDate: moment.unix(QUICK_SELECT_OPTIONS[option][0]).toDate(),
      endDate: moment.unix(QUICK_SELECT_OPTIONS[option][1]).toDate(),
      key: 'selection',
    });
  };

  return (
    <Stack direction='column' gap='16px'>
      <Stack direction={isMobile ? 'column' : 'row'} gap='24px'>
        <Stack direction='column' gap='8px'>
          <Typography fontSize='12px' lineHeight='16px' color={theme.palette.text.secondary}>
            Choose date range
          </Typography>
          {isMobile ? (
            <Stack direction='row' gap='8px' alignItems='center'>
              <MobileDateInput
                type='date'
                value={startDate ? startDate.format('YYYY-MM-DD') : undefined}
                onChange={(e) => handleChange(e.target.value, 'startDate')}
              />
              {' - '}
              <MobileDateInput
                type='date'
                value={endDate ? endDate.format('YYYY-MM-DD') : undefined}
                onChange={(e) => handleChange(e.target.value, 'endDate')}
              />
            </Stack>
          ) : (
            <RangePickerWrapper direction='row' gap='16px'>
              <DateRange
                dateDisplayFormat='dd.MM.yyyy'
                direction='horizontal'
                editableDateInputs={true}
                months={1}
                onChange={handleSelect}
                ranges={[getValidRange(selectionRange)]}
                disabledDay={disabledDay}
                weekStartsOn={1}
                retainEndDateOnFirstSelection={true}
              />
            </RangePickerWrapper>
          )}
        </Stack>
        <CalendarQuickSelect>
          {Object.keys(QUICK_SELECT_OPTIONS).map((option) => (
            <CalendarQuickSelectItem key={option}>
              <CalendarQuickSelectButton
                onClick={() => handleQuickSelect(option)}
                sx={{
                  color:
                    quickSelect === option ? theme.palette.primaryColors.accent : theme.palette.lightShades.ternary,
                }}
              >
                {option}
                {quickSelect === option ? <Checkmark /> : null}
              </CalendarQuickSelectButton>
            </CalendarQuickSelectItem>
          ))}
        </CalendarQuickSelect>
      </Stack>
      <Divider />
      <Stack direction={isMobile ? 'column' : 'row'} justifyContent='flex-end' gap='8px'>
        <Button size='medium' variant='secondary' onClick={handleClearDateRange}>
          Clear filter
        </Button>
        <Button size='medium' variant='primary' onClick={handleApplyDateRange}>
          Apply changes
        </Button>
      </Stack>
    </Stack>
  );
};
