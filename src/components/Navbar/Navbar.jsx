import React from 'react';
import { Navbar,  Nav} from 'react-bootstrap';
import CardWidget from '../CartWidget/CardWidget';
import { Link, Outlet } from 'react-router-dom';


function NavBar() {
  return (
    <>
      <Navbar className="navBg" variant='dark' expand="lg" >
      
          <Navbar.Brand as={Link} to="/" className='bonanav' style={{ fontFamily: 'Love Light', fontWeight: 'bold', fontSize: 40  }}>Bona Comida</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-6">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Productos">Productos</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Contacto</Nav.Link>
              
            </Nav>
            <CardWidget />
          </Navbar.Collapse>
       
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}

export {NavBar};
