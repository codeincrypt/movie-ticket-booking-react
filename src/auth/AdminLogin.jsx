import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Row, Col, Card, notification } from "antd";

import { authenticateAdmin } from "../request/admin/authenticate";
import { login } from "../store/slices/adminAuthSlice";
import { openNotificationWithIcon } from "../request/Constant";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginLoading, setLoginLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const handleLogin = async (values) => {
    setLoginLoading(true);
    const response = await authenticateAdmin(values);
    if (response.status === 0) {
      openNotificationWithIcon(api, "error", "invalidLogin");
      setLoginLoading(false);
      return;
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
    <Col span={24}>
      <Row justify="center" align="middle" style={{ height: "95vh" }}>
        {contextHolder}
        <Col span={8}>
          <Card>
            <h2>Admin Login</h2>
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
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  block
                  loading={loginLoading}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default AdminLogin;
