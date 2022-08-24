import { NavLink, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import './breadcrumb.css';
import PathItem from './items';

const BreadcrumbComponent: React.FC = () => {
    const locationPath = useLocation().pathname;
    const pathSnippets = locationPath.split('/').filter((_, i) => i !== 0);
    
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