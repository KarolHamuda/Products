import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

export default class CapacityPicker extends Component {
  render() {
      const { 
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
                setOptionsCapacityID(optionCapacityID)
            )
        }>{name}</Button>
    )
  }
}
