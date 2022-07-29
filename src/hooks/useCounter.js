import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [cuenta, setstate] = useState(initialState);

  const increment = () => {
    setstate(cuenta + 1);
  };

  const decrement = () => {
    setstate(cuenta - 1);
  };

  const reset = () => {
    setstate(initialState);
  };

  return {
    cuenta,
    increment,
    decrement,
    reset,
  };
};
