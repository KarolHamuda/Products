import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import myContext from '../context/ContextProvider';
import { RingLoader } from 'react-spinners';

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
                    <Col xs={6} key={i}>
                      <Image src={products.image} rounded />
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
