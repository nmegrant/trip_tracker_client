export function changeDarkMode(mode) {
  return { type: "DARK_MODE_SET", payload: mode };
}

export function setMessage(message, style) {
  return {
    type: "SET_MESSAGE",
    payload: {
      message,
      style,
    },
  };
}

export function clearMessage() {
  return {
    type: "CLEAR_MESSAGE",
  };
}

export function loading() {
  return { type: "LOADING" };
}

export function doneLoading() {
  return { type: "DONE_LOADING" };
}

export function showMessageThunkCreator(message, style) {
  return function showMessage(dispatch, getState) {
    dispatch(setMessage(message, style));
    setTimeout(() => dispatch(clearMessage()), 2000);
  };
}
