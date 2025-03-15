import { useDispatch, useSelector } from "react-redux";
import { Avatar, Col, Layout, Menu } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

import { logout } from "../../store/slices/sellerAuthSlice";
import { Link } from "react-router-dom";

const { Header } = Layout;

const MainHeader = () => {
  const profile = useSelector((state) => state.sellerauth.profile);
  const dispatch = useDispatch();
  const logoutUser = () => {
    setTimeout(dispatch(logout()), 1000);
  };

  return (
    <Header style={{ position: "sticky", zIndex: 1, width: "100%" }}>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ float: "right" }}
      >
        <Menu.Item key="1">
          {profile && (
            <Col>
              <Link className="menu-item" to="/seller/profile">
                <Avatar src={profile?.picture} /> {profile?.name}
              </Link>
            </Col>
          )}
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
