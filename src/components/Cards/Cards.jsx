import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import delivery from "../Imagenes/delivery.jpg"
import catering from "../Imagenes/catering.jpg"
import viandas from "../Imagenes/viandas.jpg";

const Cards = () => {
    const cardStyle = {
        margin: "30px",
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Fondo más transparente
        textAlign: "center",
        textShadow: "none" // Sacar la sombra a las letras
      };

  return (
    <CardGroup>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={delivery} />
        <Card.Body>
          <Card.Title>Delivery</Card.Title>
          <Card.Text>
            Enviamos viandas a domicilio. ¡Disfruta de una alimentación saludable y conveniente en la comodidad de tu hogar!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Go somewhere</Button>
        </Card.Footer>
      </Card>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={catering} />
        <Card.Body>
          <Card.Title>Cataring para Eventos</Card.Title>
          <Card.Text>
            Hacemos catering para tus eventos, ¡contáctanos y disfruta de nuestra deliciosa comida en tu próxima celebración!{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Go somewhere</Button>
        </Card.Footer>
      </Card>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={viandas} />
        <Card.Body>
          <Card.Title>Programa de Viandas</Card.Title>
          <Card.Text>
            ¡Disfruta de deliciosas comidas cada semana o cada mes con Bona Comida! Ofrecemos planes de viandas semanales y mensuales para que puedas disfrutar de comida de alta calidad sin tener que preocuparte por cocinar. ¡Prueba nuestros planes hoy mismo!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Go somewhere</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;
