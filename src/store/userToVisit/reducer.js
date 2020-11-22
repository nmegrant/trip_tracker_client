const initialState = [];

export default function userToVisitReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_TO_VISIT_FETCHED":
      return [...action.payload];
    default:
      return state;
  }
}
