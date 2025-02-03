import React from "react";
import { Card, Row, Col, Rate } from "antd";
import { MovieLists } from "../request/Constant";

const { Meta } = Card;

const MovieList = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🎬 Now Showing</h2>
      <Row gutter={[16, 16]}>
        {MovieLists.map((movie) => (
          <Col xs={12} sm={8} md={6} lg={6} xl={4} key={movie.id}>
            <Card
              hoverable
              cover={<img alt={movie.title} src={movie.poster} style={{ height: "250px", objectFit: "cover" }} />}
            >
              <Meta title={movie.title} />
              <Rate disabled allowHalf defaultValue={movie.rating} style={{ marginTop: "8px" }} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieList;
