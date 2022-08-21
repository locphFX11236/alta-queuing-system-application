import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';

import LogoComponent from '../../shared/components/logo';
import MenuComponent from '../../shared/components/menu';

const { Sider } = Layout;

const SiderLayout = (): JSX.Element => (
    <Sider theme='light' className='sider'>
        <div className='logo-sider'><LogoComponent /></div>
        <MenuComponent />
        <Link
            className='logout-button _center'
            to='/login'
            replace={true}
        >
            <Button type='primary'>Log out</Button>
        </Link>
    </Sider>
);

export default SiderLayout;