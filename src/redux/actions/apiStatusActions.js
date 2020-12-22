import * as types from "./actionTypes";
import { actionCreator } from ".";

export function apiCallBegin() {
  return actionCreator(types.API_CALL_BEGIN);
}

export function apiCallSuccess() {
  return actionCreator(types.API_CALL_SUCCESS);
}

export function apiCallError() {
  return actionCreator(types.API_CALL_ERROR);
}
