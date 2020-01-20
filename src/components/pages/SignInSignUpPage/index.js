import React from "react";
import SignIn from "../../pieces/SignIn";
import SignUp from "../../pieces/SignUp";
import "./index.scss";

const SignInSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
