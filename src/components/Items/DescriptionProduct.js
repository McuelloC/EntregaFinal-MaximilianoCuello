import Accordion from 'react-bootstrap/Accordion';
import "./Items.css"

function DescriptionProduct(props) {
  return (
    <Accordion className='AccordionDescription' defaultActiveKey="0">
      <Accordion.Item className="AccordionBody" eventKey="1">
        <Accordion.Header>Ingredientes</Accordion.Header>
        <Accordion.Body className="AccordionBody">
          {props.description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default DescriptionProduct;