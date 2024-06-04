// src/components/RegisterModal.js
import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function RegisterModal({ show, handleClose, handleRegisterSubmit }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleRegisterSubmit}>
          <Form.Group controlId="formRegisterUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" name="username" required />
          </Form.Group>
          <Form.Group controlId="formRegisterPassword" style={{ marginTop: '1rem' }}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" name="password" required />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ marginTop: '1rem' }}>
            Register
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default RegisterModal;
