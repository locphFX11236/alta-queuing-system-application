import { Col, Row } from "antd";

import PrevButton from "./prevBtn";
import NextButton from "./nextBtn";
import Title from "./title";
import { CoreType } from "../../type";

const HeaderCalendar = ({ prevMonth, nextMonth, ...state }: CoreType): JSX.Element => (
    <Row className='calendar-header cal-title'>
        <Col span={4} >
            <PrevButton prevMonth={prevMonth} />
        </Col>
        <Col span={16} >
            <Title {...state} />
        </Col >
        <Col span={4} >
            <NextButton nextMonth={nextMonth} />
        </Col >
    </Row>
);

export default HeaderCalendar;