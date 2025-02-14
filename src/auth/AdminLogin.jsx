import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Row, Col, Card, notification } from "antd";

import { authenticateAdmin } from "../database/admin-request";
import {login } from "../store/slices/adminAuthSlice";
import { openNotificationWithIcon } from "../request/Constant";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginLoading, setloginLoading] = React.useState(false);
  const [api, contextHolder] = notification.useNotification();

  const handleLogin = async (values) => {
    setloginLoading(true)
    const response = await authenticateAdmin(values)
    console.log("handleLogin", response);
    if(response.status === 0) {
      openNotificationWithIcon(api, "error", "invalidLogin");
      setloginLoading(false)
      return
    }
    openNotificationWithIcon(api, "success", "login", response.name);
    dispatch(login(response));
    setTimeout(() => {
      navigate("/admin");
    }, 2000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row justify="center" align="middle" style={{ height: "95vh" }}>
      {contextHolder}
      <Col span={8}>
        <Card>
          <h2 align="center">Admin Login</h2>
          <Form
            name="login"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={handleLogin}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item className="mb-0">
              <Button type="primary" size="large" htmlType="submit" block loading={loginLoading}>Login</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default AdminLogin;
