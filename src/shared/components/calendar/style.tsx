import moment, { Moment } from 'moment';

export const DateInMonth = (date: Moment, selectedDate: Moment): String => {
    const currentMonth = selectedDate.clone().startOf('month');
    const currentDate = moment();

    if (selectedDate.isSame(date, 'date')) return 'date-selected';
    else if (currentDate.isSame(date, 'date')) return 'current-date' 
    else {
        if (date.isBefore(currentMonth, 'month'))  return 'out-month';
        if (date.isAfter(currentMonth, 'month')) return 'out-month';
    };
    return '';
};