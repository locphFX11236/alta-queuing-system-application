import { Layout, Space } from 'antd';

import Logo from '../../shared/components/logo';
import FormLogin from '../../shared/components/form/login';
import FormForget from '../../shared/components/form/forgetPass';

const { Content } = Layout;

const LeftLogin = ({state}: any): JSX.Element => (
    <Content className='left-login'>
        <Space className='logo-login'>
            <Logo />
        </Space>
        { state === 'login' ? <FormLogin /> : <FormForget /> }
    </Content>
);

export default LeftLogin;