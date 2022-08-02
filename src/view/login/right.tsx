import { Layout } from 'antd';

const { Sider } = Layout;

const RightLogin = (): JSX.Element => (
    <Sider theme='light' className='right-login'>
        <div className='picture-1'>Picture 1</div>
        <div className='picture-2'>Picture 2</div>
    </Sider>
);

export default RightLogin;