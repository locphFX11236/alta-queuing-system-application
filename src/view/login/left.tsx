import { Layout } from 'antd';

import FormLogin from '../../shared/components/formLogin';
import Logo from '../../shared/components/logo';

const { Content } = Layout;

const LeftLogin = (): JSX.Element => (
    <Content className='left-login'>
        <div className='logo-login'><Logo /></div>
        <div className='form-login _center'><FormLogin /></div>
    </Content>
);

export default LeftLogin;