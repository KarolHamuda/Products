import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class CapacityPicker extends Component {
  render() {
    const { 
        priceModifier,
        setCapacityPriceModifier,
        name, 
        capacityID, 
        optionCapacityID, 
        setOptionsCapacityID, 
        setCapacityID,
        setCapacity
    } = this.props
    return (
        <Button onClick={()=>
            (
                setCapacity(name),
                setCapacityID(capacityID),
                setOptionsCapacityID(optionCapacityID),
                setCapacityPriceModifier(priceModifier)
            )
        }>{name}</Button>
    )
  }
}
