import moment, { Moment } from "moment";
import { useEffect, useState } from "react";

import HandleShowMonth from "./handleShowMonth";

export default function Func () {
    const [ selectedDate, setSelectedDate ] = useState<Moment[]>([moment()]);
    let showMonth = HandleShowMonth(selectedDate[0]);

    useEffect(() => {
        showMonth = HandleShowMonth(selectedDate[0]);
        console.log(showMonth[1][0].format('MM'));
    }, [selectedDate]);  // eslint-disable-line react-hooks/exhaustive-deps

    return {
        selectedDate,
        setSelectedDate,
        showMonth
    };
};