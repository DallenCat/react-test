/*
 * @Descripttion:
 * @version:
 * @Author: dal
 * @Date: 2021-10-29 15:24:14
 * @LastEditors: dal
 * @LastEditTime: 2021-10-29 17:09:27
 */
import { Component } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import bgImg from "@/assets/images/login-background.jpg"

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
      labelCol={{ span: 8, }}
      wrapperCol={{ span: 16, }}
      initialValues={{ remember: true, }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );

}

class LOGIN extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {}
    }
  }
  render(h) {

    return (
      <div>
        <div className="bg">
          <img alt="bg-img" className="bg-img" src={bgImg}></img>
          <LoginForm form={this.state.form}></LoginForm>
        </div>
      </div>
    )
  }
}
export default LOGIN