import { useState, useMemo } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
      console.log("Ahí vamos...");
    }

    return `${iteraciones} iteraciones realizadas`;
  };

  const memoPP = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoPP}</p>

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
