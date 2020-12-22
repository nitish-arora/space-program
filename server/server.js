import path from "path";
import fs from "fs";

import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import { Provider as ReduxProvider } from "react-redux";
import { StaticRouter } from "react-router";

import App from "../src/App";
import store from "./../src/redux/configureStore";

const PORT = process.env.PORT || 8090;
const app = express();

const router = express.Router();

const serverRendered = (req, res, next) => {
  if (req.url !== "/") {
    return next();
  }
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </StaticRouter>
  );

  const indexFile = path.resolve("build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Something went wrong !!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
};

router.use("^/$", serverRendered);

router.use(express.static(path.resolve(__dirname, "..", "build")));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
