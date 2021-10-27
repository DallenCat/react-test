/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-27 16:13:09
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 16:26:22
 */
import { Layout } from 'antd';
import { Component } from 'react';
import Menu from "./menu"
const { Sider } = Layout;
class SIDER extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { collapsed } = this.props
    return (
      <Sider collapsible collapsed={collapsed}>
        <Menu></Menu>
      </Sider>
    )
  }
}
export default SIDER