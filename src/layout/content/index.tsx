import { Layout } from 'antd';
import TopBar from './topBar';

const { Content } = Layout;

const ContentLayout = ({children}: any): JSX.Element => (
    <Content className='content'>
        <TopBar />
        {children}
    </Content>
);

export default ContentLayout;