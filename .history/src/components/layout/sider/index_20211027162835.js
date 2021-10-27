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
const { Sider } = Layout;
class SiderBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { collapsed } = this.props
    return (
      <Sider collapsible collapsed={collapsed}>

      </Sider>
    )
  }
}
export default SiderBar