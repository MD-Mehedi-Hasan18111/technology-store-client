import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-5">
      <h2
        style={{
          color: "#2c3e50",
          textAlign: "center",
          fontFamily: "sans-serif",
          fontWeight: "bolder",
        }}
      >
        TESTIMONIAL
      </h2>
      <Container>
        {reviews.length > 0 ? (
          <Row xs={1} md={2} lg={3} className="mt-3 g-4">
            {reviews?.map((review) => (
              <ReviewCard review={review} />
            ))}
          </Row>
        ) : (
          <div className="text-center text-primary mt-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Reviews;
