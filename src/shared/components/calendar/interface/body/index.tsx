import MonthCalendar from "./month";
import WeekDayName from "./dayNames";
import { CoreType } from "../../type";

const BodyCalendar = (state: CoreType): JSX.Element => (
    <div className="calendar-content">
        <WeekDayName />
        <MonthCalendar {...state} />
    </div>
);

export default BodyCalendar;