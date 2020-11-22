import { combineReducers } from "redux";
import visited from "./visited/reducer";
import toVisit from "./toVisit/reducer";
import appState from "./appState/reducer";
import user from "./user/reducer";
import userToVisit from "./userToVisit/reducer";

export default combineReducers({
  visited,
  toVisit,
  appState,
  user,
  userToVisit,
});
