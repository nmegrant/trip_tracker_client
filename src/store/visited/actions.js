import axios from "axios";

export function fetchVisitedThunkCreator() {
  return async function visitedThunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/visited`);
      console.log(response.data);
    } catch (error) {
      console.log(`Error fetching visited: ${error}`);
    }
  };
}
