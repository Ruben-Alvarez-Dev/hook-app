import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForms = () => {
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    /*     console.log(" Carga Inicial");
     */
  }, []);

  useEffect(() => {
    /*     console.log("email Cambio");
     */
  }, [formState]);

  useEffect(() => {
    /* console.log("nombre Cambio"); */
  }, [name]);

  const handleInputChange = ({ target }) => {
    /* console.log("HandleInputChange");
    console.log("NAME: ", target.name);
    console.log("VALUE", target.value); */
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group m-2">
        <input
          type="text"
          name="nombre"
          className="form-control"
          placeholder="Write name..."
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group m-2">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Write email..."
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {formState.nombre === "123" && <Message />}
    </>
  );
};
