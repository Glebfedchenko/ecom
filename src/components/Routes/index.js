import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import Header from "../pieces/Header";
import CheckoutPage from "../pages/CheckoutPage";
import SignInSignUpPage from "../pages/SignInSignUpPage";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/actions";
import { auth, createUserProfileDocument } from "../../firebase";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/selectors";

const Routes = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuthObject => {
        if (userAuthObject) {
          const userRef = await createUserProfileDocument(userAuthObject);
          userRef.onSnapshot(snapshot =>
            setCurrentUser({ id: snapshot.id, ...snapshot.data() })
          );
        } else setCurrentUser(userAuthObject);
      }
    );
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);
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
  { setCurrentUser }
)(Routes);
