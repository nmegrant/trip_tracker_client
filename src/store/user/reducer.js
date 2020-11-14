const initialState = {
  token: null,
  firstName: null,
  lastName: null,
  email: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOGGED_IN":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
      };
    case "LOGGED_OUT":
      localStorage.removeItem("token");
      return {
        ...initialState,
        token: null,
      };
    case "STILL_LOGGED_IN":
      return {
        ...state,
        ...action.payload,
      };
  }
}
