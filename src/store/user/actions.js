import axios from "axios";

export function signupThunkCreator(newUser) {
  return async function signUpThunk(dispatch, getState) {
    try {
      console.log(newUser);
      const response = await axios.post(`/signup`, newUser);
    } catch (error) {
      console.log(`Error signing up: ${error}`);
    }
  };
}

export function loginThunkCreator(user) {
  return async function loginThunk(dispatch, getState) {
    try {
      console.log(user);
      const response = await axios.post(`/login`, user);
    } catch (error) {
      console.log(`Error logging: ${error}`);
    }
  };
}
