import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Navigation from "../../Shared/Navigation/Navigation";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = () => {
  // const [acer, setAcer] = useState([]);
  // const [hp, setHp] = useState([]);
  // const [lenovo, setLonovo] = useState([]);
  // const [samsung, setSamsung] = useState([]);
  // const [walton, setWalton] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://afternoon-anchorage-61727.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const acerProducts = products.filter((pd) => pd.brand === "Acer");
  const hpProducts = products.filter((pd) => pd.brand === "HP");
  const lenovoProducts = products.filter((pd) => pd.brand === "Lenovo");
  const samsungProducts = products.filter((pd) => pd.brand === "Samsung");
  const waltonProducts = products.filter((pd) => pd.brand === "Walton");

  return (
    <div>
      <Navigation />
      <div className="top-header">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={9}>
              <h4
                style={{
                  color: "#fff",
                  fontFamily: "sans-serif",
                  fontWeight: "bolder",
                }}
              >
                All Products
              </h4>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <input
                className="form-control"
                type="text"
                placeholder="Search Item..."
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-4">
        <h4 style={{ color: "#2c3e50" }}>
          Acer laptop are available for sales{" "}
          <i className="fas fa-arrow-right"></i>
        </h4>
        {acerProducts.length > 0 ? (
          <Row xs={1} md={2} lg={3}>
            {acerProducts?.map((pd) => (
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
      <Container className="py-4">
        <h4 style={{ color: "#2c3e50" }}>
          HP laptop are available for sales{" "}
          <i className="fas fa-arrow-right"></i>
        </h4>
        {hpProducts.length > 0 ? (
          <Row xs={1} md={2} lg={3}>
            {hpProducts?.map((pd) => (
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
      <Container className="py-4">
        <h4 style={{ color: "#2c3e50" }}>
          Lenovo laptop are available for sales{" "}
          <i className="fas fa-arrow-right"></i>
        </h4>
        {lenovoProducts.length > 0 ? (
          <Row xs={1} md={2} lg={3}>
            {lenovoProducts?.map((pd) => (
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
      <Container className="py-4">
        <h4 style={{ color: "#2c3e50" }}>
          Samsung laptop are available for sales{" "}
          <i className="fas fa-arrow-right"></i>
        </h4>
        {samsungProducts.length > 0 ? (
          <Row xs={1} md={2} lg={3}>
            {samsungProducts?.map((pd) => (
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
      <Container className="py-4">
        <h4 style={{ color: "#2c3e50" }}>
          Walton laptop are available for sales{" "}
          <i className="fas fa-arrow-right"></i>
        </h4>
        {waltonProducts.length > 0 ? (
          <Row xs={1} md={2} lg={3}>
            {waltonProducts?.map((pd) => (
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
  );
};

export default AllProducts;
