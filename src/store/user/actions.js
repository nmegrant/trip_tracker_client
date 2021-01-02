import axios from "axios";
import { showMessageThunkCreator } from "../appState/actions";

export function loggedIn(userAndToken) {
  return {
    type: "LOGGED_IN",
    payload: userAndToken,
  };
}

export function logOut() {
  return {
    type: "LOGGED_OUT",
    payload: null,
  };
}

export function stillLoggedIn(userInfo) {
  return {
    type: "STILL_LOGGED_IN",
    payload: userInfo,
  };
}

export function signupThunkCreator(newUser) {
  return async function signUpThunk(dispatch, getState) {
    try {
      const response = await axios.post(
        `http://localhost:4000/signup`,
        newUser
      );
      dispatch(loggedIn(response.data));
    } catch (error) {
      console.log(`Error signing up: ${error}`);
    }
  };
}

export function loginThunkCreator(user) {
  return async function loginThunk(dispatch, getState) {
    try {
      const response = await axios.post(`http://localhost:4000/login`, user);
      dispatch(loggedIn(response.data));
      dispatch(showMessageThunkCreator("Logged in!", "green"));
    } catch (error) {
      dispatch(showMessageThunkCreator("Failed to log in!", "red"));
      console.log(`Error logging: ${error}`);
    }
  };
}

export function getLoggedInUserThunkCreator() {
  return async function getUserThunk(dispatch, getState) {
    const token = localStorage.getItem("token");
    if (token === null) return;
    try {
      const response = await axios.get(`http://localhost:4000/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(stillLoggedIn(response.data));
    } catch (error) {
      console.log(`Error retrieving logged in user: ${error}`);
      dispatch(logOut());
    }
  };
}
