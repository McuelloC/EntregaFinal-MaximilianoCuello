import React, { useContext, useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink, Link, useParams } from 'react-router-dom';
import { DataContext,CartContext,CountContext } from '../Context';
import ItemCount from '../components/Items/ItemCount';


function ProductDetail() {
  const { id } = useParams();
  const { data } = useContext(DataContext);
  const {addToCart} = useContext(CartContext)
  const {count} = useContext(CountContext)
  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    const filteredItem = data.find(item => item.id === parseInt(id));
    setFilterData(filteredItem);
  }, [data, id]);

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

  if (!filterData) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        padding: '20px',
      }}>

        <h1>El ID Indicado es incorrecto</h1>
        <NavLink as={Link} to="/productos">
          <Button variant="primary" >Volver a Productos</Button>
        </NavLink>
      </div>
    );
  }

  return (
    <>
      <div style={containerStyle}>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={filterData.pictureURL} style={imageStyle} />

          <Card.Body>
            <Card.Title>{filterData.title}</Card.Title>
            <Card.Text>{filterData.description}</Card.Text>
            <h3> Precio: ${filterData.price}</h3>
            <ItemCount stock={filterData.Stock} id={filterData.id}/>
            <hr />
            <Button onClick={() => addToCart(filterData.title, count[filterData.id], filterData.id, filterData.price)}
            > Agregar al Carrito</Button>
          </Card.Body>
          <Card.Footer>
            <NavLink as={Link} to="/productos">
              <Button variant="primary">Volver a Productos</Button>
            </NavLink>


          </Card.Footer>
        </Card>
      </div>

    </>
  );
}

export { ProductDetail };
