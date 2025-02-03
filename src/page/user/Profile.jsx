import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Image, Button } from "antd";

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <>
      <Row
        justify="center"
        align="middle"
        gutter={[16, 16]} // Adds spacing between grid items
      >
        <h1>user profile</h1>
      </Row>
    </>
  );
};

export default UserProfile;
