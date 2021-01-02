const initialState = {
  darkMode: false,
  message: null,
};

export default function appStateReducer(state = initialState, action) {
  switch (action.type) {
    case "DARK_MODE_SET":
      return { ...state, darkMode: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "CLEAR_MESSAGE":
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
}
