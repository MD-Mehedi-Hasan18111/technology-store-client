import React, {useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Contact from "../Contact/Contact";
import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Navigation />
      <Container>
        <Row className="d-flex align-items-center py-5">
          <Col xs={12} md={12} lg={6} data-aos="fade-right" data-aos-duration="1000">
            <img
              style={{ width: "100%", borderRadius: "20px"}}
              src="https://i.pinimg.com/originals/24/04/c9/2404c91146bc7458c300695e8c0bd19e.jpg"
              alt=""
            />
          </Col>
          <Col xs={12} md={12} lg={6} data-aos="fade-left" data-aos-duration="1000">
            <h2 style={{color: "#2c3e50"}}>ABOUT US</h2>
            <p
              style={{
                color: "#34495e",
                fontWeight: "400",
                textAlign: "justify",
              }}
            >
              Technology Store is the Largest Chain of Computer Store in
              Bangladesh. Buy your Laptop, computer & accessories from our
              computer shop or website. Buy laptop at Lowest price guaranteed in
              Bangladesh. All popular Laptop brands including Macbook, HP, Asus,
              Dell, Lenovo, MSI, and Xiaomi are available. Technology Store is
              the Largest Chain of Computer Store in Bangladesh. Buy your
              Laptop, computer & accessories from our computer shop or website.
              Buy laptop at Lowest price guaranteed in Bangladesh. All popular
              Laptop brands including Macbook, HP, Asus, Dell, Lenovo, MSI, and
              Xiaomi are available. Technology Store is the Largest Chain of
              Computer Store in Bangladesh. Buy your Laptop, computer &
              accessories from our computer shop or website. Buy laptop at
              Lowest price guaranteed in Bangladesh. All popular Laptop brands
              including Macbook, HP, Asus, Dell, Lenovo, MSI, and Xiaomi are
              available.
            </p>
          </Col>
        </Row>
          </Container>
          <Contact />
          <Footer />
    </div>
  );
};

export default About;
