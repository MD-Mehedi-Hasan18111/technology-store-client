import React, { useState } from "react";
import "./CustomerReview.css";
import { Container } from "react-bootstrap";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const CustomerReivew = () => {
  const [userReview, setUserReivew] = useState({});
  const { user } = useAuth();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...userReview };
    newUser[field] = value;
    newUser.name = user?.displayName;
    newUser.image = user?.photoURL;
    setUserReivew(newUser);
  };

  const currentDate = new Date();
  const dd = currentDate.getDate();
  const mm = currentDate.getMonth() + 1;
  const yy = currentDate.getFullYear();
  const todayDate = `${dd}/${mm}/${yy}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    userReview.date = todayDate;
    fetch("https://afternoon-anchorage-61727.herokuapp.com/CustomerReviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Send Successfully!", "", "success");
          e.target.reset();
        }
      });
  };

  return (
    <div className="pt-3">
      <Container>
        <div className="form-areaa">
          <h2 className="text-center mb-4 fw-bold" style={{ color: "#3498db" }}>
            Customer Review
          </h2>
          <form onSubmit={handleSubmit} className="form-section">
            <input
              type="text"
              disabled
              defaultValue={user.displayName}
              name="name"
              placeholder="Full Name"
              required
            />
            <br />
            <br />
            <input
              onBlur={handleBlur}
              type="text"
              name="rating"
              placeholder="Rating"
              required
            />
            <br />
            <br />
            <textarea
              onBlur={handleBlur}
              type="text"
              name="reviewMessage"
              placeholder="Message"
              required
            />
            <br />
            <br />
            <button className="placeBtn" type="submit">
              Send Review
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default CustomerReivew;
