import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Layout, Menu } from "antd";
import { BellOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";

import ThemeToggleButton from "../../../component/ThemeToggle";
import { toggleSidebar } from "../../../store/slices/sidebarSlice";

const { Header } = Layout;

const MainHeader = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.sidebarCollapse.isCollapsed);

  const toggleCollapsed = () => {
    dispatch(toggleSidebar());
  };

  const iconStyle = React.CSSProperties = {
    fontSize: "16px",
    width: 64,
    height: 64,
  }
  const iconStyles = React.CSSProperties = {
    fontSize: "16px"
  }

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
        <Menu.Item key="1"> 
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => toggleCollapsed()}
          style={iconStyle}
        />
        </Menu.Item>
        <Menu.Item key="2"> <BellOutlined style={iconStyles} /> </Menu.Item>
        <Menu.Item key="3"> <UserOutlined style={iconStyles} /> </Menu.Item>
        <Menu.Item key="4"> <SettingOutlined style={iconStyles} /> </Menu.Item>
        <Menu.Item key="5"> <ThemeToggleButton style={iconStyles} /> </Menu.Item>
      </Menu>
    </Header>
  );
};

export default MainHeader;
