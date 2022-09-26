import React from "react";
import { Col, Row } from "antd";

import { DateInMonth } from "./style";

const CalendarContent = ({state}: any): React.ReactElement => {
    const { selectedDate, setSelectedDate, showMonth } = state;

    return (showMonth.map((week: any, index: any) => (
        <Row
            className={`calendar-week`}
            key={index}
        >

        {week.map((date: any, index: any) => (
            <Col
                className={`calendar-day ${DateInMonth(date, selectedDate[0])}`}
                onClick={() => setSelectedDate([date])}
                key={index}
            >
                {date.format('D').toString()}
            </Col>
        ))}

        </Row>
    )));
};

export default CalendarContent;