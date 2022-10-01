import './calendar.css';
import Func from './features';
import Calendar from "./interface";
import { DashboardCal } from './functions';

export const CalendarDashboard = (): JSX.Element => <Calendar state={Func(1, DashboardCal)} />;
export const CalendarRange = ({cb}: any): JSX.Element => <Calendar state={Func(2, cb)} />;