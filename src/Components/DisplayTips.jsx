import React, { Component } from 'react'
import { tips, downloadTips } from '../Constants'
import './Display.css'

class DisplayTips extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="tips">
        <div className='tip-header'>
          <h3>Tips for Navigating</h3>
        </div>
        <div className='tip-list'>
          <ul>
            {tips[this.props.displayTips].map(tip => {
              return <li>{tip}</li>
            })}
          </ul>
        </div>
        <div className='tip-header'>
          <h3>Tips for Downloading</h3>
        </div>
        <div className='tip-list'>
          <ol>
            {downloadTips[this.props.displayTips].map(tip => {
              return <li>{tip}</li>
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default DisplayTips