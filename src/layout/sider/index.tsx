import { Layout } from 'antd';

import LogoComponent from '../../shared/components/logo';
import MenuComponent from '../../shared/components/menu';

const { Sider } = Layout;

const SiderLayout = (): JSX.Element => (
    <Sider theme='light' className='sider'>
        <div className='logo-sider'><LogoComponent /></div>
        <MenuComponent />
        <div className='logout-button'>Log out</div>
    </Sider>
);

export default SiderLayout;