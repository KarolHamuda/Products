import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import myContext from '../context/ContextProvider';
import { RingLoader } from 'react-spinners';
import './Products.css'

export default class Products extends Component {
  render() {
    return (
    <myContext.Consumer>
      {(value) => (
        <Container>
            <Row>
                
                {value.state.isLoading ? (
                  <div className='sweet-loading'>
                    <RingLoader
                        sizeUnit={"px"}
                        size={300}
                        color={'#123abc'}
                        loading={value.state.isLoading}
                    />
                  </div> 
                ) : (
                  value.state.products.map((products, i) => (
                    <Col xs={5} key={i} className='DisplayedProduct'>
                       <Row>
                          <Col xs={6}>
                            {products.name}
                            <Image src={products.image} fluid />
                          </Col>
                          <Col xs={6}>
                            <Row>
                              <Col xs={6}>
                                Old Price: {products.oldPrice}
                              </Col>
                              <Col xs={6}>
                                Current Price: {products.price}
                              </Col>
                            </Row>
                          </Col>
                        </Row> 
                    </Col>
                  ))
                )}
                
                  
                
            </Row>
        </Container>
        )}
    </myContext.Consumer>
    )
  }
}
