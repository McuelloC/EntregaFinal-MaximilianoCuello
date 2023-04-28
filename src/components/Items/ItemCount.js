import { Button } from "react-bootstrap";
import { useState } from "react";

function ItemCount() {
    const [count, setCount] = useState(1);
  
    const sumar = () => {
      setCount(count + 1);
    };
  
    const restar = () => {
     if(count>0){
      setCount(count - 1);
    }
    };
  
    return (
      <div className= "col-12">
        <Button onClick={restar}>-</Button>
        <span>{count}</span>
        <Button onClick={sumar}>+</Button>
      </div>
    );
  }

export default ItemCount;