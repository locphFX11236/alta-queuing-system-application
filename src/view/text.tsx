import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

const children: React.ReactNode[] = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
    <>
        <Select
            mode="multiple"
            style={{ width: '50%' }}
            placeholder="Please select"
            defaultValue={['a10', 'c12']}
            onChange={handleChange}
        >
            {children}
        </Select>
    </>
);

export default App;