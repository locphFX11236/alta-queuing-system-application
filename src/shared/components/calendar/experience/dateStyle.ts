import moment, { Moment } from 'moment';

export const OutShowMonthStyle = (date: Moment, rootDate: Moment): string => {
    if (date.isBefore(rootDate, 'month') || date.isAfter(rootDate, 'month'))  return 'out-month';
    else return '';
};

export const IsCurrentDate = (date: Moment): string => {
    const currentDate = moment();

    if (currentDate.isSame(date, 'date')) return 'current-date';
    else return '';
};

export const IsValueDate = (date: Moment, value: string[], mode: number): string => {
    if (mode === 1) {
        if (moment(value[0]).isSame(date, 'date')) return 'date-selected';
        return '';
    } else {
        if (date.isSame(value[0], 'date') || date.isSame(value[1], 'date')) return 'date-selected';
        if (value[1] !== undefined && date.isBetween(value[0], value[1], 'date')) return 'date-range';
        return '';
    }
};