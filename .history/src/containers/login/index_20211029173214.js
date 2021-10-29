/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-29 15:24:14
 * @LastEditors: dal
 * @LastEditTime: 2021-10-29 17:31:52
 */
import { Component } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import "./login.scss"

export function LoginForm(props) {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 4, }}
      wrapperCol={{ span: 4, }}
      initialValues={{ remember: true, }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名', },]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码', },]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16, }}
      >
        <Checkbox>记住</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16, }} >
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );

}
//这边只有子组件内部的数据流向
//子组件与父组件怎么通信？
class LOGIN extends Component {
  render(h) {
    return (
      <div>
        <div className="bg">
          <div className="form">
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    )
  }
}
export default LOGIN