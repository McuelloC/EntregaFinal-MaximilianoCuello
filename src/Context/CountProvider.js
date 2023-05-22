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

  return (
    <CountContext.Provider
      value={{
        count,
        sumar,
        restar
      }}
    >
      {children}
    </CountContext.Provider>
  );
};
