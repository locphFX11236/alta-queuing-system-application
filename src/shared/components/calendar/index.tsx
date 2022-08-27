import { useEffect, useState } from "react";
import { Card } from "antd";
import moment, { Moment } from 'moment';

import './calendar.css';
import CalendarHeader from './head';
import CalendarContent from "./content";
import HandleShowMonth from "./handleShowMonth";
import WeekDateName from "./weekDayName";

export const CalendarComponent = (): JSX.Element => {
    const [ showMonth, setShowMonth ] = useState<any>([]);
    const [ selectedDate, setSelectedDate ] = useState<Moment>(moment());

    useEffect(() => {
        setShowMonth(HandleShowMonth(selectedDate));
    }, [selectedDate]);

    return (
        <Card
            className='calendar-table'
            title={ <CalendarHeader
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            /> }
        >
            <div className="calendar-content">
                <WeekDateName />
                <CalendarContent
                    showMonth={showMonth}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
            </div>
        </Card>
    );
};