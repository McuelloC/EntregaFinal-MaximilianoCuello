import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';
import Mock from "./Mock.json";
const ItemView =()=>{
    console.log(Mock.map);
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
          <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/react-coderhouse-84503.appspot.com/o/ImageProduct%2Fhamburguesa.jpg?alt=media&token=ff544e57-e17b-4499-8b55-a39a9447b2cf" />
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