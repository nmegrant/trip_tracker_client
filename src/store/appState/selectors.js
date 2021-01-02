export function selectAppState() {
  return (state) => {
    return state.appState;
  };
}

export function selectMessage() {
  return (state) => {
    return state.appState.info;
  };
}
