const initialState = [];

export default function visitedReducer(state = initialState, action) {
  switch (action.type) {
    case "VISITED_FETCHED":
      return [...action.payload];
    case "ADD_NEW_VISITED":
      return [...state, action.payload];
    default:
      return state;
  }
}
