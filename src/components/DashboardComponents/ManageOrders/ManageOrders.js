import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import swal from "sweetalert";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://afternoon-anchorage-61727.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [orders]);

  console.log(orders);

  const shippedOrder = (id) => {
    fetch(`https://afternoon-anchorage-61727.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal("Order Shipped Successfully!", "", "success");
        }
      });
  };

  const deleteOrder = (id) => {
    swal({
      title: "Are you sure?",
      text: "Cancel for this order registration.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://afternoon-anchorage-61727.herokuapp.com/orders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Deleted!", "Deleted Successfully!", "success");
            }
          });
      } else {
        swal("Delete Canceled!");
      }
    });
  };

  return (
    <div className="py-3">
      <div className="container myOrder">
        <h2 className="text-center my-4">
          Manage Customer <span style={{ color: "#2980b9" }}>Orders</span>
        </h2>
        <Table striped bordered hover size="sm" responsive="sm">
          <thead>
            <tr>
              {/* <th>Image</th> */}
              <th>Email</th>
              <th>Address</th>
              <th>Laptop</th>
              <th>Price</th>
              <th>Order date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <>
                <tr>
                  {/* <td>
                    <img style={{ width: "60px" }} src={`data:image/png;base64,${order?.image}`} alt="" />
                  </td> */}
                  <td>{order?.email}</td>
                  <td>{order?.address}</td>
                  <td>{order?.name}</td>
                  <td>{order?.price}$</td>
                  <td>{order?.date}</td>
                  {order.status === "Pending" ? (
                    <td className="text-danger fw-bold">{order.status}</td>
                  ) : (
                    <td className="text-success fw-bold">{order.status}</td>
                  )}
                  <td>
                    {order?.status === "Pending" ? (
                      <button
                        onClick={() => shippedOrder(order._id)}
                        className="cancelBtn"
                      >
                        Shipped
                      </button>
                    ) : (
                      "----"
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => deleteOrder(order._id)}
                      className="cancelBtn"
                    >
                      Delete
                    </button>
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

export default ManageOrders;
