import React, { Component } from 'react';
import { Row, Col, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import CircleColor from './CircleColor';
import './ColorPicker.css';
import UserModal from '../user/UserModal';
import CapacityPicker from './CapacityPicker';

export default class ColorPicker extends Component {
    constructor(...props) {
        super(...props)

        this.state = {
            backColor: 'white',
            modalShow: false,
            CapacityID: null,
            ColorID: null,
            optionsCapacityID: null,
            optionsColorID: null,
            // finalProductOrder: 
            // [
            //     {
            //         id: this.props.productID,
            //         options: 
            //         [
            //             {
            //                 id: this.state.optionsCapacityID,
            //                 value: this.state.CapacityID
            //             },
            //             {
            //                 id: this.state.optionsColorID,
            //                 value: this.state.ColorID
            //             }
            //         ]
            //     }
            // ]
        }
    }

    setCapacity = (capacity) => this.setState({capacity: capacity})

    setColor = (color) => this.setState({backColor: color})

    setCapacityID = (ID) => this.setState({CapacityID: ID})

    setColorID = (ID) => this.setState({ColorID: ID})
    
    setOptionsColorID = (ID) => this.setState({optionsColorID: ID})
    
    setOptionsCapacityID = (ID) => this.setState({optionsCapacityID: ID})
    

    componentDidUpdate() {
        console.log(this.state)
    }
    
render() {
    const {options, price, productID} = this.props;

    const Colors = (name, values, id) => (
        console.log(id),
         name === "Color" ? 
        (<Row> { 
        values.map((colors, i) => (
            
            <Col key={i}>
                <CircleColor 
                    name={colors.name} 
                    colorID={colors.id} 
                    optionColorID={id} 
                    setColor={this.setColor} 
                    setColorID={this.setColorID} 
                    setOptionsColorID={this.setOptionsColorID}
                />
            </Col>
        ))}
        </Row>
        ) : (
            null
        )
    );

    const Capacity = (name, values, id) => (
        name === "Capacity" ? 
        <Row>
        <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="mr-2" aria-label="First group">
        {(values.map((capacity, i) => (
            
            <div>
                {/* {capacity.name} */}
                <CapacityPicker 
                    name={capacity.name} 
                    capacityID={capacity.id} 
                    optionCapacityID={id} 
                    setCapacity={this.setCapacity} 
                    setCapacityID={this.setCapacityID} 
                    setOptionsCapacityID={this.setOptionsCapacityID}
                />
                </div>
            
        )))}
        </ButtonGroup>
        </ButtonToolbar>
        </Row> : (
            null
        )
    );

    let modalClose = () => this.setState({ modalShow: false });

    return (
        <div>
            {options.map((options, i) => (
                Colors(options.name, options.values, options.id)
            ))}
                <Row>  
                    <Col xs={3}>
                    {options.map((options, i) => ( 
                        Capacity(options.name, options.values, options.id)
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
                            CapacityID={this.state.CapacityID}
                            ColorID={this.state.ColorID}
                            optionCapacityID={this.state.optionsCapacityID}
                            optionColorID={this.state.optionsColorID}
                            show={this.state.modalShow}
                            onHide={modalClose}
                        />
                    </Col>
                </Row>
        </div>
        );
    }
}

