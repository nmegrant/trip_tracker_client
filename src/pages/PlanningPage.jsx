import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styled from "styled-components";

const FormHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function PlanningPage() {
  const history = useHistory();
  const user = useSelector(selectUser());

  useEffect(() => {
    if (user.token === null) {
      history.push("/login");
    }
  });

  const handleOnSumbit = (values, { setSubmitting }) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Plan your next vacation here</h1>
      <FormHolder>
        <Formik
          initialValues={{ city: "", country: "", date: "", days: 0 }}
          onSubmit={handleOnSumbit}
        >
          <Form>
            <label htmlFor="city">City</label>
            <Field name="city" type="text" />
            <ErrorMessage name="city" />
            <label htmlFor="country">Country</label>
            <Field name="country" type="text" />
            <ErrorMessage name="country" />
            <label htmlFor="date">Arrival Date</label>
            <Field name="date" type="date" />
            <ErrorMessage name="date" />
            <label htmlFor="days">Days</label>
            <Field name="days" type="number" />
            <ErrorMessage name="days" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </FormHolder>
    </div>
  );
}
