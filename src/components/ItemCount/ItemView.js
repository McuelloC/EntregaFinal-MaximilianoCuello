import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import burguer from "../Imagenes/hamburguesa.jpg"
import ItemCount from './ItemCount';
const ItemView =()=>{
    
    return (
        <>
        <Card style={{
             width: '15rem',
             height: '10 rem',
             textshadow: "none",
             textAlign: "center",
             textDecoration: "none",
             backgroundColor:"rgba(255, 255, 255, 0.2)",
          }}>
          <Card.Img variant="top" src={burguer} />
          <Card.Body>
            <Card.Title s>Hamburguesa con Papas</Card.Title>
        
          </Card.Body>
          <ListGroup className="list-group-flush" >
            <ItemCount/>
        
            
          </ListGroup>
          <Card.Body>
            <Button variant="primary">Agregar al Carrito</Button>
            
          </Card.Body>
        </Card>

    </>
     );
}
export default ItemView;