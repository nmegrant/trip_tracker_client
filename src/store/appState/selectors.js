export function selectAppState() {
  return (state) => {
    return state.appState;
  };
}

export function selectMessage() {
  return (state) => {
    return state.appState.message;
  };
}

export function selectLoading() {
  return (state) => {
    return state.appState.loading;
  };
}
