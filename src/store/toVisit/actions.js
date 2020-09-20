import axios from "axios";

export function toVisitFetched(toVisitCities) {
  return {
    type: "TO_VISITED_FETCHED",
    payload: toVisitCities,
  };
}

export function fetchToVisitThunkCreator() {
  return async function toVisitThunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/tovisit`);
      dispatch(toVisitFetched(response.data));
    } catch (error) {
      console.log(`Error fetching visited: ${error}`);
    }
  };
}
