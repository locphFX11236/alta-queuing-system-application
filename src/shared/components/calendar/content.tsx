import { Col, Row } from "antd";

import { DateInMonth } from "./style";

const CalendarContent = (
    {
        showMonth,
        selectedDate,
        setSelectedDate
    }: any
): React.ReactElement => (showMonth.map((week: any, index: any) => (
    <Row className={`calendar-week`} key={index}>{week.map((date: any, index: any) => (
        <Col onClick={() => setSelectedDate(date)} key={index}>
            <div className={`calendar-day ${DateInMonth(date, selectedDate)}`}>
                {date.format('D').toString()}
            </div>
        </Col>
    ))}</Row>
)));

export default CalendarContent;