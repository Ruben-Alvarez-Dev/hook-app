import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  const { state, reset, increment, decrement } = useCounter();

  return (
    <>
      <h1>Counter with Hook {state}</h1>
      <hr />
      <button onClick={increment} className="btn btn-success">
        Value + 1
      </button>
      <button onClick={reset} className="btn btn-warning ">
        Reset
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Value - 1
      </button>
    </>
  );
};
