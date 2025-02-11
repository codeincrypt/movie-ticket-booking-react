import React from "react";
import { useSelector } from "react-redux";
import { Typography, Card, Col, Row, List } from "antd";
import { PhoneOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const SidebarMenu = () => {
  return (
    <List bordered>
      <List.Item><Link to="/profile">Profile</Link></List.Item>
      <List.Item><Link to="/billing-address">My Bookings</Link></List.Item>
      <List.Item><Link to="/favorites">Favorite Movies</Link></List.Item>
      <List.Item><Link to="/change-password">Change Password</Link></List.Item>
      <List.Item><Link to="/settings">Settings</Link></List.Item>
    </List>
  );
};

const UserProfile = () => {
  const userProfile = useSelector((state) => state.auth.user);

  return (
    <div>
      <Card>
        <Row>
          <Col span={6}>
            <SidebarMenu />
          </Col>
          <Col span={18}>
            <Card>
              <Row>
                <Col span={6}>
                  <img
                    style={{ width: 150, borderRadius: "50%" }}
                    alt="User profile"
                    src={userProfile.picture}
                  />
                </Col>
                <Col span={18}>
                  <Title level={2}>{userProfile.name}</Title>

                  <div style={{ marginBottom: "10px" }}>
                    <MailOutlined style={{ marginRight: "8px" }} />
                    <Text>{userProfile.email}</Text>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <PhoneOutlined style={{ marginRight: "8px" }} />
                    <Text>
                      {userProfile?.phone === null ? "N/A" : userProfile?.phone}
                    </Text>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <HomeOutlined style={{ marginRight: "8px" }} />
                    <Text>{userProfile?.address}</Text>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default UserProfile;
