import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState);

  const reset = () => {
    setState(initialState);
  };

  const increment = () => {
    setState(state + 1);
  };
  const decrement = () => {
    setState(state - 1);
  };

  return {
    state,
    reset,
    increment,
    decrement,
  };
};