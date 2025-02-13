import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Layout, Menu } from "antd";
import {
  BellOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header style={{ padding: 0 }}>
      <div className="logo" />
      <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
        {/* <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => toggleCollapsed()}
          style={iconStyle}
        /> */}
        <Menu.Item key="1"></Menu.Item>
        <Menu.Item key="2">
          {" "}
          <BellOutlined />{" "}
        </Menu.Item>
        <Menu.Item key="3">
          {" "}
          <UserOutlined />{" "}
        </Menu.Item>
        <Menu.Item key="4">
          {" "}
          <SettingOutlined />{" "}
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default MainHeader;
