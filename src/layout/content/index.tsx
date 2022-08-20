import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import TopBar from './topBar';

const { Content } = Layout;

const ContentLayout = (): JSX.Element => (
    <Content className='content'>
        <TopBar />
        <Outlet />
    </Content>
);

export default ContentLayout;