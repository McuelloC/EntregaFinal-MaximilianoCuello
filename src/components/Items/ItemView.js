import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';

import DescriptionProduct from './DescriptionProduct';
import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

const ItemView = () => {
  const { data } = useContext(DataContext);
  
  return (
    <>
      {data.map(item => (
        <Card key={item.id} className='CardProduct'>
          <Card.Img variant="top" src={item.pictureURL} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush" >
            <DescriptionProduct description={item.description} />
          </ListGroup>
          <Card.Body>
            <ItemCount stock={item.Stock} />
            <br/>
            <Button variant="primary" >Agregar al Carrito</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default ItemView;
