import axios from "axios";

export function visitedFetched(visitedCities) {
  return {
    type: "VISITED_FETCHED",
    payload: visitedCities,
  };
}

export function fetchVisitedThunkCreator() {
  return async function visitedThunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/visited`);
      dispatch(visitedFetched(response.data));
    } catch (error) {
      console.log(`Error fetching visited: ${error}`);
    }
  };
}
