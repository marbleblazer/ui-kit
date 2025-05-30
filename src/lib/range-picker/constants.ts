import moment from 'moment';

const currentTimestamp = moment();

export const QUICK_SELECT_OPTIONS = {
    today: [moment().startOf('day'), moment().endOf('day')],
    'last week': [moment().subtract(1, 'week'), currentTimestamp],
    'last month': [moment().subtract(1, 'month'), currentTimestamp],
    'last 2 months': [moment().subtract(2, 'month'), currentTimestamp],

    // TODO: uncomment when the problem with long periods of time on BE will be fixed
    // 'last 180 days': [moment().subtract(180, 'days').unix(), currentTimestamp],
    // 'last year': [moment().startOf('year').unix(), moment().endOf('year').unix()],
} as const;
