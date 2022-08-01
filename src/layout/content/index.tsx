import { Layout } from 'antd';
import TopBar from '../topbar';

const { Content } = Layout;

const ContentLayout = ({children}: any): JSX.Element => (
    <Content>
        <TopBar />
        {children}
    </Content>
);

export default ContentLayout;