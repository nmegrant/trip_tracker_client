import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { createNewUserToVisitThunkCreator } from "../store/userToVisit/actions";
import { createNewUserVisitedThunkCreator } from "../store/userVisited/actions";
import { SearchButton as SubmitButton } from "../components/styles/style";

const FormHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  padding: 2rem 0;
`;

export default function PlanningPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser());

  useEffect(() => {
    if (user.token === null) {
      history.push("/login");
    }
  });

  const handleOnSumbitToVisit = (values, actions) => {
    dispatch(createNewUserToVisitThunkCreator(values));
    actions.resetForm();
  };

  const handleOnSumbitVisited = (values, actions) => {
    dispatch(createNewUserVisitedThunkCreator(values));
    actions.resetForm();
  };

  const validation = Yup.object({
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    days: Yup.string().required("Required"),
  });

  const visitedValidation = Yup.object({
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    days: Yup.string().required("Required"),
    rating: Yup.number().max(5).min(0),
  });

  return (
    <Container>
      <Tabs>
        <TabList>
          <Tab>Plan Upcoming Trips</Tab>
          <Tab>Record Past Trips</Tab>
        </TabList>
        <TabPanel>
          <h1>Plan your next trip here</h1>
          <Formik
            initialValues={{ city: "", country: "", date: "", days: 0 }}
            validationSchema={validation}
            onSubmit={handleOnSumbitToVisit}
          >
            <Form>
              <FormHolder>
                <label htmlFor="city">City</label>
                <Field name="city" type="text" />
                <ErrorMessage name="city">
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
                <label htmlFor="date">Arrival Date</label>
                <Field name="date" type="date" />
                <ErrorMessage name="date">
                  {(msg) => (
                    <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
                  )}
                </ErrorMessage>
                <label htmlFor="days">Days</label>
                <Field name="days" type="number" />
                <ErrorMessage name="days">
                  {(msg) => (
                    <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
                  )}
                </ErrorMessage>
                <SubmitButton type="submit">Submit</SubmitButton>
              </FormHolder>
            </Form>
          </Formik>
        </TabPanel>
        <TabPanel>
          <h1>Record a past trip here</h1>
          <Formik
            initialValues={{ city: "", country: "", date: "", days: 0 }}
            validationSchema={visitedValidation}
            onSubmit={handleOnSumbitVisited}
          >
            <Form>
              <FormHolder>
                <label htmlFor="city">City</label>
                <Field name="city" type="text" />
                <ErrorMessage name="city">
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
                <label htmlFor="date">Arrival Date</label>
                <Field name="date" type="date" />
                <ErrorMessage name="date">
                  {(msg) => (
                    <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
                  )}
                </ErrorMessage>
                <label htmlFor="days">Days</label>
                <Field name="days" type="number" />
                <ErrorMessage name="days">
                  {(msg) => (
                    <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
                  )}
                </ErrorMessage>
                <label htmlFor="rating">Rating</label>
                <Field name="rating" type="number" />
                <ErrorMessage name="rating">
                  {(msg) => (
                    <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
                  )}
                </ErrorMessage>
                <SubmitButton type="submit">Submit</SubmitButton>
              </FormHolder>
            </Form>
          </Formik>
        </TabPanel>
      </Tabs>
    </Container>
  );
}
