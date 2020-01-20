import React from "react";
import "./index.scss";

const CartItem = ({ name, price, quantity, imageUrl }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);
export default CartItem;
