import React, { useState } from "react";
import { Button, message, Table, Image, Row, Card } from "antd";

import { getMyMovies } from "../../request/requestSeller";
import { useSelector } from "react-redux";

const SellerMovies = () => {
  const TOKEN = useSelector((state) => state.sellerauth.token);
  const [movies, setMovies] = useState([]);

  const columns = [
    {
      title: "Poster",
      dataIndex: "poster_path",
      key: "poster",
      width: 100,
      render: (poster) => <Image width={50} src={poster} alt="poster" />,
    },
    {
      title: "Movie Id",
      dataIndex: "movie_id",
      key: "movie_id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Popularity",
      dataIndex: "popularity",
      key: "popularity",
    },
    {
      title: "Release Date",
      dataIndex: "release_date",
      key: "release_date",
    },
    {
      title: "Vote Average",
      dataIndex: "vote_average",
      key: "vote_average",
    },
    {
      title: "Action",
      dataIndex: "movie_id",
      key: "movie_id",
      width: 200,
      render: (item) => {
        return (
          <>
            <Button type="primary">View</Button>
            <Button type="primary" danger>
              {item}
            </Button>
          </>
        );
      },
    },
  ];

  const fetchMovies = async () => {
    try {
      const response = await getMyMovies("", TOKEN);
      print("fetchMovies", response)
      if (response.status === "1") {
        setMovies(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error("Failed to fetch movies", error);
    }
  };

  React.useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Card>
      <Row justify="space-between" className="mb-4">
        <h2 className="m-0">
          Movie List {movies.length > 0 && `(${movies.length})`}
        </h2>
        <Button type="primary">Add New Movie</Button>
      </Row>
      <Table
        dataSource={movies}
        columns={columns}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} movies`,
        }}
        className="mb-8"
      />
    </Card>
  );
};

export default SellerMovies;
