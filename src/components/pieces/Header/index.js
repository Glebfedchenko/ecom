import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import CartIcon from "../Cart/CartIcon";
import CartDropDown from "../Cart/CartDropDown";
import { selectCurrentUser } from "../../../redux/user/selectors";
import { selectCartHidden } from "../../../redux/cart/selectors";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../../redux/user/actions";
import { connect } from "react-redux";
import "./index.scss";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contacts">
        CONTACTS
      </Link>
      {currentUser ? (
        <div className="option" onClick={signOutStart}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden && <CartDropDown />}
  </div>
);

export default connect(
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  }),
  { signOutStart }
)(Header);
