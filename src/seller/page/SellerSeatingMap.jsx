import { useState } from "react";
import { Card, Button, Select, InputNumber, Form, Row, Col } from "antd";

const { Option } = Select;

const TheatreSeatingMap = () => {
  const [seatingConfig, setSeatingConfig] = useState([]);

  // Function to get next available row letter
  const getNextRowLetter = (existingRows, count) => {
    const lastRow = existingRows.length
      ? existingRows[existingRows.length - 1].row
      : "@";
    return Array.from({ length: count }, (_, i) =>
      String.fromCharCode(lastRow.charCodeAt(0) + i + 1)
    );
  };

  // Function to add a new section or append rows to existing section
  const addSection = (values) => {
    setSeatingConfig((prevConfig) => {
      const existingType = prevConfig.find((section) => section.type === values.type);
      if (existingType) {
        // Append rows to the existing section
        const newRowLetters = getNextRowLetter(existingType.seat, values.rows);
        const newSeats = newRowLetters.map((rowLetter) => ({
          row: rowLetter,
          seating: Array(values.cols).fill(1),
        }));
        return prevConfig.map((section) =>
          section.type === values.type
            ? { ...section, seat: [...section.seat, ...newSeats] }
            : section
        );
      } else {
        // Create a new section with new rows
        const allRows = prevConfig.flatMap((section) => section.seat);
        const newRowLetters = getNextRowLetter(allRows, values.rows);
        const newSeats = newRowLetters.map((rowLetter) => ({
          row: rowLetter,
          seating: Array(values.cols).fill(1),
        }));
        return [...prevConfig, { type: values.type, seat: newSeats }];
      }
    });
  };

  // Toggle seat function
  const toggleSeat = (type, row, seatIndex) => {
    setSeatingConfig((prevConfig) =>
      prevConfig.map((section) =>
        section.type === type
          ? {
              ...section,
              seat: section.seat.map((seatRow) =>
                seatRow.row === row
                  ? {
                      ...seatRow,
                      seating: seatRow.seating.map((seat, index) =>
                        index === seatIndex ? (seat === 1 ? 0 : 1) : seat
                      ),
                    }
                  : seatRow
              ),
            }
          : section
      )
    );
  };

  return (
    <Card>
      <h2>Theatre Seating Configuration</h2>
      <Form layout="inline" onFinish={addSection}>
        <Form.Item name="type" label="Seat Type" rules={[{ required: true }]}>
          <Select placeholder="Select Type">
            <Option value="Recliner">Recliner</Option>
            <Option value="Executive">Executive</Option>
            <Option value="Premium">Premium</Option>
            <Option value="Normal">Normal</Option>
          </Select>
        </Form.Item>
        <Form.Item name="rows" label="Rows" rules={[{ required: true }]}>
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item name="cols" label="Seats per Row" rules={[{ required: true }]}>
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Section
          </Button>
        </Form.Item>
      </Form>

      <div className="theatre-seating">
        {seatingConfig.map(({ type, seat }) => (
          <div key={type} className="section">
            <h3>{type}</h3>
            {seat.map(({ row, seating }) => (
              <div key={row}>
                <h4>Row {row}</h4>
                <Row gutter={[5, 5]}>
                  {seating.map((value, index) => (
                    <Col key={index}>
                      <Button
                        type={value === 1 ? "primary" : "default"}
                        danger={value === 0}
                        onClick={() => toggleSeat(type, row, index)}
                      >
                        {value === 1 ? index + 1 : "X"}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Button onClick={console.log(seatingConfig)}>Submit</Button>
    </Card>
  );
};

export default TheatreSeatingMap;
