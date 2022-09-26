import { Col, Row } from "antd";
import { updateLocale, weekdaysMin } from 'moment';

updateLocale('en', {
    weekdaysMin: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], // Custom tên cho thứ trong tuần
    week: {
        dow: 1, // Custom cho ngày đầu tiên là T2 với index = 1
        doy: 7 // Custom cho ngày 1 tháng 1 thuộc tuần đầu tiên
    }
}); // Custom cho moment

const WeekDateName = (): React.ReactElement => (
    <Row className='calendar-week cal-title'>

    {weekdaysMin().map((a, i) => (
        <Col className='calendar-day' key={i}>{a}</Col>
    ))}

    </Row>
);

export default WeekDateName;