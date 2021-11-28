import React, { useState } from 'react';
import logo from '@/assets/logo.svg';
import routers from '@/router/index';
import { Link, useRoutes } from 'react-router-dom';
import './App.scss';
import { Layout, Menu } from 'antd';

// import { Layout, Menu, Breadcrumb } from 'antd';
// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// } from '@ant-design/icons';

// const { SubMenu } = Menu;

const App = () => {
  const Element = () => useRoutes(routers);
  const { Header, Content, Sider } = Layout;
  const [tab, setTab] = useState('1');
  const changeKey = (key: string) => {
    setTab(key);
  };

  return (
    <Layout className="App">
      <Header className="header">
        <img src={logo} className="icon" alt="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => {
            console.log(key);

            changeKey(key);
          }}
        >
          <Menu.Item key="1">
            <Link to="/">简介</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/components/button">组件</Link>
          </Menu.Item>
        </Menu>
      </Header>
      {tab === '1' ? (
        <Element />
      ) : (
        <Layout>
          <Sider width={240} className="site-layout-background">
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={['1']}
              // defaultOpenKeys={['sub1']}
              style={{ borderRight: 0 }}
            >
              <Menu.Item key="1">
                <Link to="/components/button">Button 按钮</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/components/card">Card 卡片</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/components/icon">Icon 图标</Link>
              </Menu.Item>
              {/* <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    icon={<NotificationOutlined />}
                    title="subnav 3"
                  >
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu> */}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }} className="container">
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                marginTop: 24,
                minHeight: '83vh',
              }}
            >
              <Element />
            </Content>
          </Layout>
        </Layout>
      )}
    </Layout>
  );
};

export default App;
