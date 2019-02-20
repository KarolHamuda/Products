import React, { Component } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap';

export default class UserModal extends Component {
    render() {
        return (
          <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
              Purchase Order Detail Information
              </Modal.Title>
            </Modal.Header>
            <Form>
            <Modal.Body>
            
                <Form.Row>
                    <Col>
                    
                    <Form.Label>Name</Form.Label>
                        <Form.Control required placeholder="First name" />
                    </Col>
                   
                    <Col>
                    
                    <Form.Label>Surame</Form.Label>
                        <Form.Control required placeholder="Last name" />
                    
                    </Col>
                </Form.Row>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Street</Form.Label>
                    <Form.Control required placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control required />
                </Form.Group>

                <Form.Group controlId="formGridHouse">
                    <Form.Label>HouseNumber</Form.Label>
                    <Form.Control required />
                </Form.Group>

                <Form.Group controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                    <Form.Control required />
                </Form.Group>

            
            </Modal.Body>
            <Modal.Footer>
                <Button type='submit'>Buy</Button>
              <Button onClick={this.props.onHide}>Cancel</Button>
            </Modal.Footer>
            </Form>
          </Modal>
        );
      }
}
