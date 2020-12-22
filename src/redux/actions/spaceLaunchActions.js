import * as types from "./actionTypes";
import * as api from "./../../api";
import { actionCreator } from ".";

export function getSpaceLaunches(queryString) {
  return function (dispatch) {
    return api.getSpaceLaunches(queryString).then((launchData) => {
      if (launchData) {
        dispatch(actionCreator(types.SPACE_LAUNCES, launchData));
      }
    });
  };
}
