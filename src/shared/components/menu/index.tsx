import { MoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Items from './itemMenu';
import { MenuProps } from './menu';

const MenuComponent: React.FC = () => {
    const [current, setCurrent] = useState(''); // Mở page truy cập vào dashboard
    let navigate = useNavigate(); // react-router-dom v6+ dùng để chuyển trang

    useEffect(() => {
        navigate('/' + current); // Mỗi lần f5 sẽ trở lại trang dashboard. Tắt eslint's warning ở dòng bên dưới
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSelect: MenuProps['onSelect'] = e => {
        setCurrent(e.key); // Lấy key được chọn hiển thị lên menu
        return navigate('/' + e.keyPath.reverse().join('/')); // Lấy keyPath chuyển hướng trang
    };

    return (
        <Menu
            className='menu'
            onSelect={onSelect}
            selectedKeys={[current]}
            mode="vertical"
            items={Items}
            expandIcon={<MoreOutlined />}
            triggerSubMenuAction='click'
        />
    );
};

export default MenuComponent;