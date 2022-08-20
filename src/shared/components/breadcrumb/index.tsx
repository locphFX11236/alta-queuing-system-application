import { NavLink, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import PathItem from './items';

const BreadcrumbComponent: React.FC = () => {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter((_, i) => i !== 0);
    console.log('Breadcrumb.index ',location.pathname)
    
    const breadcrumbItems = pathSnippets.map((a) => {
        const url = '/' + a;
        return (
            <Breadcrumb.Item key={url}>
                <NavLink to={url}>{PathItem[url]}</NavLink>
            </Breadcrumb.Item>
        );
    });

    return (
        <Breadcrumb className="text breadcrumb" separator={<RightOutlined />}>
            {breadcrumbItems}
        </Breadcrumb>
    );
};

export default BreadcrumbComponent;