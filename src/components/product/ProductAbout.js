import React, { Component } from 'react'
import { Row, Col, Image} from 'react-bootstrap'
import ColorPicker from './ColorPicker'

export default class ProductAbout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showAbout: true
        }
    }

    componentDidMount() {
        console.log(this.props.options[0].values)
    }

    showColorPicker = () => {
        this.setState({showAbout: !this.state.showAbout})
      }

  render() {
      const { name, image, oldPrice, price, options } = this.props;
      
    return (
        
      <div>
          { this.state.showAbout ? (
        <Row onClick={()=> (
            this.showColorPicker(),
            console.log('lol')
        )}>
            <Col xs={6}>
                {name}
                <Image src={image} fluid />
            </Col>
            <Col xs={6}>
                <Row>
                    <Col xs={12}>
                        Old Price: {oldPrice}
                    </Col>
                    <Col xs={12}>
                        Current Price: {price}
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

