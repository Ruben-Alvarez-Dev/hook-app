import React, { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

import "../02-useEffect/effects.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  /* const increment = () => {
    setCounter(counter + 1);
  }; */

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <>
      <h1>Callback Hook</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};
