import { Input, Popover } from 'antd';
import Icon, { CaretRightOutlined } from '@ant-design/icons';
import React from 'react';

import './rangePicker.css';
import { RangeCalen } from '../../../assets/icon';
import { CalendarComponent } from '../../calendar';

const RangeCalenIcon = () => <Icon component={ RangeCalen } />

const RangeCalendar = () => <div className='range-calendar' ><CalendarComponent /></div>

const DatePickerCustom: React.FC = () => {
    return (
        <Popover className='range-picker' content={<RangeCalendar />} trigger="click" showArrow={false} >
            <Input prefix={<RangeCalenIcon />} value='s' readOnly />
            <CaretRightOutlined />
            <Input prefix={<RangeCalenIcon />} value='s' readOnly />
        </Popover>
    );
};
export default DatePickerCustom;