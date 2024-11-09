import "../home/home.css";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="container-fluid titleNav">
      <Container>
        <Navbar.Brand href="Home" className="brand"> <Nav.Link href="/">JOHN DOE </Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic" /> 
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="Services">Services</Nav.Link>
            <Nav.Link href="Realisations">Réalisations</Nav.Link>
            <Nav.Link href="Blog">Blog</Nav.Link>
            <Nav.Link href="Contact">Me contacter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}





export default Header;