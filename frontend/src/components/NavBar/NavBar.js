import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          {/* <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Category 3</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;