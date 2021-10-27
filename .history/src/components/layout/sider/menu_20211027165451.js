/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-27 16:12:40
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 16:54:51
 */
import { Menu } from "antd"
import { Component, createRef } from "react";
import { Link } from "react-router-dom"
class MENU extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKeys: createRef(['1'])
    }
  }
  render(h) {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.selectedKeys}>
        <Menu.Item key="1">
          <Link to="dashboard">Dashboard </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="personal">Personal </Link>
        </Menu.Item>
      </Menu>

    )
  }
}
export default MENU