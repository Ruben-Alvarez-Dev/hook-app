import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";
export const MultipleCustomHooks = () => {
  const state = useFetch("https://rickandmortyapi.com/api/character");
  console.log(state.data);

  return (
    <>
      <h1>Custom Hooks</h1>
    </>
  );
};
