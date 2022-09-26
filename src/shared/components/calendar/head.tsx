import { Col, Row } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import moment from 'moment';

const CalendarHeader = ({state}: any) => {
    const { selectedDate, setSelectedDate } = state;

    const prevMonth = () => [selectedDate[0].clone().subtract(1, 'month')];
    const nextMonth = () => [selectedDate[0].clone().add(1, 'month')];

    return (
        <Row className='calendar-header cal-title'>
            <Col span={4} ><LeftOutlined onClick={() => setSelectedDate(prevMonth())} /></Col >
            <Col span={16} >{moment(selectedDate[0]).format('DD MMM YYYY')}</Col >
            <Col span={4} ><RightOutlined onClick={() => setSelectedDate(nextMonth())} /></Col >
        </Row>
    );
};

export default CalendarHeader;