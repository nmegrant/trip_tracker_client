import { combineReducers } from "redux";
import visited from "./visited/reducer";
import toVisit from "./toVisit/reducer";

export default combineReducers({
  visited,
  toVisit,
});
