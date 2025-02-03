import React from "react";
import { Card, Row, Col } from "antd";
import { MovieLists, IMG_BASE_URL } from "../request/Constant";

const { Meta } = Card;

const MovieList = () => {
  return (
    <div className="movie-list-container">
      <h2>🎬 Now Showing</h2>
      <Row gutter={[20, 20]} className="movie-list">
        {MovieLists.map((movie) => (
          <Col xs={24} sm={12} md={6} lg={6} xl={6} key={movie.id}>
            <Card
              hoverable
              cover={<img alt={movie.original_title} src={IMG_BASE_URL + movie.poster_path} style={{ height: "250px", objectFit: "cover" }} />}
            >
              <Meta title={movie.original_title} />
              <Meta description={movie.adult === true ? "Adult" : "All" } />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieList;
