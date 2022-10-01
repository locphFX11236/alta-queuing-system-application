import moment, { Moment } from "moment";
import { useEffect, useState } from "react";

import HandleShowMonth from "./handleShowMonth";
import { DateStyle, WeekStyle } from "../experience";
import { Next, Previous } from "./headerBtnFunc";
import { SelectM1, SelectM2 } from "./selectFunc";
import { CoreType } from "../type";

export default function Func (mode: number, cb: any) {
    const [ showMonth, setShowMonth ] = useState<CoreType["showMonth"]>([]);
    const [ rootDate, setRootDate ] = useState<CoreType["rootDate"]>(moment());
    const [ value, setValue ] = useState<CoreType["value"]>([]);
    const onSelect: Function = (date: Moment): void => {
        setRootDate(date);
        mode === 1 ? SelectM1(date, value, setValue) : SelectM2(date, value, setValue);
    };
    const weekName: Function = (week: any): string => `calendar-week ${WeekStyle(week, value, mode)}`;
    const dateName: Function = (date: Moment): string => `calendar-day ${DateStyle(date, rootDate, value, mode)}`;
    const core: CoreType = {
        rootDate,
        showMonth,
        value,
        onSelect,
        prevMonth() { Previous(rootDate, setRootDate) },
        nextMonth() { Next(rootDate, setRootDate) },
        weekName,
        dateName
    };

    useEffect(() => {
        cb(value);
        setShowMonth(HandleShowMonth(rootDate));
    }, [rootDate]); // eslint-disable-line react-hooks/exhaustive-deps

    return core;
};