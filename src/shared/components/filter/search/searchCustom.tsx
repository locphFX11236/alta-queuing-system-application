import { Input } from 'antd';
import Icon from '@ant-design/icons';

import { SearchIcon } from '../../../assets/icon';
import { SearchCustomProps } from './type';

const SearchCustom = ({functions}: SearchCustomProps): JSX.Element => (
    <Input
        allowClear
        placeholder="Nhập từ khóa"
        style={{ width: '100%' }}
        suffix={<Icon component={SearchIcon} style={{ color: '#FF7506' }}/>}
        onChange={functions}
    />
);

export default SearchCustom;