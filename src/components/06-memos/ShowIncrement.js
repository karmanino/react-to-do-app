import React from "react";

export const ShowIncrement = ({ increment }) => {
  console.log("toy :/");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      Incrementar
    </button>
  );
};
