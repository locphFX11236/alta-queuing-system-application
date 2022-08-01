import React from 'react';
import { Layout } from 'antd';

const { Sider } = Layout;

const SiderLayout = (): JSX.Element => (
    <Sider theme='light'>
        <div className='logo-alta'>Logo</div>
        <div className='menu1'>Menu1</div>
        <div className='menu2'>Menu2</div>
        <div className='logout-button'>Log out</div>
    </Sider>
);

export default SiderLayout;