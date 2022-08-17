import React, {useState} from 'react';
import { Layout, Menu, Tooltip } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useLocation, useNavigate, Route, Routes } from 'react-router-dom'

import 'antd/dist/antd.min.css';

const { Content, Sider } = Layout;

const Page1 = () => {
 return <h4> Page 1</h4>
}

const Page2 = () => {
  return <h4> Page 2</h4>
}


const App = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  let navigate = useNavigate();
  const selectedKey = useLocation().pathname

  const highlight = () => {
    if (selectedKey === '/'){
      return ['1']
    } else if (selectedKey === '/page2'){
      return ['2']
    }  
  }

 

  return (
    <Layout className="site-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" style={{color: 'white'}}> 
            <Tooltip placement="right" arrowPointAtCenter  title="Expand / Shrink Menu" >
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggleCollapsed,
                })}
            </Tooltip>
          </div>
          <Menu
            mode="inline"
            theme="light"
            defaultSelectedKeys={['1']}
            selectedKeys={highlight()}
            style={{ height: '100%', borderRight:0 }}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: "Page 1",
                onClick: () => { navigate('/')}
              },
              {
                key: '2',
                icon: <TeamOutlined />,
                label: "Page 2",
                onClick: () => { navigate('/page2')}
              }

            ]}
            />
        </Sider>
        <Content>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </Content>
    </Layout>
  )
}

export default App;