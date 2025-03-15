import { useEffect, useState } from "react";
import { Card, Row, Col, Statistic, Table } from "antd";
import { UserOutlined, VideoCameraOutlined, ShopOutlined, CalendarOutlined } from "@ant-design/icons";

const SellerDashboard = () => {
  const [stats, setStats] = useState({ movies: 0, users: 0, sellers: 0, bookings: 0 });
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchStats();
    fetchBookings();
  }, []);

  const fetchStats = async () => {
    // Replace with API call
    setStats({ movies: 120, users: 500, sellers: 50, bookings: 200 });
  };

  const fetchBookings = async () => {
    // Replace with API call
    setBookings([
      { key: 1, name: "John Doe", theater:"Cinepolis, Phoenix Mall, Pune", movie: "Iron Man", date: "2025-02-10", price: "$12" },
      { key: 2, name: "Jane Smith", theater:"PVR, Mall Road, Pune", movie: "Batman Begins", date: "2025-02-12", price: "$10" },
      { key: 3, name: "Alice Brown", theater:"Cinepolis, Mumbai", movie: "Avatar", date: "2025-02-14", price: "$15" },
      { key: 4, name: "Bob Johnson", theater:"Cinepolis, Mumbai", movie: "Titanic", date: "2025-02-16", price: "$8" },
      { key: 5, name: "Charlie Lee", theater:"Cinepolis, Mumbai", movie: "Inception", date: "2025-02-18", price: "$13" },
    ]);
  };

  const columns = [
    { title: "Customer", dataIndex: "name", key: "name" },
    { title: "Movie", dataIndex: "movie", key: "movie" },
    { title: "Theater", dataIndex: "theater", key: "theater" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Price", dataIndex: "price", key: "price" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Row gutter={16}>
        <Col span={8}><Card><Statistic title="New Movies" value={stats.movies} prefix={<VideoCameraOutlined />} /></Card></Col>
        <Col span={8}><Card><Statistic title="Upcoming Movies" value={stats.movies} prefix={<VideoCameraOutlined />} /></Card></Col>
        <Col span={8}><Card><Statistic title="Bookings" value={stats.bookings} prefix={<CalendarOutlined />} /></Card></Col>
      </Row>
      <Card title="Top 5 Recent Bookings" style={{ marginTop: 20 }}>
        <Table dataSource={bookings} columns={columns} pagination={false} />
      </Card>
    </div>
  );
};

export default SellerDashboard;
