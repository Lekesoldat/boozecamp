import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./firebase/setupFirebase";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
