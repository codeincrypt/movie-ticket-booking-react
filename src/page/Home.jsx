import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Image, Button } from "antd";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: "95vh", padding: "20px", background: "#f7f9fc" }}
        gutter={[16, 16]} // Adds spacing between grid items
      >
        <h1>home</h1>
      </Row>
    </>
  );
};

export default Home;
