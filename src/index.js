import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
/* import App from "./app/App"; */
/* import { CounterApp } from "./components/01-useState/CounterApp"; */
/* import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook"; */
/* import { SimpleForms } from "./components/02-useEffect/SimpleForms"; */
/* import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook"; */
/* import { MultipleCustomHooks } from "./components/03-examples/MultipleCustomHooks"; */
/* import { FocusScreen } from "./components/04-useRef/FocusScreen"; */
/* import { RealExampleRef } from "./components/04-useRef/RealExampleRef"; */
/* import { UseLayoutEffect } from "./components/05-useLayoutEffect/UseLayoutEffect"; */
import { Memorize } from "./components/06-memos/Memorize";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(
  <>
    {/* <App /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForms /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <RealExampleRef /> */}
    {/* <UseLayoutEffect /> */}
    <Memorize />
  </>
);
