import React from "react";
import "./ManageProductCard.css";
import { Card, Col } from "react-bootstrap";

const ManageProductCard = ({ product, deleteProducts }) => {
  const { name, image, brand } = product;

  return (
    <Col>
      <div className="manage-card">
        <div className="card-info">
          <img style={{ height: "150px", width: "200px" }} src={`data:image/png;base64,${image}`} alt="" />
          <h6 style={{ marginTop: "5px" }}>{name}</h6>
          <p>Brand: {brand}</p>
        </div>
        <button className="deleteBtn" onClick={() => deleteProducts(product._id)}>
          Delete Product <i className="fas fa-trash"></i>
        </button>
      </div>
    </Col>
  );
};

export default ManageProductCard;
