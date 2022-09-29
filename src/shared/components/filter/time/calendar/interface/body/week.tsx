import React from "react";
import { Col } from "antd";
import { Moment } from "moment";

const WeekCalendar = ({ week, onSelect, dateClassName }: any): React.ReactElement => (
    week.map((date: Moment) => (
        <Col
            className={dateClassName(date)}
            onClick={() => onSelect(date)}
            key={date.format("[M]MM_[D]DD")}
        >
            {date.format('D').toString()}
        </Col>
    ))
);

export default WeekCalendar;