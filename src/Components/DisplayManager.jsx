import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import TableauContainer from './TableauContainer'
import DisplayDescription from './DisplayDescription'
import './Display.css'
import DisplayTips from './DisplayTips'
// import ListImpactAreas from './ImpactAreaList'

class DisplayManager extends Component {
  /** Takes in the Descritption of the dashboard/map, the actual dashboard, and tips section for how to interact with the dashboard
   * and updates them based on the select option of what data you would like to see
   */
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <>
        <div className="description-wrapper">
          <DisplayDescription displayDesc={this.props.display} />
        </div>
        <div className='spacer'></div>
        <div className='tableau-list-wrapper'>
          <TableauContainer url={this.props.url} />
          {/* {this.props.display == 'Individual Awards By Topic' ?
            <>
              <ListImpactAreas />
            </> : null} */}
        </div>
        <div className="spacer"></div>
        <div className="tips">
          <DisplayTips displayTips={this.props.display} />
        </div>
        <div className='airtable-title'>
          <h4>Data for all counties:</h4>
        </div>
        <div className="airtable">
          <iframe
            class="airtable-embed"
            src="https://airtable.com/embed/shryTzyC4sxv0DkPH?backgroundColor=green&viewControls=on"
            title='Funding Data Airtable'
            frameborder="0"
            onmousewheel=""
            width="100%"
            height="533"
            style={{ background: "transparent", border: "1px solid #ccc" }}>
          </iframe>
        </div>
        <div className="spacer"></div>
      </>
    )
  }
}

export default DisplayManager