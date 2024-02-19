import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
/* import App from "./app/App"; */
/* import { CounterApp } from "./components/01-useState/CounterApp"; */
import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";

ReactDOM.render(
  <>
    {/* <App /> */}
    {/* <CounterApp /> */}
    <CounterWithCustomHook />
  </>,
  document.getElementById("root")
);
