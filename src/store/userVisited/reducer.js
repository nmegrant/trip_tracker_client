const initialState = [];

export default function userVisitedReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_VISITED_FETCHED":
      return [...action.payload];
    default:
      return state;
  }
}
