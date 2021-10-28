/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-27 16:12:40
 * @LastEditors: dal
 * @LastEditTime: 2021-10-28 10:12:30
 */
import { Menu } from "antd"
import { Component, createElement } from "react";
import { Link } from "react-router-dom"
import * as Icon from '@ant-design/icons'
import {
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
class MENU extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKeys: ['1'],
      routes: []
    }
  }
  /**
   *创建icon
  */
  icon(name) {
    return createElement(Icon[name]);
  }
  componentDidMount() {
    fetch('./mock/routes.json').then(res => {
      if (res.ok) {
        res.json().then(data => {
          this.setState({
            routes: data
          })
        })
      }
    })
  }
  render(h) {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.selectedKeys}>
        {this.state.routes.map(v => {
          return (<Menu.Item key={v.key} icon={this.icon(v.icon)}>
            <Link to={v.path}>{v.title} </Link>
          </Menu.Item>)
        })}
      </Menu>

    )
  }
}
export default MENU