import 'bootstrap-icons/font/bootstrap-icons.css';
import "./CartWidget.css";
import { useContext } from 'react';
import { CartContext } from '../../Context';
import { useNavigate } from 'react-router-dom';



const CarritoCompras = () => {

  const { cartList } = useContext(CartContext)
  const navtocart = useNavigate();
  const CartQuantity = cartList.reduce((total, item) => total + (item.quantity === undefined ? 1 : item.quantity), 0);
  const handlecartbtn = () => {
    navtocart(`/cart`)
  }

  return (
    <>
      <div className="carrito-compras">
        <button className='Cart-Button' onClick={() => handlecartbtn()}>

          <i className="bi bi-cart2" style={{ fontSize: "2rem" }}></i>
          {cartList.length === 0 ? (
            <span className="Cart-Number"></span>
          ) : (
            <span className="Cart-Number">{CartQuantity}</span>
          )}

        </button>
      </div>
      <div style={{ display: "block" }}>

      </div>
    </>
  );
}

export default CarritoCompras;
