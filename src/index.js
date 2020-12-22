import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";
import store from "./redux/configureStore";
import "./index.css";

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ReduxProvider store={store}>
      <Route path="/" component={App} />
    </ReduxProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
