// src/components/LoginModal.js
import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function LoginModal({ show, handleClose, handleLoginSubmit }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLoginSubmit}>
          <Form.Group controlId="formLoginUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" name="username" required />
          </Form.Group>
          <Form.Group controlId="formLoginPassword" style={{ marginTop: '1rem' }}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" name="password" required />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ marginTop: '1rem' }}>
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
