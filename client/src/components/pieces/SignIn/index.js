import React from "react";
import { Field, Form } from "react-final-form";
import FormInput from "../FormInput";
import "./index.scss";
import CustomButton from "../CustomButton";
import { connect } from "react-redux";
import {
  signInWithGoogleStart,
  signInWithEmailStart
} from "../../../redux/user/actions";

const SignIn = ({ signInWithGoogleStart, signInWithEmailStart }) => (
  <div className="sign-in">
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>
    <Form
      onSubmit={async values => {
        signInWithEmailStart(values);
      }}
      render={({ handleSubmit, form }) => (
        <form onSubmit={e => handleSubmit(e).then(form.reset)}>
          <Field
            name="email"
            component={FormInput}
            label="Email"
            type="email"
          />
          <Field
            name="password"
            component={FormInput}
            label="Password"
            type="password"
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogleStart}
              isGoogleSignIn
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      )}
    />
  </div>
);
export default connect(null, { signInWithGoogleStart, signInWithEmailStart })(
  SignIn
);
