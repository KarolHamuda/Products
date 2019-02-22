import React, { Component } from 'react'
import { Row, Col, Image} from 'react-bootstrap'
import ColorPicker from './ColorPicker'
import './ProductAbout.css'

export default class ProductAbout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showAbout: true
        }
    }

    showColorPicker = () => {
        this.setState({showAbout: !this.state.showAbout})
    }

  render() {

      const { name, image, oldPrice, price } = this.props;

    return (  
      <div>
          { this.state.showAbout ? (
            <Row onClick={()=> this.showColorPicker()}>
                <Col xs={6}>
                    {name}
                    <Image src={image} fluid />
                </Col>
                <Col xs={6} className='PriceDetails'>
                    <Row>
                        <Col xs={12} className='OldPrice'>
                            ${oldPrice}
                        </Col>
                        <Col xs={12} className='CurrentPrice'>
                            ${price}
                        </Col>
                    </Row>
                </Col>
            </Row> 
        ) : (
            <ColorPicker {...this.props}/>
        )}
      </div> 
    )
  }
}

