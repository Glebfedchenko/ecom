import React from "react";
import { Form, Field } from "react-final-form";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { auth, createUserProfileDocument } from "../../../firebase";
import "./index.scss";

const SignUp = () => (
  <div className="sign-up">
    <h2 className="title">I do not have an account</h2>
    <span>Sign up with your email and password</span>

    <Form
      onSubmit={async values => {
        if (values.password !== values.confirmPassword) {
          alert(`Passwords don't match`);
          return;
        }
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            values.email,
            values.password
          );
          await createUserProfileDocument(user, {
            displayName: values.displayName
          });
        } catch (error) {
          console.log(error.message);
        }
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
export default SignUp;
