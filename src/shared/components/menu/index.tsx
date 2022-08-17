import { MoreOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Items from './itemMenu';

const MenuComponent: React.FC = () => {
    const [current, setCurrent] = useState('');
    let navigate = useNavigate();

    const onSelect: MenuProps['onSelect'] = e => {
        navigate(`/${e.keyPath.reverse().join('/')}`);
        return setCurrent(e.key);
    };

    return (
        <Menu
            className='menu'
            onSelect={onSelect}
            selectedKeys={[current]}
            defaultSelectedKeys={['']}
            mode="vertical"
            items={Items}
            expandIcon={<MoreOutlined />}
            triggerSubMenuAction='click'
        />
    );
};

export default MenuComponent;