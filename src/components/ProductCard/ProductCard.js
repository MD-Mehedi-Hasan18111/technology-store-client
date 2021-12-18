import React from "react";
import "./ProductCard.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  // console.log(props);
  const { _id, image, name, brand, price } = props.product;

  return (
    <Link to={`/details/${_id}`}>
      <Col className="product-card">
        {/* <img style={{ width: "250px", height: "200px" }} src={image} alt="" />
            <h6>{name}</h6> */}
        <div class="card" style={{ backgroundImage: `url(data:image/png;base64,${image})` }}>
          <div class="text">
            <h5>{name}</h5>
            <h6 style={{ marginTop: "5px" }}>
              Show Detail <i class="fas fa-arrow-circle-right"></i>
            </h6>
          </div>
        </div>
      </Col>
    </Link>
  );
};

export default ProductCard;
