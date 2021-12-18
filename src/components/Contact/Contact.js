import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tavl53z', 'template_n12thwj', form.current, 'user_iv16rQ1tPnRESMdNxg2gu')
      .then((result) => {
          if (result.text) {
            swal("Email Send", "", "success");
          }
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="my-4">
      <h2
        style={{
          color: "#2c3e50",
          textAlign: "center",
          fontFamily: "sans-serif",
          fontWeight: "bolder",
        }}
      >
        GET IN TOUCH
      </h2>
      <Container>
        <Row className="pt-3">
          <Col xs={12} md={12} lg={4} className="contact-info">
            <h6>Email</h6>
            <p>
              <i className="far fa-envelope"></i> techstore12@gmail.com
            </p>
            <h6>Phone</h6>
            <p>
              <i className="fas fa-phone-alt"></i> +6234534235
            </p>
            <h6>Location</h6>
            <p>
              <i className="fas fa-store"></i> ABC Bank Road, Line - 01, Chittagong,
              Bangladesh
            </p>
            <h6>Social Links</h6>
            <div className="social-icons">
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </Col>
          <Col xs={12} md={12} lg={8} className="mt-2">
            <p style={{color: "#7f8c8d"}}>If you have any suggestion of feedback for us, please let me know and fill up the form below, we will reply you soon.</p>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <input className="form-control" type="text" placeholder="Your Name*" name="name" required /><br />
              <input className="form-control" type="email" placeholder="Your Email*" name="email" required /><br />
              <input className="form-control" type="text" placeholder="Subject*" name="subject" required /><br />
              <textarea className="form-control" type="text" placeholder="Your Message*" name="message" required />
              <button className="sendMessageBtn mt-3" type="submit">Send Message</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
