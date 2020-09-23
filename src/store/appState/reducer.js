const initialState = {
  darkMode: false,
};

export default function appStateReducer(state = initialState, action) {
  switch (action.type) {
    case "DARK_MODE_SET":
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
}
