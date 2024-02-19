import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
/* import App from "./app/App"; */
import { CounterApp } from "./components/01-useState/CounterApp";

ReactDOM.render(
  <>
    {/* <App /> */}
    <CounterApp />
  </>,
  document.getElementById("root")
);
