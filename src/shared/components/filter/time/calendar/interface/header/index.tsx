import { Col, Row } from "antd";

import PrevButton from "./prevBtn";
import NextButton from "./nextBtn";
import Title from "./title";

const HeaderCalendar = ({ rootDate, prevMonth, nextMonth }: any) => (
    <Row className='calendar-header cal-title'>
        <Col span={4} >
            <PrevButton prevMonth={prevMonth} />
        </Col>
        <Col span={16} >
            <Title selectedDate={rootDate} />
        </Col >
        <Col span={4} >
            <NextButton nextMonth={nextMonth} />
        </Col >
    </Row>
);

export default HeaderCalendar;