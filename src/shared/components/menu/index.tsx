import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import './menu.css';
import Items from './itemMenu';
import { MenuProps } from './menu';
import { AppDispatch } from '../../../core/typescript/reduxState';
import { RefreshAllSearch } from '../../../core/featuresRedux/actionAllReducer';

const MenuComponent: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const selectedPath = useLocation().pathname; // 'react-router-dom v6' dùng 'Hook' này để truy cập 'path' hiện tại
    const selectedArray = selectedPath.split('/').filter((_, i) => i !== 0); // Chuyển 'path' sang 'array'
    let navigate = useNavigate(); // 'react-router-dom v6' dùng 'Hook' này để chuyển trang
    const { UserState, DashboardState, ...allState } = useSelector((state: any) => state);
    const checkSearch = Object
        .values(allState)
        .map((s: any) => s.search.result.length === 0)
        .every(c => c)
    ;

    const onSelect: MenuProps['onSelect'] = e => {
        if (!checkSearch) RefreshAllSearch(dispatch);
        return navigate(e.keyPath.reverse().join('/')); // Lấy 'keyPath' chuyển hướng trang
    };

    return (
        <Menu
            className='menu'
            onSelect={onSelect}
            selectedKeys={selectedArray} // Thể hiện menu được chọn, nhận 'key' là 'aray'
            mode="vertical"
            items={Items}
            expandIcon={<MoreOutlined />}
            triggerSubMenuAction='click'
        />
    );
};

export default MenuComponent;