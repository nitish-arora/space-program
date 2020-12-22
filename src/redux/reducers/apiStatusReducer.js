import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function apiStatusReducer(
  state = initialState.apiCallInProgress,
  action
) {
  if (action.type === types.API_CALL_BEGIN) {
    return state + 1;
  } else if (
    state > 0 &&
    (action.type === types.API_CALL_ERROR ||
      action.type === types.API_CALL_SUCCESS)
  ) {
    return state - 1;
  }
  return state;
}
