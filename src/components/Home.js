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
            height: "75vh",
          }}
        >
          <div style={{ width: "50%" }}>
            <Lottie animationData={car} />
          </div>
        </div>
        <div style={{ textAlign: "center" }} className="mainbody">
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bolder" }}>
            HotelGenie
          </h1>
          <p style={{ fontSize: "2rem" }}>
            Making your hotel wishes come true.
          </p>
        </div>
      </div>
    );
  }
}
