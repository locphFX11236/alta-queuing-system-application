import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../features/hookRedux';
import { logout } from '../../features/userSlice';
import { LogOut } from '../../shared/assets/icon';
import LogoComponent from '../../shared/components/logo';
import MenuComponent from '../../shared/components/menu';

const { Sider } = Layout;

const SiderLayout = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const HandleClick = () => {
        dispatch(logout(''));
    }
    
    return (
        <Sider theme='light' className='sider'>
            <div className='logo-sider'><LogoComponent /></div>
            <MenuComponent />
            <Link
                to='/login'
                replace={true}
            >
                <Button
                    className='logout-button _center'
                    icon={ <LogOut /> }
                    onClick={() => HandleClick()}
                >
                    Đăng xuất
                </Button>
            </Link>
        </Sider>
    );
};

export default SiderLayout;