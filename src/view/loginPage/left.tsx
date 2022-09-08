import { Layout, Space } from 'antd';

import FormLogin from '../../shared/components/form/login';
import Logo from '../../shared/components/logo';

const { Content } = Layout;

const LeftLogin = (): JSX.Element => (
    <Content className='left-login'>
        <Space className='logo-login'>
            <Logo />
        </Space>
        <FormLogin />
    </Content>
);

export default LeftLogin;