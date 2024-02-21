import React from "react";

export const ShowIncrement = ({ increment }) => {
  console.log("Me volví a generar :(");

  return (
    <button
      className="btn btn-success m-1"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
};
