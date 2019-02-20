import React, { Component } from 'react';
import { Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import CircleColor from './CircleColor';
import './ColorPicker.css';
import UserModal from '../user/UserModal';


export default class ColorPicker extends Component {
    constructor(...props) {
        super(...props)

        this.state = {
            backColor: 'white',
            modalShow: false
        }
    }

    setColor = (color) => {
        this.setState({backColor: color})
    }

    componentDidUpdate() {
        console.log(this.state)
    }
    
render() {
    const {options, price} = this.props;

    const Colors = (name, values) => (
         name === "Color" ? 
        (<Row> {
        values.map((colors, i) => (
            
            <Col key={i}>
            
                <CircleColor name={colors.name} setColor={this.setColor} />
            
            </Col>
        ))}
        </Row>
        ) : (
            null
        )
    );

    const Capacity = (name, values) => (
         name === "Capacity" ? 
         <Row>
        {(values.map((capacity, i) => (
            
                <Col className='CapacityItem' key={i}>
                    {capacity.name}
                </Col>
            
        )))}
        </Row> : (
            null
        )
    );

    let modalClose = () => this.setState({ modalShow: false });

    return (
        <div>
            {options.map((options, i) => (
                Colors(options.name, options.values)
            ))}
                <Row>  
                    <Col xs={3}>
                    {options.map((options, i) => ( 
                        Capacity(options.name, options.values)
                    ))}
                    </Col>
                    <Col xs={6} className='Phone' style={{backgroundColor: this.state.backColor}}>
                        <div className='Cellphone'/>
                    </Col>
                    <Col xs={3} className='Price'>
                        ${price}
                    </Col>
                    <Col xs={12}>
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => this.setState({ modalShow: true })}
                        >
                            Buy
                        </Button>

                        <UserModal
                            show={this.state.modalShow}
                            onHide={modalClose}
                        />
                    </Col>
                </Row>
        </div>
        );
    }
}

