import React from 'react';
import { Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const { Option } = Select;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const SelectBtn: React.FC = () => (
    <Select
        className='select-btn'
        defaultValue="month"
        style={{ width: 120 }}
        onChange={handleChange}
        suffixIcon={<CaretDownOutlined />}
    >
        <Option value="date">Ngày</Option>
        <Option value="week">Tuần</Option>
        <Option value="month">Tháng</Option>
    </Select>
);

export default SelectBtn;