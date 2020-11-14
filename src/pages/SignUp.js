import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
          console.log("here");
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
            <ErrorMessage name="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" />
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
            <label htmlFor="country">Country</label>
            <Field name="country" type="text" />
            <ErrorMessage name="country" />
            <SignupButton type="submit" disabled={isSubmitting}>
              Sign up
            </SignupButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}
