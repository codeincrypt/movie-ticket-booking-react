import React from "react";
import { Layout, Card, Row, Col, Statistic, Button } from "antd";
import OrderTable from "./OrderTable";

const { Content } = Layout;

const MovieList = () => {
  const orderStatistic = [
    { title: "Payment Refund", value: 285 },
    { title: "Order Cancel", value: 285 },
    { title: "Order Shipped", value: 285 },
    { title: "Order Delivering", value: 285 },
    { title: "Pending Review", value: 285 },
    { title: "Pending Payment", value: 285 },
    { title: "Delivered", value: 285 },
    { title: "In Progress", value: 285 },
  ];
  return (
    <Content>
      <Row gutter={[20, 20]}>
        {orderStatistic.map((item, index) => (
          <Col span={6} key={item.id}>
            <Card bordered={false} className="p-2">
              <Statistic title={item.title} value={item.value} />
            </Card>
          </Col>
        ))}
      </Row>
      <Row style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card
            bordered={false}
            title="All Order List"
            extra={<Button> Filter</Button>}
          >
            <OrderTable />
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default MovieList;
