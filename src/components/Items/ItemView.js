import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';
import DescriptionProduct from './DescriptionProduct';

const ItemView = ({ img, title, description, id, stock, price }) => {
 
  return (
    <>
      <Card className='CardProduct'>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush" >
          <DescriptionProduct description={description} />
        </ListGroup>
        <Card.Body>
        <ItemCount stock={stock} />
          <br/>
          <Button variant="primary" >Agregar al Carrito</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemView;

