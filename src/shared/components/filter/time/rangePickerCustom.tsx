import { Input, Popover } from 'antd';
import Icon, { CaretRightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';

import './rangePicker.css';
import { RangeCalen } from '../../../assets/icon';
import { CalendarRange } from '../../calendar';
import { FuncType, ValueType } from './type';

const RangePickerCustom = ({Func}: FuncType): JSX.Element => {
    const [value, setValue] = useState<ValueType>([]);

    useEffect(() => {
        Func(value);
    }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Popover className='range-picker' content={<CalendarRange cb={setValue}/>} trigger="click" showArrow={false} >
            <Input prefix={<Icon component={ RangeCalen } />} value={value[0]} readOnly />
            <CaretRightOutlined />
            <Input prefix={<Icon component={ RangeCalen } />} value={value[1]} readOnly />
        </Popover>
    );
};
export default RangePickerCustom;