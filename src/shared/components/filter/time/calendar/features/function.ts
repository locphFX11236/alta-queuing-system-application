import moment, { Moment } from "moment";
import { useEffect, useState } from "react";

import HandleShowMonth from "./handleShowMonth";
import { DateInMonth } from "../experience/style";

export default function Func (mode: number, cb: any) {
    const [ rootDate, setRootDate ] = useState<Moment>(moment());
    const [ showMonth, setShowMonth ] = useState<any[]>([]);
    const [ value, setValue ] = useState<string[]>([]);
    const prevMonth = () => {
        let prevMonthDate = rootDate.clone().subtract(1, 'month');
        setRootDate(prevMonthDate);
        setShowMonth(HandleShowMonth(prevMonthDate));
    };
    const nextMonth = () => {
        let nextMonthDate = rootDate.clone().add(1, 'month');
        setRootDate(nextMonthDate);
        setShowMonth(HandleShowMonth(nextMonthDate));
    };
    const onSelect = (date: Moment) => {
        setRootDate(date);
        if (mode === 1 || value.length === 0) setValue([date.format('L')]);
        if (mode === 2 && value.length === 1 && date.format('L') !== value[0]) {
            let a = [value[0], date.format('L')];
            a.sort();
            setValue(a);
        };
        if (mode === 2 && value.length === 2) {
            if (date.isBefore(moment(value[0]))) setValue([date.format('L'), value[1]]);
            if (date.isAfter(moment(value[0]))) setValue([value[0], date.format('L')]);
        };
    };
    const weekClassName = () => `calendar-week`;
    const dateClassName = (date: Moment) => `calendar-day ${DateInMonth(date, rootDate)}`;

    useEffect(() => {
        cb(value);
        setShowMonth(HandleShowMonth(rootDate));
    }, [rootDate]);  // eslint-disable-line react-hooks/exhaustive-deps

    return {
        rootDate,
        showMonth,
        onSelect,
        prevMonth,
        nextMonth,
        weekClassName,
        dateClassName
    };
};