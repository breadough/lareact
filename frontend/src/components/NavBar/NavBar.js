import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginModal from '../Modal/LoginModal';
import RegisterModal from '../Modal/RegisterModal';

function NavBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    // Add login handling logic here
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    // Add register handling logic here
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to='/'>Shoplifting</Navbar.Brand>
        <Form className="d-flex mx-auto" inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/products'>Products</Nav.Link>
          </Nav>
          <Nav>
            <Button variant='outline-info' className='ml-2' onClick={handleShowLogin}>
              Login
            </Button>
            <Button variant='outline-info' className='ml-2' onClick={handleShowRegister}>
              Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <LoginModal show={showLogin} handleClose={handleCloseLogin} handleLoginSubmit={handleLoginSubmit} />
      <RegisterModal show={showRegister} handleClose={handleCloseRegister} handleRegisterSubmit={handleRegisterSubmit} />
    </>
  );
}

export default NavBar;
