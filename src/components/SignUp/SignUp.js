import React, { useState } from "react";
import "./SignUp.css";
import { Alert, Col, Container, Row } from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({});

  const { SignUpUser, authError } = useAuth();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...userInfo };
    newUser[field] = value;
    setUserInfo(newUser);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInfo.password1 !== userInfo.password2) {
      swal("Opps!", "Password are didn't Match!", "error");
      return;
    } else {
      SignUpUser(
        userInfo.name,
        userInfo.email,
        userInfo.password1,
        location,
        navigate
      );
      swal("User Created Successfully!", "", "success");
    }
  };

  return (
    <div>
      <Container>
        <Row
          style={{ paddingTop: "25px" }}
          className="d-flex align-items-center"
        >
          <Col xs={12} md={12} lg={6}>
            <div className="text-center">
              <img style={{ width: "150px" }} src={logo} alt="logo" />
            </div>
            <div className="form-area">
            {authError && <Alert variant="danger">{authError}</Alert>}
              <h4
                style={{
                  color: "#2980b9",
                  textAlign: "center",
                  marginBottom: "15px",
                }}
              >
                Sign Up
              </h4>
              <form className="text-center" onSubmit={handleSubmit}>
                <input
                  onBlur={handleBlur}
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
                <br />
                <br />
                <input onBlur={handleBlur} type="email" name="email" placeholder="Email" required />
                <br />
                <br />
                <input
                  onBlur={handleBlur}
                  type="password"
                  name="password1"
                  placeholder="Password"
                  required
                />
                <br />
                <br />
                <input
                  onBlur={handleBlur}
                  type="password"
                  name="password2"
                  placeholder="Re-enter Password"
                  required
                />
                <br />
                <br />
                <button type="submit" className="mt-2 securityBtn">
                  Sign up
                </button>
                <Link
                  to="/signin"
                  style={{
                    display: "block",
                    marginTop: "10px",
                    textDecoration: "none",
                  }}
                >
                  Already have an account? Sign In
                </Link>
                <Link
                  to="/home"
                  style={{
                    display: "block",
                    marginTop: "10px",
                    textDecoration: "none",
                  }}
                >
                  Cancel
                </Link>
              </form>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <img
              style={{ width: "100%" }}
              src="https://accounts.formaloo.net/static/assets/image/signup.svg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
