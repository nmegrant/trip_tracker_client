const initialState = [];

export default function visitedReducer(state = initialState, action) {
  switch (action.type) {
    case "VISITED_FETCHED":
      return [...action.payload];
    default:
      return state;
  }
}
