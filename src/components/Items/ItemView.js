import React, { useContext,  } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { DataContext } from "../../Context/DataContext";
import { IdContext } from "../../Context/IdContext";
import { useNavigate} from "react-router-dom";


const ItemView = ({ filter }) => {
  const { data } = useContext(DataContext);
  const { handleSelectItem } = useContext(IdContext);
  let filterData = data;

  if (filter !== 'Todo') {
    filterData = data.filter(item => item.keyFilter.includes(filter));
  }

const navigate = useNavigate();

  const handleProductDetails = (id) => {
    handleSelectItem(id);
   
 navigate(`/productos/${id}`);
    
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
              onClick={() => handleProductDetails(item.id)}
            >
              Detalles
            </Button>
          </ListGroup>
          <Card.Body>
            <Card.Text> Precio: ${item.price}</Card.Text>
            <ItemCount stock={item.Stock} />
            <br />
            <Button>Agregar al Carrito</Button>
          </Card.Body>
         
        </Card>
        
      ))}
    </>
  );
};

export default ItemView;
