import React, { Component } from "react";
import car from "./animations/car_rolling.json";
import Lottie from "lottie-react";
import Carousel from "react-bootstrap/Carousel";
import HotelImg1 from "./images/hotelimg1.jpg";
import HotelImg2 from "./images/hotelimg2.jpg";
import HotelImg3 from "./images/hotelimg3.jpeg";
import Famtrav from "./images/famtrav.jpg";
import Marriot from "./images/marriot.jpg";
import Taj from "./images/taj.jpg";
import Raddison from "./images/raddison.avif";
import Friends from "./images/friends.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class Home extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1200, // Set animation duration in milliseconds
    });
  }

  render() {
    return (
      <>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "72.5vh",
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

        <div
          style={{ margin: "20px", paddingTop: "40px" }}
          data-aos="zoom-in-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >
          <Carousel fade>
            <Carousel.Item>
              <img
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "75%",
                  height: "auto",
                }}
                src={HotelImg1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "75%",
                  height: "auto",
                }}
                src={HotelImg2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "75%",
                  height: "auto",
                }}
                src={HotelImg3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="container my-5">
          <div
            className="row align-items-center"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            {/* Image Section */}
            <div className="col-md-6" style={{ paddingTop: "40px" }}>
              <img
                src={Famtrav}
                alt="Descriptive Alt Text"
                className="rounded"
                style={{
                  width: "100%",
                  maxWidth: "700px",
                  height: "auto",
                }}
              />
            </div>

            {/* Text Section */}
            <div className="mainbody col-md-6">
              <h2 className="mb-3">Discover the Difference</h2>
              <p className="lead">
                Explore our hotel with world-class amenities and service
                designed to make your stay unforgettable. Your comfort is our
                priority!
              </p>
              <p>
                From luxurious rooms to exceptional dining experiences, enjoy
                everything tailored to meet your expectations.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div
            className="row align-items-center"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            {/* Text Section */}
            <div className="col-md-6">
              <h2 className="mb-3">Discover the Difference</h2>
              <p className="lead">
                Explore our hotel with world-class amenities and service
                designed to make your stay unforgettable. Your comfort is our
                priority!
              </p>
              <p>
                From luxurious rooms to exceptional dining experiences, enjoy
                everything tailored to meet your expectations.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>

            {/* Image Section */}
            <div className="col-md-6" style={{ paddingTop: "40px" }}>
              <img
                src={Friends}
                alt="Descriptive Alt Text"
                className="rounded"
                style={{
                  width: "100%",
                  maxWidth: "700px",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div style={{ paddingTop: "40px", paddingLeft: "100px" }}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src={Marriot}
                  alt="Descriptive Alt Text"
                />
                <Card.Body>
                  <Card.Title>Card Title 1</Card.Title>
                  <Card.Text>Some quick example text for card 1.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="col-md-4">
            <div style={{ paddingTop: "40px", paddingLeft: "50px" }}>
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={Taj} alt="Descriptive Alt Text" />
                <Card.Body>
                  <Card.Title>Card Title 2</Card.Title>
                  <Card.Text>Some quick example text for card 2.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="col-md-4">
            <div style={{ paddingTop: "40px" }}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src={Raddison}
                  alt="Descriptive Alt Text"
                />
                <Card.Body>
                  <Card.Title>Card Title 3</Card.Title>
                  <Card.Text>Some quick example text for card 3.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
}
