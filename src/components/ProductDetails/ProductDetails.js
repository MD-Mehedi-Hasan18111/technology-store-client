import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Navigation from "../../Shared/Navigation/Navigation";

const ProductDetails = () => {
  const { id } = useParams();

  const [detailsProduct, setDetailsProduct] = useState([]);

  useEffect(() => {
    fetch(`https://afternoon-anchorage-61727.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetailsProduct(data));
  }, []);

  return (
    <div>
      <Navigation />
      <div>
        <Container className="details-area">
          <Row className="py-4">
            <Col xs={12} md={4} lg={6}>
              <img
                style={{ width: "100%" }}
                src={`data:image/png;base64,${detailsProduct?.image}`}
                alt=""
              />
            </Col>
            <Col xs={12} md={8} lg={6}>
              <div className="laptop-details">
                <h3 style={{ fontWeight: "bolder" }}>{detailsProduct?.name}</h3>
                <div className="laptop-info">
                  <h5>Ram: {detailsProduct?.ram}</h5>
                  <h5>Hard Disk: {detailsProduct?.hdd}</h5>
                  {detailsProduct?.sdd ? (
                    <h5>SSD: {detailsProduct?.sdd}</h5>
                  ) : (
                    ""
                  )}
                </div>
                <h5>Processor: {detailsProduct?.processor}</h5>
                <h2>Price: ${detailsProduct?.price}</h2>
                <p style={{ fontSize: "16px", textAlign: "justify" }}>
                  {detailsProduct?.description}
                </p>
                <Link to={`/placeOrder/${detailsProduct?._id}`}>
                  <button className="orderBtn">
                    Order Now <i className="fas fa-shopping-cart"></i>
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProductDetails;
