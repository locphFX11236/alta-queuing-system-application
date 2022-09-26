import { Card } from "antd";

import './calendar.css';
import CalendarHeader from './head';
import CalendarContent from "./content";
import WeekDateName from "./weekDayName";
import state from './function';

export const CalendarComponent = (): JSX.Element => (
    <Card
        className='calendar-table'
        title={ <CalendarHeader state={state()} /> }
    >
        <div className="calendar-content">
            <WeekDateName />
            <CalendarContent state={state()} />
        </div>
    </Card>
);