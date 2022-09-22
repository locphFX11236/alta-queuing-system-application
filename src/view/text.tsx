import React from 'react';
import { Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const { Option } = Select;

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const OptionItems = [
    {
        show: 'Jack',
        value: 'jack'
    },
    {
        show: 'Lucy',
        value: 'lucy'
    },
    {
        show: 'Tom',
        value: 'tom'
    },
];

const App: React.FC = () => (
    <Select
        placeholder="Select a person"
        suffixIcon={<CaretDownOutlined style={{ color: '#FF7506' }}/>}
        style={{ width: '20%' }}
        onChange={onChange}
    >
        {OptionItems.map((v) => (
            <Option key={v.value} value={v.value}>{v.show}</Option>
        ))}
    </Select>
);

export default App;