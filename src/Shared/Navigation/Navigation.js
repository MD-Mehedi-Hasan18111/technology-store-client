import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navigation.css";
import logo from "../../images/logo.png";
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  let navigate = useNavigate();
  const handleSignin = () => {
    navigate("/signin");
  };

  // const activeStyles = {
  //   backgroundColor: "#2980b9",
  //   color: "#fff",
  //   marginRight: "15px",
  //   fontSize: "16px",
  //   padding: "8px 10px"
  // }

  // const inActiveStyles = {
  //   textDecoration: "none",
  //   marginRight: "15px",
  //   color: "#000",
  //   fontSize: "16px",
  //   padding: "8px 10px"
  // }

  const { user, logOut } = useAuth();

  return (
    <div>
      <Navbar style={{ backgroundColor: "#fff" }} expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink to="/home">
              <img style={{ height: "50px" }} src={logo} alt="logo" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="nav-menu">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="/products">All Products</NavLink>
                {user?.email ? <NavLink to="/dashboard">Dashboard</NavLink> : ""}
                <>
                {user?.email ? <button onClick={logOut} className="signin authBtn">
                  Sign Out
                </button> : <button onClick={handleSignin} className="signin authBtn">
                  Sign In
                </button>}
                {user?.email ? <small className="displayName" style={{color: "#2980b9", fontSize: "17px", fontWeight: "bold", marginLeft: "7px"}}>{user?.displayName}</small> : ""}
                </>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
