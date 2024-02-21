import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Memorize</h1>
      <h2>
        Counter: <Small value={counter} />
      </h2>
      <button onClick={increment} className="btn btn-primary m-1">
        Increment + 1
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="btn btn-success m-1"
      >
        Show | Hide {JSON.stringify(show)}
      </button>
      <hr />
    </>
  );
};
