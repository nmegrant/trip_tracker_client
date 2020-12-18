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
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://localhost:4000/usertovisit`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(userToVisitFetched(response.data));
    } catch (error) {
      console.log(`Error fetching user to visit`);
    }
  };
}

export function createNewUserToVisitThunkCreator(trip) {
  return async function newUserToVisitThunk(dispatch, getState) {
    const token = localStorage.getItem("token");
    try {
      const newTrip = await axios.post(
        `http://localhost:4000/usertovisit`,
        trip,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(newTrip);
    } catch (error) {
      console.log(`Error creating new user trip: ${error}`);
    }
  };
}
