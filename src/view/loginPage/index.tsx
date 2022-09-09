import { Layout } from 'antd';

import LeftLogin from "./left";
import RightLogin from "./right";

const Login = ({state}: any): JSX.Element => (
    <Layout className='login-layout'>
        <LeftLogin state={state} />
        <RightLogin state={state} />
    </Layout>
);

export default Login;