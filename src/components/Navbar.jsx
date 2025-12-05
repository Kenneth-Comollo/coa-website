import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const SiteNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Condo Association</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Documents</Nav.Link>
            <Nav.Link href="#">Calendar</Nav.Link>
            <Nav.Link href="#">Directory</Nav.Link>
            <Nav.Link href="#">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
