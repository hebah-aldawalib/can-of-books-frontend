import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class UpdateBook extends Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handelDisplayUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update books</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.handelUpdateModal}>
            <Form.Group className="mb-3">
              <Form.Label> Title: </Form.Label>
              <Form.Control type="text" name="booktitle" placeholder="Enter book Name:" defaultValue={this.props.selectedbookDataObj.title} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> The description:</Form.Label>
              <Form.Control type="text" name="bookdescription" placeholder="Enter the book description:" defaultValue={this.props.selectedbookDataObj.description} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> The status:</Form.Label>
              <Form.Control type="text" name="bookstatus" placeholder="Enter the book status:" defaultValue={this.props.selectedbookDataObj.status} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>The email: </Form.Label>
              <Form.Control type="text" name="email" placeholder="Enter the email:" defaultValue={this.props.selectedbookDataObj.email} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update!
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

    )
  }
}

export default UpdateBook;