import React, { useState } from "react";
import "./SignIn.css";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({});
  const { googleSignIn, SignInUser, setUser, setIsLoading, saveUser, authError} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

  const googleLogIn = () => {
    setIsLoading(true);
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        const destination = location.state?.from || "/home";
        saveUser(result.user.displayName, result.user.email, 'PUT');
        navigate(destination);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
    
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...userInfo };
    newUser[field] = value;
    setUserInfo(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SignInUser(userInfo.email, userInfo.password1, location, navigate);
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
                Sign In
              </h4>
              <form className="text-center" onSubmit={handleSubmit}>
                <input
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
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
                <button type="submit" className="mt-2 securityBtn">
                  Sign in
                </button>
                <Link
                  to="/signup"
                  style={{
                    display: "block",
                    marginTop: "10px",
                    textDecoration: "none",
                  }}
                >
                  Don't have account? Sign Up
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
            <br />
            <div className="text-center">
              <button onClick={googleLogIn} className="g-btn">
                <i className="fab fa-google"></i> Sign In With Google
              </button>
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

export default SignIn;
