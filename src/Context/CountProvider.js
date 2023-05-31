import { CountContext } from "./CountContext";
import { useState } from "react";

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState({});

  const sumar = (id) => {
    setCount({ ...count, [id]: (count[id] || 1) + 1 });
  };

  const restar = (id) => {
    if (count[id] > 1) {
      setCount({ ...count, [id]: (count[id] || 1) - 1 });
    }
  };

  const resetCounters = () => {
    setCount({});
  };

  return (
    <CountContext.Provider
      value={{
        count,
        sumar,
        restar,
        resetCounters
      }}
    >
      {children}
    </CountContext.Provider>
  );
};
