import React from 'react';
import { Navbar,  Nav} from 'react-bootstrap';
import CarritoCompras from './CartWidget/CarritoCompras';
import { Link, Outlet } from 'react-router-dom';


function NavBar1() {
  return (
    <>
      <Navbar className="navBg" variant='dark' expand="lg" >
      
          <Navbar.Brand as={Link} to="/" className='bonanav' style={{ fontFamily: 'Love Light', fontWeight: 'bold', fontSize: 40  }}>Bona Comida</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-6">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Contacto</Nav.Link>
            </Nav>
            <CarritoCompras/>
          </Navbar.Collapse>
       
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}

export default NavBar1;
