import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import laptop1 from '../../images/Acer-3.png';
import laptop2 from '../../images/Hp-4.png';
import './ProductBanner.css';

const ProductBanner = () => {
    return (
        <div className='product-banner'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="single-product-banner laptop1">
                            <div className="product-text">
                                <span>new arrivals</span>
                                <h5>Acer/Core-i7/8GB RAM</h5>
                            </div>
                            <div className="phone-thumb">
                                <img style={{width: "100%"}} src={laptop1} alt="laptop-img" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="single-product-banner laptop2">
                            <div className="product-text">
                                <span>sall 30% off</span>
                                <h5>Computers & Laptop</h5>
                            </div>
                            <div className="phone-thumb">
                                <img style={{width: "100%"}} src={laptop2} alt="laptop-img" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductBanner;