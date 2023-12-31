import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";

// Replace ReactDOM.render with createRoot
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
