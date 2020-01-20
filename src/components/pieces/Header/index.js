import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { auth } from "../../../firebase";
import { connect } from "react-redux";
import "./index.scss";
import CartIcon from "../Cart/CartIcon";
import CartDropDown from "../Cart/CartDropDown";
import { selectCurrentUser } from "../../../redux/user/selectors";
import { selectCartHidden } from "../../../redux/cart/selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
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
        <div className="option" onClick={() => auth.signOut()}>
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
  })
)(Header);
