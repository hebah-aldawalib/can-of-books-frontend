import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class AddBook extends Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handelDisplayAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.handelAddModal}>
            <Form.Group className="mb-3">
              <Form.Label>Book tiltle </Form.Label>
              <Form.Control type="text" name="booktitle" placeholder="Enter Book title:" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Book description:</Form.Label>
              <Form.Control type="text" name="bookDescription" placeholder="Enter book description" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Book Statuse:</Form.Label>
              <Form.Control type="text" name="statusabook" placeholder="Enter the statuse of the book:" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> User Email:</Form.Label>
              <Form.Control type="text" name="email" placeholder="Enter your email:" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create New Book !
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

    )
  }
}

export default AddBook