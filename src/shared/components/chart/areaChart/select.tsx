import { Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const { Option } = Select;

export const render: Record<string, string> = {
    'date': 'Ngày',
    'week': 'Tuần',
    'month': 'Tháng'
}

const SelectBtn = ({handleChange}: any): JSX.Element => (
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