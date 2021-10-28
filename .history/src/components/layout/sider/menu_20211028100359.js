/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-27 16:12:40
 * @LastEditors: dal
 * @LastEditTime: 2021-10-28 10:03:43
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
    this.state = {
      selectedKeys: ['1'],
      routes: []
    }
  }
  componentDidMount() {
    fetch('./mock/routes.json').then(res => {
      console.log(res)
      if (res.ok) {
        res.json().then(data => {
          console.log(data)
          this.setState({
            routes: data
          })
          console.log(this.state.routes)
        })
      }
    })
  }
  render(h) {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.selectedKeys}>
        {this.state.routes.map(v => {
          return (<Menu.Item key={v.key} icon={`<${v.icon} />`}>
            <Link to={v.path}>{v.title} </Link>
          </Menu.Item>)
        })}
      </Menu>

    )
  }
}
export default MENU