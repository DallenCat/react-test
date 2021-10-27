/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-27 16:12:40
 * @LastEditors: dal
 * @LastEditTime: 2021-10-27 16:59:51
 */
import { Menu } from "antd"
import { Component } from "react";
import { Link } from "react-router-dom"
import {
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
class MENU extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    selectedKeys: ['1']
  }
  render(h) {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.selectedKeys}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="dashboard">Dashboard </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="personal">Personal </Link>
        </Menu.Item>
      </Menu>

    )
  }
}
export default MENU