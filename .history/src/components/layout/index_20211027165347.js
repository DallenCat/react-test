/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-27 09:54:26
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 16:53:47
 */
import React from "react"
import { Layout } from 'antd';
// 首先我们需要导入一些组件...
import "./index.css"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import Sider from "./sider"
const { Header, Content } = Layout;

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
        <Sider collapsed={this.state.collapsed}></Sider>
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