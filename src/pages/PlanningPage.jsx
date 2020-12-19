import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { createNewUserToVisitThunkCreator } from "../store/userToVisit/actions";

const FormHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    // dispatch(createNewUserVisitedThunkCreator(values));
    actions.resetForm();
  };

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Plan Upcoming Trips</Tab>
          <Tab>Record Past Trips</Tab>
        </TabList>
        <TabPanel>
          <h1>Plan your next trip here</h1>
          <Formik
            initialValues={{ city: "", country: "", date: "", days: 0 }}
            onSubmit={handleOnSumbitToVisit}
          >
            <Form>
              <FormHolder>
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
              </FormHolder>
            </Form>
          </Formik>
        </TabPanel>
        <TabPanel>
          <h1>Record a past trip here</h1>
          <Formik
            initialValues={{ city: "", country: "", date: "", days: 0 }}
            onSubmit={handleOnSumbitVisited}
          >
            <Form>
              <FormHolder>
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
              </FormHolder>
            </Form>
          </Formik>
        </TabPanel>
      </Tabs>
    </div>
  );
}
