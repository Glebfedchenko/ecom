import React from "react";
import { Field, Form } from "react-final-form";
import FormInput from "../FormInput";
import "./index.scss";
import CustomButton from "../CustomButton";
import { signInWithGoogle, auth } from "../../../firebase";

const SignIn = () => (
  <div className="sign-in">
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>
    <Form
      onSubmit={async values => {
        const { email, password } = values;
        try {
          await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {}
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
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      )}
    />
  </div>
);
export default SignIn;
