import React, { useEffect, useState } from "react";
import "./TopProduct.css";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";

const TopProduct = () => {
  const [products, setProducts] = useState([]);
  const [brand, setBrand] = useState("Acer");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const TopProduct = products.filter((pd) => pd.brand === brand);
  // console.log(TopProduct);

  return (
    <div>
      <div className="top-header">
        <Container>
          <Row className="d-flex align-items-center">
            <Col xs={12} md={6} lg={9}>
              <h4
                style={{
                  color: "#fff",
                  fontFamily: "sans-serif",
                  fontWeight: "bolder",
                }}
              >
                Top Laptop
              </h4>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <label htmlFor="laptop">
                <h5 style={{ color: "#fff" }}>Laptop Brand:</h5>
              </label>
              <br />
              <select
                name="laptops"
                id="laptop"
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="Acer">Acer</option>
                <option value="HP">HP</option>
                <option value="Lenovo">Lenovo</option>
                <option value="Samsung">Samsung</option>
                <option value="Walton">Walton</option>
              </select>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          {TopProduct?.length > 0 ? (
            <Row xs={1} md={2} lg={3}>
              {TopProduct?.slice(0, 6).map((pd) => (
                <ProductCard product={pd} />
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
    </div>
  );
};

export default TopProduct;
