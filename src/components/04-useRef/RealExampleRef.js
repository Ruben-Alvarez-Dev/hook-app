import React, { useState } from "react";
import "../02-useEffect/effects.css";
import "../03-examples/MultipleCustomHooks";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Real Example Ref</h1>
      <hr />

      {show && <MultipleCustomHooks />}
      <button onClick={() => setShow(!show)} className="btn btn-success m-1">
        Show / Hide
      </button>
    </>
  );
};
