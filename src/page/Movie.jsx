import { Row, Col, Button } from "antd";
import React from "react";
const MovieView = () => {
  return (
    <div className="movie-list-container">
      <Row gutter={[20, 20]} className="movie-view">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <h1 className="main-title">Deva</h1>
          <p className="main-p">UA16+ • 2 hrs 37 mins</p>
          <p className="main-p">Action, Thriller</p>
          <p className="main-p">Hindi</p>
          <Button type="primary" size="large" shape="round" danger className="main-button">
            Watch Trailer
          </Button>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <img
            src="https://openui.fly.dev/openui/300x450.svg?text=Deva"
            alt="Deva Movie Poster"
            className="rounded-lg mb-4"
          />
        </Col>
        <div className="flex flex-col lg:flex-row p-6 bg-background">
          <div className="lg:w-2/3 lg:pl-6">
            <div className="mt-4">
              <span className="text-muted-foreground">Showlisting</span>
              <span className="text-muted-foreground mx-2">|</span>
              <span className="text-muted-foreground">Reviews & More</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-lg font-semibold">79%</span>
              <button className="ml-2 text-primary-foreground">❤️ Like</button>
              <button className="ml-2 text-destructive">👎 Dislike</button>
              <span className="ml-auto text-muted-foreground">Pune</span>
            </div>
            <div className="mt-6">
              <div className="flex space-x-2">
                <button className="bg-secondary text-secondary-foreground p-2 rounded">
                  Filter By: Hindi
                </button>
                <select className="border border-border rounded p-2">
                  <option>Format</option>
                  <option>2D</option>
                  <option>3D</option>
                </select>
                <select className="border border-border rounded p-2">
                  <option>Price</option>
                  <option>Low to High</option>
                  <option>High to Low</option>
                </select>
                <select className="border border-border rounded p-2">
                  <option>Showtime</option>
                </select>
                <label className="flex items-center text-muted-foreground">
                  {/* <input type="checkbox" className="mr-2" /> */}
                  Premium Seats
                </label>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Search Theatres</h2>
              <div className="border border-border rounded p-4 mt-2">
                <h3 className="font-bold">
                  INOX Megaplex Phoenix Mall of the Millennium, Wakad, Pune
                </h3>
                <p className="text-muted-foreground">
                  Get Directions | More Info
                </p>
                <p className="mt-2 text-muted-foreground">
                  Offers Cancellation | Food & Beverages
                </p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    09:30 AM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    10:30 AM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    12:45 PM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    01:15 PM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    01:45 PM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    03:00 PM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    04:00 PM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    04:30 PM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    05:00 PM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    06:15 PM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    07:15 PM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    07:45 PM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    08:15 PM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    09:30 PM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    10:30 PM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    11:00 PM
                  </button>
                  <button className="bg-muted text-muted-foreground p-2 rounded">
                    11:30 PM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default MovieView;
