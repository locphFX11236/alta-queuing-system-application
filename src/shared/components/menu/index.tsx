import Icon, { MoreOutlined, CommentOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';

import { Dashboard, Layer, Monitor, Nut, Report } from '../../assets/icon';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        label,
        key,
        icon,
        children,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('Dashboard', 'sub1', <Icon component={Dashboard} />),

    getItem('Thiết bị', 'sub2', <Icon component={Monitor} />),

    getItem('Dịch vụ', 'sub3', <CommentOutlined style={{ fontSize: '20px', opacity:"0.6" }}/>),

    getItem('Cấp số', 'sub4', <Icon component={Layer} />),

    getItem('Báo cáo', 'sub5', <Icon component={Report} />),

    getItem('Cài đặt hệ thống', 'sub6', <Icon component={Nut} />, [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3')
    ])
];

const MenuComponent: React.FC = () => {
    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
    };

  return (
    <Menu
        className='menu'
        onClick={onClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="vertical"
        items={items}
        expandIcon={<MoreOutlined />}
    />
  );
};

export default MenuComponent;