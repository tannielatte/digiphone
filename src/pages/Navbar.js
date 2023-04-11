import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavbarPage() {
  return (
    <div className="navbar-section">
      <Navbar bg="success" expand="lg">
        <Container>
          <Navbar.Brand href="#hero" className="text-light">
            DIGIPHONE
          </Navbar.Brand>
          <Navbar.Toggle className="text-light" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className=" my-2 my-lg-0">
              <NavLink to="/" className="text-light pe-2">
                Home
              </NavLink>
              <NavLink href="#products" className="text-light pe-2">
                Products
              </NavLink>
              <NavLink to="about" className="text-light pe-2">
                About
              </NavLink>
              <NavLink to="dashboard" className="text-light">
                Dashboard
              </NavLink>
              <NavLink to="contact" className="text-light">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
