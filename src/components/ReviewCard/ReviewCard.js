import React from "react";
import { Col } from "react-bootstrap";
import "./ReviewCard.css";

const ReviewCard = (props) => {
  const { name, date, reviewMessage, rating } = props.review;

  return (
    <Col>
      <div className="review-card">
        <p
          style={{
            color: "#34495e",
            textAlign: "justify",
            fontFamily: "sans-serif",
          }}
        >
          {reviewMessage}
        </p>
        <div style={{ textAlign: "right" }}>
          <cite>
            <h5>-- {name}</h5>
            <small>{date}</small>
          </cite>
        </div>
      </div>
    </Col>
  );
};

export default ReviewCard;
