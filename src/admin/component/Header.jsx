import React from "react";
import { useDispatch } from "react-redux";
import { Button, Layout, Menu, notification } from "antd";
import { BellOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";

import { openNotificationWithIcon } from "../../request/Constant";
import { logout } from "../../store/slices/adminAuthSlice";

const { Header } = Layout;

const MainHeader = () => {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
    openNotificationWithIcon(api, "info", "logout", "John Doe");
  };

  return (
    <Header>
      {contextHolder}
      <div className="logo" />
      <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1"></Menu.Item>
        <Menu.Item key="2">
          <BellOutlined />
        </Menu.Item>
        <Menu.Item key="3">
          <UserOutlined />
        </Menu.Item>
        <Menu.Item key="4">
          <LogoutOutlined onClick={() => logoutUser()} />
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default MainHeader;
