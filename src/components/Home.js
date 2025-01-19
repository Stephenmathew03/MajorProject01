import React, { Component } from "react";
import car from "./animations/car_rolling.json";
import Lottie from "lottie-react";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <div style={{ width: "50%" }}>
            <Lottie animationData={car} />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>HotelGenie</h1>
          <p>Making your hotel wishes come true.</p>
        </div>
      </div>
    );
  }
}
