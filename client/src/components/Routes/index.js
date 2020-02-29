import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import Header from "../pieces/Header";
import CheckoutPage from "../pages/CheckoutPage";
import SignInSignUpPage from "../pages/SignInSignUpPage";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/selectors";
import { checkUserSession } from "../../redux/user/actions";

const Routes = ({ setCurrentUser, currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession, setCurrentUser]);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
      </Switch>
    </>
  );
};
export default connect(
  createStructuredSelector({ currentUser: selectCurrentUser }),
  { checkUserSession }
)(Routes);
