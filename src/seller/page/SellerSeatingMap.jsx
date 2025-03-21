import { useState } from "react";
import { Card, Button, Select, InputNumber, Form, Row, Col } from "antd";

const { Option } = Select;

// Seat type priority order
const seatPriorities = ["Recliner", "Executive", "Premium", "Normal"];

const TheatreSeatingMap = () => {
  const [seatingConfig, setSeatingConfig] = useState([]);

  // Function to get row letters starting from a given row
  const generateRowLetters = (startLetter, count) => {
    return Array.from({ length: count }, (_, i) =>
      String.fromCharCode(startLetter.charCodeAt(0) + i)
    );
  };

  // Function to get the last row letter from the seating configuration
  const getLastRowLetter = (sections, type) => {
    const higherPrioritySections = sections.filter(
      (section) =>
        seatPriorities.indexOf(section.type) < seatPriorities.indexOf(type)
    );
    const lastRow =
      higherPrioritySections.flatMap((s) => s.seat).pop()?.row || "@";
    return String.fromCharCode(lastRow.charCodeAt(0) + 1);
  };

  // Function to update seating configuration
  const updateSeatingOrder = (updatedConfig) => {
    let nextRowLetter = "@"; // Start before 'A'

    return seatPriorities
      .map((type) => {
        const section = updatedConfig.find((s) => s.type === type);
        if (!section) return null;

        // Assign new row letters sequentially
        section.seat = section.seat.map((seatRow, index) => ({
          ...seatRow,
          row: String.fromCharCode(nextRowLetter.charCodeAt(0) + index + 1),
        }));

        // Update next available row letter
        nextRowLetter =
          section.seat[section.seat.length - 1]?.row || nextRowLetter;
        return section;
      })
      .filter(Boolean);
  };

  // Function to add or update sections
  const addSection = (values) => {
    setSeatingConfig((prevConfig) => {
      const lastRowLetter = getLastRowLetter(prevConfig, values.type);
      const newRowLetters = generateRowLetters(lastRowLetter, values.rows);

      const newSeats = newRowLetters.map((rowLetter) => ({
        row: rowLetter,
        seating: Array(values.cols).fill(1),
      }));

      const updatedConfig = prevConfig.some((s) => s.type === values.type)
        ? prevConfig.map((section) =>
            section.type === values.type
              ? { ...section, seat: [...section.seat, ...newSeats] }
              : section
          )
        : [...prevConfig, { type: values.type, seat: newSeats }];

      return updateSeatingOrder(updatedConfig);
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
      <Row justify="space-between" className="mb-4">
        <h2>Theatre Seating Configuration</h2>
        <Button type="primary">Go Back</Button>
      </Row>

      <Form layout="inline" onFinish={addSection}>
        <Form.Item name="type" label="Seat Type" rules={[{ required: true }]}>
          <Select placeholder="Select Type">
            {seatPriorities.map((seatType) => (
              <Option key={seatType} value={seatType}>
                {seatType}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="rows" label="Rows" rules={[{ required: true }]}>
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item
          name="cols"
          label="Seats per Row"
          rules={[{ required: true }]}
        >
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Seats
          </Button>
        </Form.Item>
      </Form>

      <div className="theatre-seating">
        {seatingConfig.map(({ type, seat }) => (
          <div key={type} className="section mb-2 text-center">
            <Col span={24} className="mb-2 text-center">
              <h3>{type}</h3>
            </Col>
            {seat.map(({ row, seating }) => (
              <div key={row}>
                <Row gutter={[5, 5]}>
                  <Col className="theatre-row-label">
                    <b>{row}</b>
                  </Col>
                  {seating.map((value, index) => (
                    <Col key={index} className="mb-1">
                      <Button
                        className={
                          value === 1 ? "theatre-seat" : "theatre-noseat"
                        }
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

      <Col span={24} style={{ textAlign: "right", marginTop: "20px" }}>
        <Button
          type="primary"
          danger
          onClick={() => console.log(seatingConfig)}
        >
          Confirm your Theatre seating Map
        </Button>
      </Col>
    </Card>
  );
};

export default TheatreSeatingMap;
