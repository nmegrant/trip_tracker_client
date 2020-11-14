import axios from "axios";

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
    } catch (error) {
      console.log(`Error logging: ${error}`);
    }
  };
}
