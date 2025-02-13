import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";

const AdminLogin = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const dispatch = useDispatch();

  const handleLogin = (values) => {
    console.log(values);
    // navigate("/");
    // dispatch(login(username));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f0f2f5",
        }}
      >
        <div
          style={{
            maxWidth: "400px",
            width: "100%",
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Login</h2>
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
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item className="mb-0">
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
