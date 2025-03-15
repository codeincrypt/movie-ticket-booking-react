import { useState } from "react";
import { message, Card, Col, Row } from "antd";
import Search from "antd/es/input/Search";

import { addMovies, getSearchedMovies } from "../../request/requestAdmin";
import SearchList from "../component/SearchList";

const AddMovies = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [datalist, setDatalist] = useState([]);

  function updateMovieJson(movie) {
    return {
      ...movie,
      movie_id: movie.id,
      genre_ids: movie.genre_ids.join(","),
      backdrop_path: movie.backdrop_path ? movie.backdrop_path : "",
      poster_path: movie.poster_path ? movie.poster_path : "",
    };
}
  const handleSubmit = async (values) => {
    // add movie to API and display success message
    const response = await addMovies(updateMovieJson(values));
    if (response.status === "1") {
      return messageApi.success("Movie added successfully!");
    } else {
      return messageApi.error("Failed to add movie");
    }
  };

  const searchMovies = async (query) => {
    const response = await getSearchedMovies(query);
    setDatalist(response.results);
  };

  return (
    <Card>
      {contextHolder}
      <Row justify="space-between" className="">
        <h2 className="text-gray-900 m-0">Add New Movie</h2>
      </Row>
      <Row gutter={16} justify="center">
        <Col span={16}>
          <h1>Search movie here</h1>
          <Col>
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={(value) => searchMovies(value)}
            />
          </Col>
          <Col className="mt-4">
          {Array.isArray(datalist) && datalist.length > 0 ? (
            <SearchList datalist={datalist} handleSubmit={handleSubmit} />
          ): <p>No movies found</p> }
          </Col>
        </Col>
      </Row>
    </Card>
  );
};

export default AddMovies;
