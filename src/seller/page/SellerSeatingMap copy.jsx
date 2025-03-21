import { useState } from "react";
import { useParams } from "react-router-dom";

import { Card, Button, Image, Row, Select } from "antd";
import { CheckOutlined } from "@ant-design/icons";

import seatingImg from "../../assets/image/screen-icon.8dd7f126.svg";

const { Option } = Select;


const SellerSeatingMap = () => {
  const { id } = useParams();
  console.log("SellerSeatingMap", id);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatTypes, setSeatTypes] = useState({});

  const getSeatingArrangement = (theatreId) => {
    if (theatreId === 1) {
      return {
        left: { rows: 10, cols: 4 },
        middle: { rows: 8, cols: 10 },
        right: { rows: 10, cols: 4 },
      };
    } else if (theatreId === 2) {
      return {
        left: { rows: 8, cols: 10 },
        right: { rows: 10, cols: 4 },
      };
    }
    return {};
  };

  const seatingArrangement = getSeatingArrangement(id);

  const toggleSeatSelection = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleSeatTypeChange = (seat, type) => {
    setSeatTypes((prev) => ({ ...prev, [seat]: type }));
  };

  const renderSeats = (section, rows, cols) => (
    <div className={`section ${section}`}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="seat-row">
          {Array.from({ length: cols }).map((_, colIndex) => {
            const seatNumber = `${section}-${rowIndex + 1}-${colIndex + 1}`;
            return (
              <div key={seatNumber} className="seat-container">
                <Button
                  className={`seat ${selectedSeats.includes(seatNumber) ? "selected" : ""}`}
                  onClick={() => toggleSeatSelection(seatNumber)}
                >
                  {selectedSeats.includes(seatNumber) ? <CheckOutlined /> : seatNumber}
                </Button>
                <Select
                  className="seat-type"
                  defaultValue="normal"
                  onChange={(value) => handleSeatTypeChange(seatNumber, value)}
                >
                  <Option value="normal">Normal</Option>
                  <Option value="executive">Executive</Option>
                  <Option value="premium">Premium</Option>
                  <Option value="recliner">Recliner</Option>
                </Select>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );

  return (
    <Card>
      <div className="theatre-seating">
        {seatingArrangement.left && renderSeats("left", seatingArrangement.left.rows, seatingArrangement.left.cols)}
        {seatingArrangement.middle && renderSeats("middle", seatingArrangement.middle.rows, seatingArrangement.middle.cols)}
        {seatingArrangement.right && renderSeats("right", seatingArrangement.right.rows, seatingArrangement.right.cols)}
      </div>
      <Row justify="center">
        <Image src={seatingImg} alt="Theatre Seating" />
      </Row>
    </Card>
  );
};

export default SellerSeatingMap;
