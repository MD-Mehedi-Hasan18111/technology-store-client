import React from "react";
import { Col } from "react-bootstrap";
import "./ReviewCard.css";
import avatar from '../../images/avatar.png';

const ReviewCard = (props) => {
  const { name, date, reviewMessage, rating, image } = props.review;

  return (
    <Col>
      <div className="review-card">
        <div className="review-img">
          {props.review?.image ? <img
            style={{ height: "150px", width: "150px", borderRadius: "50%" }}
            src={image}
            alt=""
          /> : <img
          style={{ height: "150px", width: "150px", borderRadius: "50%" }}
          src={avatar}
          alt=""
        />}
        </div>
        <p
          style={{
            textAlign: "justify",
            fontFamily: "sans-serif"
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
