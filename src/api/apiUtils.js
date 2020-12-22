import store from "../redux/configureStore";
import {
  apiCallBegin,
  apiCallError,
  apiCallSuccess
} from "../redux/actions/apiStatusActions";
import { toast } from "react-toastify";

const handleResponse = (response) => {
  if (response.ok) {
    store.dispatch(apiCallSuccess());
    return response.json();
  }
  if (response.status === 400) {
    response.text().then((error) => {
      throw new Error(error);
    });
  }
  throw new Error("Something went wrong");
};

const handleError = (error) => {
  store.dispatch(apiCallError());
  toast.error(error);
};

const getRequestOptions = (options) => {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  options.headers = headers;
  return options;
};

export const get = (url, options = {}) => {
  store.dispatch(apiCallBegin());
  const requestOptions = getRequestOptions(options);

  return fetch(url, requestOptions)
    .then((resp) => handleResponse(resp))
    .catch((error) => handleError(error));
};
