import moment from 'moment';

export type QuickSelect = {
  [key: string]: [number, number];
};

export const QUICK_SELECT_OPTIONS: QuickSelect = {
  today: [moment().startOf('day').unix(), moment().endOf('day').unix()],
  'last week': [moment().subtract(1, 'week').unix(), moment().unix()],
  'last month': [moment().subtract(1, 'month').unix(), moment().unix()],
  'last 90 days': [moment().subtract(90, 'days').unix(), moment().unix()],

  // TODO: uncomment when the problem with long periods of time on BE will be fixed
  // 'last 180 days': [moment().subtract(180, 'days').unix(), moment().unix()],
  // 'last year': [moment().startOf('year').unix(), moment().endOf('year').unix()],
};
