import React from "react";
import { Card, Row, Col, Button } from "antd";
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
              cover={
                <img
                  alt={movie.original_title}
                  src={IMG_BASE_URL + movie.poster_path}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              }
            >
              <div className="flex justify-between items-center">
                <span className="text-red-600 font-bold">{movie.vote_average} ❤️</span>
                <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  New Release
                </span>
              </div>
              <h2 className="text-xl font-bold mt-2">{movie.original_title}</h2>
              <p className="text-sm text-muted-foreground">UA16+ | {movie.original_language}</p>
              <Button block>Book Ticket</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieList;
