import React, { useContext } from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../../Context';
import Cart2 from "../../assets/Imagenes/SadCart.png"


function ViewCartItems(props) {
  const { cartList, deleteItem, removeList,cartPrice } = useContext(CartContext);
  let cartData = cartList;
  let vuelta1 = 1;

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Shop Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        {cartData.length === 0 ? (
          <div className='Carrito-Vacio'>
            <h3>Aun no hay nada en tu Carrito!</h3>
            <img src={Cart2} alt="Carrito-Vacio" className='Carrito-Vacio-IMG' />
          </div>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Importe</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item) => (

                <tr key={item.id}>
                  <td>{item.item}</td>
                  {item.quantity === undefined ? (
                    <td>{vuelta1}</td>
                  ) : (<td>{item.quantity}</td>)}

                  <td>${item.price}</td>
                  <td>
                    <Button variant="danger" onClick={() => deleteItem(item.id)}>
                      <i className="bi bi-trash3"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
           
            <h3> Total: ${cartPrice}</h3>
          </Table>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => removeList()}>Vaciar Carrito</Button>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewCartItems;
