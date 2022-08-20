import { Layout } from 'antd';

import ContentLayout from './content';
import SiderLayout from './sider';

const IndexLayout = (): JSX.Element => (
    <Layout className='main'>
        <SiderLayout />
        <ContentLayout />
    </Layout>
);

export default IndexLayout;