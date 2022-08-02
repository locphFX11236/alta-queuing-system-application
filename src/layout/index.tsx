import { Layout } from 'antd';

import ContentLayout from './content';
import SiderLayout from './sider';

const IndexLayout = ({content}: any): JSX.Element => (
    <Layout className='main'>
        <SiderLayout />
        <ContentLayout children={content}/>
    </Layout>
);

export default IndexLayout;