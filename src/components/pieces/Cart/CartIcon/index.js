import React from "react";
import { ReactComponent as ShoppingIcon } from "../../../../assets/cart.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../../redux/cart/actions";
import { selectCartItemsCount } from "../../../../redux/cart/selectors";
import "./index.scss";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={() => toggleCartHidden()}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

export default connect(
  createStructuredSelector({ itemCount: selectCartItemsCount }),
  { toggleCartHidden }
)(CartIcon);
