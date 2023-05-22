import React, { useContext } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { CartContext, DataContext, CountContext } from '../../Context/index';
import { useNavigate } from 'react-router-dom';




const ItemView = ({ filter }) => {
  const { addToCart } = useContext(CartContext)
  const { data } = useContext(DataContext);
  const { count } = useContext(CountContext)


  let filterData = data;
  const navigate = useNavigate();
  const handlerClickurl = (id) => {
    navigate(`/productos/${id}`);

  }



  if (filter !== 'Todo') {
    filterData = data.filter(item => item.keyFilter.includes(filter));
  }

  return (
    <>
      {filterData.map(item => (
        <Card key={item.id} className='CardProduct'>
          <Card.Img variant="top" src={item.pictureURL} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <Button
              variant="primary"
              onClick={() => handlerClickurl(item.id)}
            >
              Detalles
            </Button>
          </ListGroup>
          <Card.Body>
            <Card.Text> Precio: ${item.price}</Card.Text>
            <ItemCount stock={item.Stock} id={item.id} />
            <br />
            <Button
              onClick={() => addToCart(item.title, count[item.id], item.id, item.price)}
            >
              Agregar al Carrito
            </Button>
          </Card.Body>
        </Card>

      ))}

    </>
  );
};

export default ItemView;
