import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';



function ItemDetail(props) {


    return (
        
        <Modal  {...props} aria-labelledby="contained-modal-title-vcenter" className='Modal'>
          
            <Modal.Header closeButton style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Modal.Title  >
                    {props.title}
                </Modal.Title>
            </Modal.Header  >
            <Modal.Body className="show-grid">
                <Container className='Modal-Container'>
                    <Row>
                        {props.description}
                    </Row>
                </Container>
            </Modal.Body >
            <Modal.Footer className='Modal-footer'>
                <Button onClick={props.onHide} className='Modal.button'>Close</Button>
            </Modal.Footer>
            
        </Modal>
        
    );
}


export default ItemDetail