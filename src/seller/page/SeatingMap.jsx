import { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import "antd/dist/reset.css";
import { CheckOutlined } from "@ant-design/icons";
import "./SeatingMap.css";

const SeatingMapForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = 5;
  const cols = 8;
  const totalSeats = rows * cols;
  const seatNumbers = Array.from({ length: totalSeats }, (_, i) => i + 1);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const toggleSeatSelection = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleSubmit = (values) => {
    console.log("Form values:", values);
    console.log("Selected Seats:", selectedSeats);
    setIsModalOpen(false);
    form.resetFields();
    setSelectedSeats([]);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Seating Map
      </Button>
      <Modal title="Seating Map" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter a name!" }]}> 
            <Input placeholder="Enter name" />
          </Form.Item>
          <Form.Item name="location" label="Location" rules={[{ required: true, message: "Please enter location!" }]}> 
            <Input placeholder="Enter location" />
          </Form.Item>
          <Form.Item name="capacity" label="Capacity" rules={[{ required: true, message: "Please enter capacity!" }]}> 
            <Input placeholder="Enter capacity" type="number" />
          </Form.Item>
          <div className="seating-container">
            {seatNumbers.map((seat) => (
              <Button
                key={seat}
                className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
                onClick={() => toggleSeatSelection(seat)}
              >
                {selectedSeats.includes(seat) ? <CheckOutlined /> : seat}
              </Button>
            ))}
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default SeatingMapForm;