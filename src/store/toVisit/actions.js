import axios from "axios";

export function fetchToVisitThunkCreator() {
  return async function toVisitThunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/tovisit`);
      console.log(response.data);
    } catch (error) {
      console.log(`Error fetching visited: ${error}`);
    }
  };
}
