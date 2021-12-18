import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className='footer-part'>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="footer-widget">
                            <h5>contact us</h5>
                            <p>It is a long established fact that reader will distract by the readable content of a page</p>
                            <ul>
                                <li>218 Fifth Avenue, HeavenTower NewYork City</li>
                                <li>(+12) 123 456 5890</li>
                                <li>Hot-Support@coznize.com</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="footer-widget">
                            <h5>INFORMATION</h5>
                            <ul>
                                <li>Site Map</li>
                                <li>Specials</li>
                                <li>Jobs</li>
                                <li>Delivery Information</li>
                                <li>Order History</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="footer-widget">
                            <h5>MY ACCOUNT</h5>
                            <ul>
                                <li>My Account</li>
                                <li>Checkout</li>
                                <li>Login</li>
                                <li>Address</li>
                                <li>Order Status</li>
                                <li>Order Tracking</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="footer-widget">
                            <h5>Quick Links</h5>
                            <ul>
                                <li>Acer</li>
                                <li>Lenovo</li>
                                <li>HP</li>
                                <li>Samsung</li>
                                <li>Walton</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="footer-widget">
                            <h5>CUSTOMER SERVICE</h5>
                            <ul>
                                <li>My Account</li>
                                <li>New</li>
                                <li>Gift Cards</li>
                                <li>Return Policy</li>
                                <li>Your Orders</li>
                                <li>Subway</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <div className="copyright">
                    <p>Copyright 2021 Technology Store Rights Reserved.</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;