import { combineReducers } from "redux";
import launches from "./spaceLaunchReducer";
import apiCallInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  launches,
  apiCallInProgress
});

export default rootReducer;
