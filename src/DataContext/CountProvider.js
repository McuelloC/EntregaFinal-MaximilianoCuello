import { CountContext } from "./CountContext";
import { useState } from "react";


 export const CountProvider=({children})=> {
     const [count, setCount] = useState(1);
    
    const sumar = () => {
      if (count < 10) {
        setCount(count + 1);
      }
    };
  
    const restar = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };
  
    return (
        <CountContext.Provider   value={{
            count,
            sumar,
            restar
        }}>
           {children}
       </CountContext.Provider>
    );
}


