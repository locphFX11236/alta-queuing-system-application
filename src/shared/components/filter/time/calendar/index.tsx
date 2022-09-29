import './calendar.css';
import Func from './features/function';
import Calendar from "./interface";

const CalendarCustom = ({cb}: any): JSX.Element => <Calendar state={Func(2, cb)} />;

export default CalendarCustom;