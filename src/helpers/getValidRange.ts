import moment from 'moment/moment';
import { Range } from 'react-date-range';

const checkDate = (date: Date | undefined) => {
  if (date && !moment(date).isValid()) {
    return undefined;
  }

  return date;
};

export const getValidRange = (range: Range): Range => {
  const validRange = { ...range };
  validRange.startDate = checkDate(range.startDate);
  validRange.endDate = checkDate(range.endDate);

  return validRange;
};
