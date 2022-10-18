import { Input } from 'antd';
import Icon from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import { SearchIcon } from '../../../assets/icon';
import { SearchCustomProps } from './type';
import { AppDispatch } from '../../../../core/typescript/reduxState';

const SearchCustom = ({functions}: SearchCustomProps): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();

    return (
        <Input
            allowClear
            placeholder="Nhập từ khóa"
            style={{ width: '100%' }}
            suffix={<Icon component={SearchIcon} style={{ color: '#FF7506' }}/>}
            onChange={e => functions({e, dispatch})}
        />
    );
};

export default SearchCustom;