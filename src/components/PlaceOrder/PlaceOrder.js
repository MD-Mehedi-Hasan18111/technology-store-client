import React, { useEffect, useState } from "react";
import "./PlaceOrder.css";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import swal from 'sweetalert';

const PlaceOrder = () => {
  const [orderProduct, setOrderProduct] = useState([]);

  const { user } = useAuth();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setOrderProduct(data));
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    data.name = orderProduct.name;
    data.image = orderProduct.image;
    data.price = orderProduct.price;
    data.processor = orderProduct.processor;
    data.ram = orderProduct.ram;
    data.hdd = orderProduct.hdd;
    data.status = "Pending";
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Order has been successful!", "", "success");
          e.target.reset();
          // history.push("/userDashboard/myOrders");
        }
      });
  };

  return (
    <div>
      <Navigation />
      <Container>
        <Row style={{ padding: "40px 0" }}>
          <Col xs={12} md={12} lg={4}>
            <h5>{orderProduct?.name}</h5>
            <h6>RAM: {orderProduct?.ram}</h6>
            <h6>Hard Disk: {orderProduct?.hdd}</h6>
            {orderProduct?.sdd ? (
              <h6>Solid Straight Drive: {orderProduct?.sdd}</h6>
            ) : (
              ""
            )}
            <img
              style={{ width: "100%", marginTop: "10px" }}
              src={`data:image/png;base64,${orderProduct?.image}`}
              alt=""
            />
          </Col>
          <Col xs={12} md={12} lg={8}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue={user.displayName}
                {...register("name")}
                required
              />
              <input
                defaultValue={user.email}
                {...register("email")}
                required
              />
              <input type="date" {...register("date")} required />
              <input
                type="text"
                {...register("address")}
                placeholder="Address"
                required
              />
              <input
                type="number"
                {...register("phone")}
                placeholder="Phone"
                required
              />
              <button className="placeBtn" type="submit">
                Submit & Billing
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlaceOrder;
