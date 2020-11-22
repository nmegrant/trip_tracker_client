import axios from "axios";

export function userToVisitFetched(userToVisitCities) {
  return {
    type: "USER_TO_VISIT_FETCHED",
    payload: userToVisitCities,
  };
}

export function fetchUserToVisitThunkCreator() {
  return async function userToVisitThunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/usertovisit`);
      dispatch(userToVisitFetched(response.data));
    } catch (error) {
      console.log(`Error fetching user to visit`);
    }
  };
}
