const initialState = [];

export default function toVisitReducer(state = initialState, action) {
  switch (action.type) {
    case "TO_VISITED_FETCHED":
      return [...action.payload];
    case "ADD_NEW_TO_VISITED":
      return [...state, ...action.payload];
    default:
      return state;
  }
}
