import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  Button,
  message,
  Table,
  Image,
  Row,
  Card,
  notification,
  Form,
  Modal,
  Input,
} from "antd";

import { getMyTheatre, addNewTheatre } from "../../request/requestSeller";
import { openNotificationWithIcon } from "../../request/Constant";

const SellerTheatre = () => {
  const [api, contextHolder] = notification.useNotification();
  const TOKEN = useSelector((state) => state.sellerauth.token);

  const [datalist, setDatalist] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const columns = [
    {
      title: "Theatre Id",
      dataIndex: "id",
      key: "id",
      width: 100,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Seating",
      dataIndex: "seating_map",
      key: "seating_map",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Vote Average",
      dataIndex: "capacity",
      key: "capacity",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      width: 300,
      render: (item) => {
        return (
          <>
            <Button type="primary">Bookings</Button>
            <Button style={{ marginInline: 10 }} type="primary" danger>
              Seating Map
            </Button>
          </>
        );
      },
    },
  ];

  const fetchTheatre = async () => {
    try {
      const response = await getMyTheatre(TOKEN);
      if (response.status === "1") {
        setDatalist(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      openNotificationWithIcon(api, "danger", "apiError", error.message);
    }
  };

  const handleSubmit = async (values) => {
    try {
      const response = await addNewTheatre(TOKEN, values);
      if (response.status === "1") {
        setIsModalOpen(false);
        openNotificationWithIcon(api, "danger", "apiError", response.message);
      } else {
        openNotificationWithIcon( api, "danger", "apiError", "failed to add theatre");
      }
    } catch (error) {
      openNotificationWithIcon(api, "danger", "apiError", error.message);
    }
    form.resetFields();
  };

  React.useEffect(() => {
    fetchTheatre();
  }, []);

  return (
    <Card>
      {contextHolder}
      <Row justify="space-between" className="mb-4">
        <h2 className="m-0">
          My Theatres {datalist.length > 0 && `(${datalist.length})`}
        </h2>
        <Button type="primary" onClick={showModal}>
          Add Theatre
        </Button>
      </Row>
      <Table
        dataSource={datalist}
        columns={columns}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} movies`,
        }}
        className="mb-8"
      />
      <Modal
        title="Add New Theatre"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter a name!" }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>
          <Form.Item
            name="seating_map"
            label="Seating Map"
            rules={[{ required: true, message: "Please enter seating map!" }]}
          >
            <Input placeholder="Enter seating map" />
          </Form.Item>
          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: true, message: "Please enter location!" }]}
          >
            <Input placeholder="Enter location" />
          </Form.Item>
          <Form.Item
            name="capacity"
            label="Capacity"
            rules={[{ required: true, message: "Please enter capacity!" }]}
          >
            <Input placeholder="Enter capacity" type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default SellerTheatre;
