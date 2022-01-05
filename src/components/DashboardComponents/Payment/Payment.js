import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import "./Payment.css";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51JwJT6B3oKXz2yuUGAr9IdGCCc8dwLvTiITJpaLEpUPJf4QOEG7ujvK7aeb5aXudUNtcZUMvBdEHdN9H3bI547Ht00conhX2XW');

const Payment = () => {
  const { productId } = useParams();

  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(`https://afternoon-anchorage-61727.herokuapp.com/order/${productId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  return (
    <div style={{ margin: "20px 0 0 0", textAlign: "center" }}>
      <h2>payment for laptop: {order.name}</h2>
      <h4>Price: ${order.price}</h4>
      {order.price && <Elements stripe={stripePromise}>
        <CheckoutForm order={order} />
      </Elements>}
    </div>
  );
};

export default Payment;
