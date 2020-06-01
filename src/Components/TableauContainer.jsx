import React, { Component } from 'react'
import TableauReport from 'tableau-react'
import './TableauContainer.css'

class TableauContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  options = {
    height: 550,
    width: 1100,
    hideToolbar: true,
    hideTabs: true
  }

  parameter = {
    originalView: 'yes'
  }

  render() {
    return (
      <div className="tableau-wrapper">
        <TableauReport
          url={this.props.url}
          options={this.options}
          parameter={this.parameter}
        />
      </div>
    )
  }
}

export default TableauContainer