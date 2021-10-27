/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-27 09:54:26
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 16:06:54
 */
import React from "react"
import { Layout, Menu } from 'antd';
// 首先我们需要导入一些组件...
import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import "./index.css"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  // 组件挂载
  componentDidMount() {
    console.log(this.props);
  }
  render() {

    return (
      <Layout id="components-layout-demo-custom-trigger">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<VideoCameraOutlined />}>
              <NavLink to="dashboard">Dashboard </NavLink>
            </Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined />}>
              <NavLink to="personal">Personal </NavLink>
            </Menu.Item>
          </Menu>

        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children || "Welcome to your Inbox"}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;