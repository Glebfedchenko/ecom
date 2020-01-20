import React from "react";
import { Form, Field } from "react-final-form";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { connect } from "react-redux";
import { signUpStart } from "../../../redux/user/actions";
import "./index.scss";

const SignUp = ({ signUpStart }) => (
  <div className="sign-up">
    <h2 className="title">I do not have an account</h2>
    <span>Sign up with your email and password</span>

    <Form
      onSubmit={async values => {
        const { password, confirmPassword, displayName, email } = values;
        if (password !== confirmPassword) {
          alert(`Passwords don't match`);
          return;
        }
        signUpStart({ email, password, displayName });
      }}
      render={({ handleSubmit, form: { reset } }) => (
        <form
          className="sign-up-form"
          onSubmit={e => handleSubmit(e).then(reset)}
        >
          <Field
            name="displayName"
            type="text"
            component={FormInput}
            label="Display Name"
          />
          <Field
            name="email"
            type="email"
            component={FormInput}
            label="Email"
          />
          <Field
            name="password"
            type="password"
            component={FormInput}
            label="Password"
          />
          <Field
            name="confirmPassword"
            type="password"
            component={FormInput}
            label="Confirm Password"
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      )}
    />
  </div>
);
export default connect(null, { signUpStart })(SignUp);
