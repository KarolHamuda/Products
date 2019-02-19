import React, { Component } from 'react'
import './CircleColor.css'

export default class CircleColor extends Component {
    constructor(props) {
        super(props)
    }
  render() {
      const { name } = this.props;
    return (
      <button style={{backgroundColor: name}} className='CircleColor'/>
    )
  }
}
