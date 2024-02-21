import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  console.log(loading, data);

  return (
    <>
      <h1>Rick and Morty Api</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading ...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <p></p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button onClick={increment} className="btn btn-primary">
        Next quote
      </button>
    </>
  );
};
