import { Layout } from 'antd';

import LeftLogin from "./left";
import RightLogin from "./right";

const Login = (): JSX.Element => (
    <Layout className='login-layout'>
        <LeftLogin />
        <RightLogin />
    </Layout>
);

export default Login;