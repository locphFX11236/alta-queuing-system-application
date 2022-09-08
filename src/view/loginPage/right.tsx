import { Image, Layout } from 'antd';

const { Sider } = Layout;

const RightLogin = (): JSX.Element => (
    <Sider theme='light' className='right-login'>
        <div className='picture-1'>
            <Image preview={false} src="/assets/img/picture01.png" />
            <h2>Hệ Thống</h2>
            <h1>Quản lý xếp hàng</h1>
        </div>
        <div className='picture-2'>
            <Image preview={false} src="/assets/img/picture02.png" />
        </div>
    </Sider>
);

export default RightLogin;