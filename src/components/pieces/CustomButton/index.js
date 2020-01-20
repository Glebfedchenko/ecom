import React from "react";
import "./index.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...rest }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...rest}
  >
    {children}
  </button>
);

export default CustomButton;
