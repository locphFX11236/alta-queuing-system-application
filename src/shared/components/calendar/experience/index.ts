import { Moment } from 'moment';
import { IsCurrentDate, IsValueDate, OutShowMonthStyle } from './dateStyle';
import IsValueWeek from './weekStyle';

export const DateStyle = (date: Moment, rootDate: Moment, value: string[], mode: number): string => {
    return `${OutShowMonthStyle(date, rootDate)} ${IsCurrentDate(date)} ${IsValueDate(date, value, mode)}`;
};

export const WeekStyle = (week: any, value: string[], mode: number): string => {
    if (mode === 1) return '';
    else return IsValueWeek(week, value);
};