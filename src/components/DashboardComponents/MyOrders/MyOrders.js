import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./MyOrders.css";
import swal from "sweetalert";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const MyOrders = () => {

    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        fetch(`https://afternoon-anchorage-61727.herokuapp.com/orders/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
        AOS.init();
    }, [orders, user.email])

  const cancelOrder = (id) => {
    swal({
      title: "Are you sure?",
      text: "Cancel for this order registration.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`https://afternoon-anchorage-61727.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                swal("Deleted!", "Deleted Successfully!", "success");
              }
            })
        } else {
          swal("Delete Canceled!");
        }
      });
  }

  return (
    <div className="py-3">
      <div className="container myOrder">
        <h2 className="text-center my-4">
          My <span style={{ color: "#2980b9" }}>Orders</span>
        </h2>
        <Table striped bordered hover size="sm" responsive="sm">
          <thead>
            <tr>
              <th>Laptop</th>
              <th>Processor</th>
              <th>Price</th>
              <th>Order date</th>
              <th>Order status</th>
              <th>Payment status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <>
                <tr data-aos="fade-down">
                  <td>{order?.name}</td>
                  <td>{order?.processor}</td>
                  <td>{order?.price}$</td>
                  <td>{order?.date}</td>
                  {order.status === "Pending" ? (
                    <td className="text-danger fw-bold">{order.status}</td>
                  ) : (
                    <td className="text-success fw-bold">{order.status}</td>
                  )}
                  {order?.payment ? <td className="text-success fw-bold">Paid</td> : <td className="text-danger fw-bold">Unpaid</td>}
                  {order?.payment ? <td><button className="payBtn" disabled>Paid</button></td> : <td><Link to={`/dashboard/payment/${order._id}`}><button className="payBtn">Pay</button></Link></td>}
                  <td>
                    <button onClick={() => cancelOrder(order._id)} className="cancelBtn">Cancel</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyOrders;
