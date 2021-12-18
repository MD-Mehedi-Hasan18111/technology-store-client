import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import Image1 from "../../product-images/Acer-1.jpg";
import Image2 from "../../product-images/Hp-1.jpg";
import Image3 from "../../product-images/Lenovo-3.jpg";

const Banner = () => {
  return (
    <div className="banner-area">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xs={12} md={12} lg={6}>
            <h1 style={{fontFamily: "sans-serif", fontWeight: "bold", color: "#2c3e50"}}>Technology Store!</h1>
                      <p style={{ fontSize: "18px", textAlign: "justify", fontFamily: "sans-serif", color: "#7f8c8d"}}>
              Paragraph on Technology: Technology is something that is gaining
              increasing importance in the world today. Wherever you look, there
              is technology. Even the device you are using to read this article
              uses technology. In simple words, technology is when we use
              science to apply it for practical purposes.
            </p>
            <button className="learnmoreBtn">Learn More</button>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Image1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Image2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Image3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
