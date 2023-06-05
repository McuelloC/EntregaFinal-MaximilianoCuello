import { Button } from "react-bootstrap";
import "./Items.css";
import { CountContext } from "../../Context";
import { useContext } from "react";


function ItemCount({ stock, id }) {
  const { count, sumar, restar } = useContext(CountContext);





  return (
    <div className="col-111">
      <Button onClick={() => restar(id)}>-</Button>
      <input
        type="text"
        value={count[id] || 1}
        className="Input-Count"
        onChange={() => { }}
      />
      <Button
        onClick={() => sumar(id)}
        className="btndisable"
        disabled={count[id] === stock}
      >
        +
      </Button>
    </div>
  );
}

export default ItemCount;