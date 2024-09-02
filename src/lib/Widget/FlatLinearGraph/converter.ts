import { DatumValue } from '@nivo/line';

export const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
});

export const convertDatumValueToString = (date?: DatumValue | null) => {
  if (!date || typeof date !== 'object') return;

  return dateFormatter.format(date).split(' ').reverse().join(' ');
};
