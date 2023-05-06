import { useState } from "react";
const useCount = ()=>{
    const [count, setCount] = useState(1);
 
    const sumar = (stock) => {
      if (count < stock) {
        setCount(count + 1);
      }
    };
  
    const restar = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };

    return {count,sumar,restar}
  
}
export {useCount}