import { combineReducers } from "redux";
import visited from "./visited/reducer";
import toVisit from "./toVisit/reducer";
import appState from "./appState/reducer";

export default combineReducers({
  visited,
  toVisit,
  appState,
});
