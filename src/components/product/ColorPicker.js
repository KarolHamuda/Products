import React, { Component } from 'react';
import { Row, Col, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import CircleColor from './CircleColor';
import './ColorPicker.css';
import UserModal from '../user/UserModal';
import CapacityPicker from './CapacityPicker';
import myContext from '../context/ContextProvider';

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
            price: null,
            colorPriceModifier: null,
            capacityPriceModifier: null,
            
        }
    }

    componentDidMount() {
        this.setState({price: this.props.price})
    }

    setCapacity = (capacity) => this.setState({capacity: capacity})

    setColor = (color) => this.setState({backColor: color})

    setCapacityID = (ID) => this.setState({CapacityID: ID})

    setColorID = (ID) => this.setState({ColorID: ID})
    
    setOptionsColorID = (ID) => this.setState({optionsColorID: ID})
    
    setOptionsCapacityID = (ID) => this.setState({optionsCapacityID: ID})

    setNewPrice = (newPrice) => this.setState({price: newPrice})
    
    setColorPriceModifier = (newPrice) => this.setState({colorPriceModifier: newPrice})

    setCapacityPriceModifier = (newPrice) => this.setState({capacityPriceModifier: newPrice})

    componentDidUpdate() {
        console.log(this.state)
    }
    
render() {
    const {options, productID} = this.props;

    const Colors = (name, values, id) => (
         name === "Color" ? 
        (<Row> { 
        values.map((colors, i) => (
            
            <Col key={i}>
                <CircleColor 
                    priceModifier={colors.priceModifier}
                    setColorPriceModifier={this.setColorPriceModifier}
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
        
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="First group">
                <Row>
                    {(values.map((capacity, i) => (
                        
                        <Col xs={12}>
                            {/* {capacity.name} */}
                            <CapacityPicker 
                                priceModifier={capacity.priceModifier}
                                setCapacityPriceModifier={this.setCapacityPriceModifier}
                                name={capacity.name} 
                                capacityID={capacity.id} 
                                optionCapacityID={id} 
                                setCapacity={this.setCapacity} 
                                setCapacityID={this.setCapacityID} 
                                setOptionsCapacityID={this.setOptionsCapacityID}
                            />
                            </Col>
                        
                    )))}
                    </Row>
                </ButtonGroup>
            </ButtonToolbar>
         : (
            null
        )
    );

    let modalClose = () => this.setState({ modalShow: false });

    return (
        <myContext.Consumer>
        {(value) => (
        <div>
            {options.map((options, i) => (
                Colors(options.name, options.values, options.id)
            ))}
                <Row>  
                    <Col xs={4} sm={4} className='CapacityColumn'>
                    {options.map((options, i) => ( 
                        Capacity(options.name, options.values, options.id)
                    ))}
                    </Col>
                    <Col xs={4} sm={4} className='Phone' style={{backgroundColor: this.state.backColor}}>
                        <div className='Cellphone'/>
                    </Col>
                    <Col xs={4} sm={4} className='Price'>
                        ${this.state.price + this.state.colorPriceModifier + this.state.capacityPriceModifier}
                    </Col>
                    <Col xs={12}>
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => ((
                                this.setState({ modalShow: true }),
                                value.updateProduct(
                                    productID, 
                                    this.state.optionsCapacityID, 
                                    this.state.CapacityID,
                                    this.state.optionsColorID,
                                    this.state.ColorID,
                                    this.state.price + this.state.colorPriceModifier + this.state.capacityPriceModifier
                                )
                            ))}
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
        )}
        </myContext.Consumer>
        );
    }
}

