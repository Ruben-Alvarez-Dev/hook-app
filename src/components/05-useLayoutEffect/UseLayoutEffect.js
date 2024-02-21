import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/effects.css";
import { useLayoutEffect } from "react";

export const UseLayoutEffect = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  useLayoutEffect(() => {
    console.log("hey");
  }, [quote]);

  return (
    <>
      <h1>Use Layout Effect</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p className="mb-0">{quote}</p>
        <p></p>
      </blockquote>
      <button onClick={increment} className="btn btn-primary m-1">
        Next quote
      </button>
    </>
  );
};
