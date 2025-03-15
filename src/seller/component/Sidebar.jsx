import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { logo } from "../../request/Constant";

const AdminSidebar = () => {
  const { Sider } = Layout;

  return (
    <Sider
      width={250}
      collapsible
      trigger={null}
      className="sidebar"
      style={{
        background: "#fff",
        height: "100vh",
      }}
    >
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        <div className="sidebar-logo d-flex align-items-center p-3">
          <img src={logo} alt="logo" style={{ width: "150px" }} />
          {/* <Avatar style={{ verticalAlign: "middle" }} size="large">
            TB
          </Avatar> */}
        </div>
        <Menu.Item key="1">
          <Link to="/seller/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/seller/bookings">Bookings</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/seller/theatre">Theatres</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/seller/movies">My Movies</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AdminSidebar;
