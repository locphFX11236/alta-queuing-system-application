import { Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

import { OptionItems, SelectCustomProps } from './type';

const { Option } = Select;

const SelectCustom = ({optionItems, functions}: SelectCustomProps): JSX.Element => (
    <Select
        defaultValue='all'
        suffixIcon={<CaretDownOutlined style={{ color: '#FF7506' }}/>}
        style={{ width: '100%' }}
        onChange={functions}
    >
        {optionItems.map( (o: OptionItems) => <Option key={o.text} value={o.value}>{o.text}</Option> )}
    </Select>
);

export default SelectCustom;