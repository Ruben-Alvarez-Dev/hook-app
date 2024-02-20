import { useEffect, useState } from "react";
import "./effects.css";

export const SimpleForms = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log(" useEffect -> EFFECT");
  });

  const handleInputChange = (e) => {
    console.log("HandleInputChange -> CHANGE");
    console.log("NAME: ", e.target.name);
    console.log("VALUE", e.target.value);
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Write name..."
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};
