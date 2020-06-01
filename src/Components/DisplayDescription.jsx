import React, { Component } from 'react'
import { descriptions } from '../Constants'
import './Display.css'

class DisplayDescription extends Component {

  render() {
    return (
      <>
        <div className="desc-wrapper">
          {descriptions[this.props.displayDesc]}
        </div>
      </>
    )
  }
}

export default DisplayDescription