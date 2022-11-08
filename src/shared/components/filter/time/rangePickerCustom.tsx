import { Input, Popover } from 'antd';
import Icon, { CaretRightOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { RangeCalen } from '../../../assets/icon';
import { CalendarRange } from '../../calendar';
import { TimeCustomProps, ValueType } from './type';
import { AppDispatch } from '../../../../core/typescript/reduxState';

const RangePickerCustom = ({functions}: TimeCustomProps): JSX.Element => {
    const [value, setValue] = useState<ValueType>([]);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        if (value.length === 2 ) functions({ value, dispatch });
    }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Popover className='range-picker' content={<CalendarRange cb={setValue}/>} trigger="click" showArrow={false} >
            <Input prefix={<Icon component={ RangeCalen } />} value={value[0]} placeholder='Tất cả' readOnly />
            <CaretRightOutlined />
            <Input prefix={<Icon component={ RangeCalen } />} value={value[1]} placeholder={moment().format('DD/MM/YYYY')} readOnly />
        </Popover>
    );
};
export default RangePickerCustom;