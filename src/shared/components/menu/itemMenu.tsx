import Icon, { CommentOutlined } from '@ant-design/icons';

import { Dashboard, Layer, Monitor, Nut, Report } from '../../assets/icon';
import { MenuItem, MenuProps } from './menu';

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

const Items: MenuProps['items'] = [
    getItem('Dashboard', '', <Icon component={Dashboard} /> ),
    getItem('Thiết bị', 'equip', <Icon component={Monitor} /> ),
    getItem('Dịch vụ', 'service', <CommentOutlined style={{ fontSize: '20px', opacity:"0.6" }} />),
    getItem('Cấp số', 'number-count', <Icon component={Layer} />),
    getItem('Báo cáo', 'report', <Icon component={Report} />),
    getItem('Cài đặt hệ thống', 'setting', <Icon component={Nut} />, [
        getItem('Quản lý vai trò', 'role'),
        getItem('Quản lý tài khoản', 'account'),
        getItem('Nhật ký người dùng', 'user-log')
    ]),
];

export default Items;