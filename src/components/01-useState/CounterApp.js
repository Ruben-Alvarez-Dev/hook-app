import "./counter.css";
import React, { useState } from "react";

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
    counter5: 50,
  });

  const { counter1, counter2 } = state;

  const handleAdd = () => {
    setState({
      ...state,
      counter1: counter1 + 1,
    });
  };

  return (
    <>
      {/* <h1>Counter {0}</h1> */}
      <h1>{counter1}</h1>
      <h1>{counter2}</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleAdd}>
        {" "}
        Value + 1
      </button>
    </>
  );
};
