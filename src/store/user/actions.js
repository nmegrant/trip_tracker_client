import axios from "axios";

export function signupThunkCreator(newUser) {
  return async function signUpThunk(dispatch, getState) {
    try {
      const response = await axios.post(
        `http://localhost:4000/signup`,
        newUser
      );
      console.log(response);
    } catch (error) {
      console.log(`Error signing up: ${error}`);
    }
  };
}

export function loginThunkCreator(user) {
  return async function loginThunk(dispatch, getState) {
    try {
      const response = await axios.post(`http://localhost:4000/login`, user);
      console.log(response);
    } catch (error) {
      console.log(`Error logging: ${error}`);
    }
  };
}
