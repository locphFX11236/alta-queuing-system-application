import { Card } from "antd";

import HeaderCalendar from './header';
import BodyCalendar from "./body";

const Calendar = ({state}: any): JSX.Element => (
    <Card
        className='calendar-table'
        title={ <HeaderCalendar {...state} /> }
    >
        <BodyCalendar {...state} />
    </Card>
);

export default Calendar;