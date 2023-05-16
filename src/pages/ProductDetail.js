import React, { useContext } from 'react';
import { IdContext } from '../Context/IdContext';
import { Card, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { DataContext } from '../Context/DataContext';

function ProductDetail(props) {
  const { data } = useContext(DataContext);
  const { selectedItemId } = useContext(IdContext);

  const id = props.id || selectedItemId;

  const filterData = data.find(item => item.id === id);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    textAlign: 'center',
    textShadow: 'none',
    width: '400px',
    padding: '30px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  };

  return (
    <div style={containerStyle}>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={filterData.pictureURL} style={imageStyle} />

        <Card.Body>
          <Card.Title>{filterData.title}</Card.Title>
          <Card.Text>{filterData.description}</Card.Text>
          <span> Precio: ${filterData.price}</span>
        </Card.Body>
        <Card.Footer>
          <NavLink as={Link} to="/productos">
            <Button variant="primary">Volver a Productos</Button>
          </NavLink>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ProductDetail;
