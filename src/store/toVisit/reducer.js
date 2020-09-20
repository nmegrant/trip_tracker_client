initialState = [];

export default function toVisitReducer(state = initialState, action) {
  switch (action.type) {
    case "TO_VISITED_FETCHED":
      return [...action.payload];
    default:
      return state;
  }
}
