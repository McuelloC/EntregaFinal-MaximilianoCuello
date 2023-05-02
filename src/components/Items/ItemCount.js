import { Button } from "react-bootstrap";
import { useState } from "react";

function ItemCount({ stock }) {
 
    const [count, setCount] = useState(1);
 
    const sumar = () => {
      if (count < stock) {
        setCount(count + 1);
      }
    };
  
    const restar = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };
  
    return (
      <div className="col-12">
        <Button onClick={restar}>-</Button>
        <span>{count}</span>
        <Button onClick={sumar} disabled={count === stock}>+</Button>
      </div>
    );
}

export default ItemCount;
