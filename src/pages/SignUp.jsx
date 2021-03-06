import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signupThunkCreator } from "../store/user/actions";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { SearchButton as SignupButton } from "../components/styles/style";

export default function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (/%[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,5}/.test(values.email)) {
      errors.email = "Please supply a valid email.";
    }
    if (!values.password || values.password.length === 0) {
      errors.password = "Required";
    }
    if (values.password.length < 3) {
      errors.password = "Please supply a longer password - for your security!";
    }
    return errors;
  };

  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          country: "",
        }}
        validate={validate}
        onSubmit={(values, actions) => {
          dispatch(signupThunkCreator(values));
          actions.resetForm();
          history.push("/");
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName">
              {(msg) => (
                <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
              )}
            </ErrorMessage>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName">
              {(msg) => (
                <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
              )}
            </ErrorMessage>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email">
              {(msg) => (
                <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
              )}
            </ErrorMessage>
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password">
              {(msg) => (
                <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
              )}
            </ErrorMessage>
            <label htmlFor="country">Country</label>
            <Field name="country" type="text" />
            <ErrorMessage name="country">
              {(msg) => (
                <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
              )}
            </ErrorMessage>
            <SignupButton type="submit" disabled={isSubmitting}>
              Sign up
            </SignupButton>
          </Form>
        )}
      </Formik>
      <p>
        Already a member? <Link to="/login">Login</Link> here.
      </p>
    </div>
  );
}
