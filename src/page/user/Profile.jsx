import React from "react";
import { useSelector } from "react-redux";
import { Typography, Card, Col, Row, List } from "antd";
import { PhoneOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const UserProfile = () => {
  const userProfile = useSelector((state) => state.auth.user);

  const data = [
    "Profile",
    "Settings",
    "Change Password",
    "Billing Address",
    "Favorite",
  ];
  return (
    <div>
      <Card>
        <Row>
          <Col span={6}>
            <List
              bordered
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
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
