import { Layout, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppDispatch } from '../../core/featuresRedux/redux';
import { logout } from '../../core/featuresRedux/slice/userSlice';
import { LogOut } from '../../shared/assets/icon';
import LogoComponent from '../../shared/components/logo';
import MenuComponent from '../../shared/components/menu';

const { Sider } = Layout;

const SiderLayout = (): JSX.Element => {
    const Dispatch: AppDispatch = useDispatch()
    const HandleClick = () => {
        Dispatch(logout(''));
    }
    
    return (
        <Sider theme='light' className='sider'>
            <Link className='logo-sider' to='/text' replace={true}>
                <LogoComponent />
            </Link>
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