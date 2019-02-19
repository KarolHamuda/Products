import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CircleColor from './CircleColor';
import './ColorPicker.css';


export default class ColorPicker extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        console.log(this.props)
    }
    
render() {
    return (
        <div>
            {this.props.options.map((options, i) => (
                <Row>
                    <Col xs={12}>
                    <Row>
                    
                    { options.name === "Color" ? 
                        (options.values.map((colors, i) => (
                            <Col>
                                <CircleColor name={colors.name} />
                            </Col>
                        ))) : (
                            ''
                        )
                    }
                    </Row>
    
                    </Col>
                    <Col xs={3} className='Capacity'>

                    { options.name === "Capacity" ? 
                        (options.values.map((capacity, i) => (
                            <Col className='CapacityItem'>
                                {capacity.name}
                            </Col>
                        ))) : (
                            ''
                        )
                    }

                    </Col>
                    <Col xs={6}>

                    </Col>
                    <Col xs={3}>
                    
                    </Col>
                    <Col xs={12}>
                        {this.props.price}
                    </Col>
                    
                </Row>
            ))}
        </div>
        );
    }
}

