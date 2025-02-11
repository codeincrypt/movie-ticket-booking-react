import React from "react";
import { Card, Row, Col, Button } from "antd";
import { MovieLists, IMG_BASE_URL } from "../request/Constant";
import { Link } from "react-router-dom";

const getLanguage = (language) => {
  const languageMap = {
    en: "English",
    te: "Telugu",
    fr: "French",
    hi: "Hindi",
    no: "Norwegian",
  };
  return languageMap[language] || language;
};

const MovieList = () => {
  return (
    <div className="movie-list-container">
      <h2>🎬 Now Showing</h2>
      <Row gutter={[20, 20]} className="movie-list">
        {MovieLists.map((movie) => (
          <Col xs={24} sm={12} md={6} lg={6} xl={6} key={movie.id}>
            <Link to={`/movies/${movie.id}`} className="movie-card">
              <Card
                cover={
                  <img
                    alt={movie.original_title}
                    src={IMG_BASE_URL + movie.poster_path}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                }
              >
                <h3 className="text-xl mt-0 mb-0">{movie.original_title}</h3>
                <p className="text-sm text-muted-foreground">UA16+ ⠂{getLanguage(movie.original_language)}</p>
                {/* <div className="flex justify-between items-center">
                <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  New Release
                </span>
              </div> */}
              </Card>
              <div className="ant-card-footer card-btn-margin">
              <Button size="large" block>Book Ticket</Button>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieList;
