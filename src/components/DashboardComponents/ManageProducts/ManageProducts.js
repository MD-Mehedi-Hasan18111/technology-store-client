import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import swal from "sweetalert";
import ManageProductCard from "../../ManageProductCard/ManageProductCard";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  const deleteProducts = (id) => {
    swal({
      title: "Are you sure for Delete Product?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Product Deleted!", "", "success");
            }
          });
      } else {
        swal("Your Product has been saved!");
      }
    });
  };

  const styleLoading = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#2980b9",
  };

  return (
    <div className="my-4">
      <Container>
        {!products.length ? (
          <div style={styleLoading}>
            <Spinner animation="border" variant="primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Container>
            <Row xs={1} md={2} lg={3} className="g-5 mx-auto">
              {products?.map((product) => (
                <ManageProductCard
                  key={product._id}
                  deleteProducts={deleteProducts}
                  product={product}
                />
              ))}
            </Row>
          </Container>
        )}
      </Container>
    </div>
  );
};

export default ManageProducts;
