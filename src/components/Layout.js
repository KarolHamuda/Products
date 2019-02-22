import React, { Component } from 'react';
import Products from './product/Products';
import { Row, Col } from 'react-bootstrap';
import './Layout.css'

export class Layout extends Component {

  render() {
    return (
      <Row className='LayoutRow'>
        <Col xs={0} sm={2} md={3}/>
        <Col xs={12} sm={8} md={6}>
          <Products/>
        </Col>
        <Col xs={0} sm={2} md={3}/>
      </Row>
    )
  }
}
