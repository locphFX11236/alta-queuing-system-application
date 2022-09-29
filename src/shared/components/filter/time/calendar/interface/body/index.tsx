import MonthCalendar from "./month";
import WeekDayName from "./dayNames";

const BodyCalendar = (state: any): JSX.Element => (
    <div className="calendar-content">
        <WeekDayName />
        <MonthCalendar {...state} />
    </div>
);

export default BodyCalendar;