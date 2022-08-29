import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import SiderLayout from './sider';
import TopBar from './topBar';

const { Content } = Layout;

const IndexLayout = (): JSX.Element => (
    <Layout className='main'>
        <SiderLayout />
        <Content className='content'>
            <TopBar />
            <Outlet />
        </Content>
    </Layout>
);

export default IndexLayout;