import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Layout, Menu } from "antd";
import { logo } from "../../request/Constant";

const AdminSidebar = () => {
  const { Sider } = Layout;

  return (
    <Sider width={250} collapsible trigger={null} className="sidebar">
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        <div className="sidebar-logo d-flex align-items-center p-3">
            <img src={logo} alt="logo" />
          <Avatar style={{ verticalAlign: "middle" }} size="large">
            TB
          </Avatar>
        </div>
        <Menu.Item key="1">
          <Link to="/admin/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/admin/movie">Users</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/admin/movie">Bookings</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/admin/movie">Movies</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/admin/merchant">Merchant</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AdminSidebar;
