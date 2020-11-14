import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginThunkCreator } from "../store/user/actions";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { SearchButton as LoginButton } from "../components/styles/style";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(loginThunkCreator(values));
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
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
            <LoginButton type="submit" disabled={isSubmitting}>
              Login
            </LoginButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}
