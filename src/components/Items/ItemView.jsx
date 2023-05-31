import React, { useContext } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { CartContext, DataContext, CountContext } from '../../Context/index';
import { useNavigate } from 'react-router-dom';
import {DropdownFilter} from './DropdownFilter';




const ItemView = ({ filter }) => {
  const { addToCart } = useContext(CartContext)
  const { data } = useContext(DataContext);
  const { count } = useContext(CountContext)
  let filterData = data;
  const navigate = useNavigate();
  const handlerClickurl = (id) => {
    navigate(`/Productos/${id}`);

  }

  if (filter !== 'Todo') {
    filterData = data.filter(item => item.keyFilter.includes(filter));
  }

  return (
    <>
    <DropdownFilter/>
      <div className="container-Product">
        <div className='row '>
          {filterData.map(item => (
            <Card key={item.id} className='CardProduct'>
              <Card.Img variant="top" src={item.pictureURL} />
              <Card.Body>
                <Card.Title className='CardTitle'>{item.title}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <Button
                  variant="primary"
                  onClick={() => handlerClickurl(item.Firebaseid)}
                >
                  Detalles
                </Button>
              </ListGroup>
              <Card.Body>
                <Card.Text> <h4> Precio: ${item.price}</h4> </Card.Text>
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
        </div>
      </div>
    </>
  );
};

export default ItemView;
