import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

export default function SignUp() {
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
    if (!values.password) {
      errors.password = "Required";
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
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.firstName) {
        //     errors.firstName = "Required";
        //   }
        //   if (!values.lastName) {
        //     errors.lastName = "Required";
        //   }
        //   if (!values.email) {
        //     errors.email = "Required";
        //   }
        //   if (!values.password) {
        //     errors.password = "Required";
        //   }
        //   return errors;
        // }}
        onSubmit={async (values, actions) => {
          await new Promise((r) => setTimeout(r, 1000));
          console.log(values);
          actions.resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
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
            <button type="submit" disabled={isSubmitting}>
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
