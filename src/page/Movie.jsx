import React from "react";
import { Card, Row, Col } from "antd";
import { MovieLists, IMG_BASE_URL } from "../request/Constant";

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
              {/* <Meta title={movie.original_title} />
              <Meta description={movie.adult === true ? "Adult" : "All" } /> */}
              <div className="p-4">
    <div className="flex justify-between items-center">
      <span className="text-red-600 font-bold">79% ❤️</span>
      <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">New Release</span>
    </div>
    <h2 className="text-xl font-bold mt-2">Deva</h2>
    <p className="text-sm text-muted-foreground">UA16+ | Hindi</p>
    <button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded">Book Ticket</button>
  </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieList;
