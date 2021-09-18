import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

import ShowsState from "./context/Shows/showsState";
import AlertsSatte from "./context/Alert/alertState";

ReactDOM.render(
  <React.StrictMode>
    <ShowsState>
      <AlertsSatte>
        <App />
      </AlertsSatte>
    </ShowsState>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
