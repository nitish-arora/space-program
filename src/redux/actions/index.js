export function actionCreator(type, payload) {
  const action = { type };
  if (payload) {
    action.payload = payload;
  }
  return action;
}
