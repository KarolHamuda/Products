import React, { Component } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap';

export default class UserModal extends Component {
  constructor(props) {
  super(props)

    this.state ={
      nameValue: null,
      surnameValue: null,
      emailValue: null,
      streetValue: null,
      cityValue: null,
      housenumberValue: null,
      zipValue: null
    }
  }
  
  handleName = (event) => this.setState({nameValue: event.target.value});

  handleSurname = (event) => this.setState({surnameValue: event.target.value});

  handleEmail = (event) => this.setState({emailValue: event.target.value});

  handleStreet = (event) => this.setState({streetValue: event.target.value});

  handleCity = (event) => this.setState({cityValue: event.target.value});

  handleHouseNumber = (event) => this.setState({housenumberValue: event.target.value});

  handleZIP = (event) => this.setState({zipValue: event.target.value});
  

  handleSubmit(e) {
    e.preventDefault();
  }

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
            <Form onSubmit={this.handleSubmit}>
              <Modal.Body>
                <Form.Row>
                  <Col>
                    
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.handleName} required placeholder="First name" />
                  </Col>
                   
                  <Col>
                    
                    <Form.Label>Surame</Form.Label>
                    <Form.Control onChange={this.handleSurname} required placeholder="Last name" />
                    
                  </Col>
                </Form.Row>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={this.handleEmail} required type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Street</Form.Label>
                    <Form.Control onChange={this.handleStreet} required placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={this.handleCity} required />
                </Form.Group>

                <Form.Group controlId="formGridHouse">
                    <Form.Label>HouseNumber</Form.Label>
                    <Form.Control onChange={this.handleHouseNumber} required />
                </Form.Group>

                <Form.Group controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control onChange={this.handleZIP} required />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button type='submit' onClick={()=>console.log(this.state)}>Buy</Button>
              <Button onClick={this.props.onHide}>Cancel</Button>
            </Modal.Footer>
          </Form>
          </Modal>
        );
      }
}
