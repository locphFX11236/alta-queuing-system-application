import { Image, Layout } from 'antd';

const { Sider } = Layout;

const Pic1 = () => (
    <div className='picture-1'>
        <Image preview={false} src="/assets/img/picture01.png" />
        <h2>Hệ Thống</h2>
        <h1>Quản lý xếp hàng</h1>
    </div>
);

const Pic2 = () => (
    <div className='picture-2'>
        <Image preview={false} src="/assets/img/picture02.png" />
    </div>
);

const RightLogin = ({state}: any): JSX.Element =>
<Sider theme='light' className='right-login'>{ state === 'login' ? <Pic1 /> : <Pic2 /> }</Sider>;

export default RightLogin;