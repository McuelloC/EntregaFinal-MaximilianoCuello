import 'bootstrap-icons/font/bootstrap-icons.css';
import "./CartWidget.css";
import { useContext, useState } from 'react';
import ViewCartItems from './ViewCartItems';
import { CartContext } from '../../Context';



const CarritoCompras = () => {
  const [modalShow, setModalShow] = useState(false);
  const { cartList } = useContext(CartContext)
  const CartQuantity = cartList.reduce((total, item) => total + (item.quantity === undefined ? 1 : item.quantity), 0);

  return (
    <>
      <div className="carrito-compras">
        <button className='Cart-Button' onClick={() => setModalShow(true)}>

          <i className="bi bi-cart2" style={{ fontSize: "2rem" }}></i>
          {cartList.length === 0 ? (
            <span className="Cart-Number"></span>
          ) : (
            <span className="Cart-Number">{CartQuantity}</span>
          )}

        </button>
      </div>
      <div style={{ display: "block" }}>
        <ViewCartItems show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
}

export default CarritoCompras;
