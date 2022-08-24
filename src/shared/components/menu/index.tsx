import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

import './menu.css';
import Items from './itemMenu';
import { MenuProps } from './menu';

const MenuComponent: React.FC = () => {
    const selectedPath = useLocation().pathname; // 'react-router-dom v6' dùng 'Hook' này để truy cập 'path' hiện tại
    const selectedArray = selectedPath.split('/').filter((_, i) => i !== 0); // Chuyển 'path' sang 'array'
    let navigate = useNavigate(); // 'react-router-dom v6' dùng 'Hook' này để chuyển trang

    const onSelect: MenuProps['onSelect'] = e => {
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