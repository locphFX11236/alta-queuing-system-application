import { Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import { OptionItems, SelectCustomProps } from './type';
import { AppDispatch } from '../../../../core/typescript/reduxState';

const { Option } = Select;

const SelectCustom = ({optionItems, functions}: SelectCustomProps): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();

    return (
        <Select
            className='custom-select-input'
            defaultValue='all'
            suffixIcon={<CaretDownOutlined style={{ color: '#FF7506' }}/>}
            style={{ width: '100%' }}
            onChange={ value => functions({ value, dispatch }) }
        >
            {optionItems.map( (o: OptionItems) => <Option key={o.text} value={o.value}>{o.text}</Option> )}
        </Select>
    );
};
export default SelectCustom;