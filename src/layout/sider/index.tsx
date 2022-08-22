import { Layout, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../features/slice';

import LogoComponent from '../../shared/components/logo';
import MenuComponent from '../../shared/components/menu';

const { Sider } = Layout;

const HandleClick = (e: any) => {
    const dispatch = useDispatch();
    e.preventDefault();
    dispatch(logout());
}

const SiderLayout = (): JSX.Element => (
    <Sider theme='light' className='sider'>
        <div className='logo-sider'><LogoComponent /></div>
        <MenuComponent />
        <Link
            className='logout-button _center'
            to='/login'
            replace={true}
        >
            <Button type='primary' onClick={(e) => HandleClick(e)}>Log out</Button>
        </Link>
    </Sider>
);

export default SiderLayout;