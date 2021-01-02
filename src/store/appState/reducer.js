const initialState = {
  darkMode: false,
  messageInfo: {
    style: null,
    message: null,
  },
};

export default function appStateReducer(state = initialState, action) {
  switch (action.type) {
    case "DARK_MODE_SET":
      return { ...state, darkMode: action.payload };
    case "SET_MESSAGE":
      return { ...state, messageInfo: action.payload };
    case "CLEAR_MESSAGE":
      return {
        ...state,
        messageInfo: {
          style: null,
          message: null,
        },
      };
    default:
      return state;
  }
}
