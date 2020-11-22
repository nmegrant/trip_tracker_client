import axios from "axios";

export function userVisitedFetched(visitedCities) {
  return {
    type: "USER_VISITED_FETCHED",
    payload: visitedCities,
  };
}

export function fetchUserVisitedThunkCreator() {
  return async function userVisitedThunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/uservisited`);
      dispatch(userVisitedFetched(response.data));
    } catch (error) {
      console.log(`Error fetching visited: ${error}`);
    }
  };
}
