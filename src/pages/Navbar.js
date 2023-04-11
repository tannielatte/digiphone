import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarPage() {
  return (
    <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Brand href="#hero" className="text-light">DIGIPHONE</Navbar.Brand>
        <Navbar.Toggle className="text-light"/>
        <Navbar.Collapse className="justify-content-end" >
          <Nav className=" my-2 my-lg-0">
            <Nav.Link href="#home" className="text-light pe-2">Home</Nav.Link>
            <Nav.Link href="#products" className="text-light pe-2">Products</Nav.Link>
            <Nav.Link href="#about" className="text-light pe-2">About</Nav.Link>
            <Nav.Link href="#dashboard" className="text-light">Dashboard</Nav.Link>
            <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
