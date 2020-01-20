import React from "react";
import "./index.scss";
import CustomButton from "../../CustomButton";
import { connect } from "react-redux";
import CartItem from "../CartItem";
import { selectCartItems } from "../../../../redux/cart/selectors";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../../../redux/cart/actions";

const CartDropDown = ({ cartItems, history, toggleCartHidden }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length > 0 ? (
        cartItems.map(cartItem => <CartItem key={cartItem.id} {...cartItem} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        toggleCartHidden();
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

export default compose(
  withRouter,
  connect(createStructuredSelector({ cartItems: selectCartItems }), {
    toggleCartHidden
  })
)(CartDropDown);
