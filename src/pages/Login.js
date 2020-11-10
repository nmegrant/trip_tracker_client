import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { SearchButton as LoginButton } from "../components/styles/style";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values, actions) => {
          await new Promise((r) => setTimeout(r, 1000));
          console.log(values);
          actions.resetForm();
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
