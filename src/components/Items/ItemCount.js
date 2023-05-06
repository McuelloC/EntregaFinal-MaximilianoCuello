import { Button } from "react-bootstrap";
import { useCount } from "../../hooks/useCounter";
import "./Items.css";

function ItemCount({ stock }) {
  const Cont = useCount();

  return (
    <div className="col-12">
      <Button onClick={() => Cont.restar()}>-</Button>
      <span>{Cont.count}</span>
      <Button
        onClick={() => Cont.sumar(stock)}
        className="btndisable"
        disabled={Cont.count === stock}
      >
        +
      </Button>
    </div>
  );
}

export default ItemCount;
