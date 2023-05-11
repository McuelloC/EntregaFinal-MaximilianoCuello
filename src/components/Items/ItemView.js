import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';
import React, { useContext,useState } from "react";
import { DataContext } from "../../Context/DataContext";
import ItemDetail from './ItemDetail';

const ItemView = ({ filter }) => {
  const [modalShow, setModalShow] = useState(false);
  const [productDetails, setProductDetails] = useState({
    title: '',
    price: 0,
    description: ''
  });
  const { data } = useContext(DataContext);
  let filterData = data;

  if (filter !== 'Todo') {
    filterData = data.filter(item => item.keyFilter.includes(filter));
  }

  const handleProductDetails = (details) => {
    setProductDetails(details);
    setModalShow(true);
  }

  return (
    <>
      {filterData.map(item => (
        <Card key={item.id} className='CardProduct'>
          <Card.Img variant="top" src={item.pictureURL} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush" >
           <Button variant="primary" onClick={() => handleProductDetails({
              title: item.title,
              price: item.price,
              description: item.description
            })}>Detalles</Button>
          </ListGroup>
          <Card.Body>
            <Card.Text> Precio: ${item.price}</Card.Text>
            <ItemCount stock={item.Stock} />
            <br/>
            <Button >Agregar al Carrito</Button>
          </Card.Body>
        </Card>
      ))}
      <ItemDetail
        title={productDetails.title}
        price={productDetails.price}
        description={productDetails.description}
        show={modalShow}
        onHide={() => setModalShow(false)}  
      />
    </>
  );
};

export default ItemView;
