import React, { useState } from "react";
import "./counter.css";

export const CounterApp = () => {
  const [counter, setcounter] = useState({
    counter1: 10,
    counter2: 20,
  });

  const { counter1, counter2 } = counter;

  return (
    <>
      <h1>Counter {counter1}</h1>
      <h1>Counter {counter2}</h1>
      <hr />
      <button
        onClick={() => {
          let counternuevo = counter1 + 1;
          setcounter({ ...counter, counter1: counternuevo });
        }}
        className="btn btn-primary"
      >
        +1
      </button>
    </>
  );
};
