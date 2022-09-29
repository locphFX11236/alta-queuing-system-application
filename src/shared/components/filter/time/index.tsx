import { Input, Popover } from 'antd';
import Icon, { CaretRightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

import './rangePicker.css';
import { RangeCalen } from '../../../assets/icon';
import CalendarCustom from './calendar';

const RangeCalenIcon = () => <Icon component={ RangeCalen } />

const RangeCalendar = (cb: any) => <div className='range-calendar' ><CalendarCustom {...cb}/></div>

const DatePickerCustom: React.FC = () => {
    const [value, setValue] = useState([])
    const onSelect = (v: any) => setValue(v);

    return (
        <Popover className='range-picker' content={<RangeCalendar cb={onSelect}/>} trigger="click" showArrow={false} >
            <Input prefix={<RangeCalenIcon />} value={value[0]} readOnly />
            <CaretRightOutlined />
            <Input prefix={<RangeCalenIcon />} value={value[1]} readOnly />
        </Popover>
    );
};
export default DatePickerCustom;