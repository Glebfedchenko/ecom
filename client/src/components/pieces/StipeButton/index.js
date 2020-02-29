import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pk_key = `pk_test_9UUs2MjkP67c9Ip75mo3kzdV00k3KQgUp0`;
  const onToken = token => {
    axios({
      url: "/payment",
      method: "post",
      data: { amount: priceForStripe, token }
    })
      .then(res => {
        alert("Payment Successfull");
      })
      .catch(error => {
        alert("Payment Error");
      });
    console.log(token);
  };
  //const FAKE_CARD = `4242-4242-4242-4242 exp 01/20 cw 123`;
  return (
    <StripeCheckout
      label="Pay now"
      image="https://svgshare.com/i/CUz.svg"
      name="Store Ltd."
      shippingAddress
      billingAddress
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={pk_key}
    />
  );
};
export default StripeCheckoutButton;
