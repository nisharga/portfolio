import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Themeprovider } from "./Context";
ReactDOM.render(
  <Themeprovider>
    <App />
  </Themeprovider>,
  document.getElementById("root")
);
