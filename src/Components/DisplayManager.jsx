import React, { Component } from 'react'
import TableauContainer from './TableauContainer'
import DisplayDescription from './DisplayDescription'
import './Display.css'
import DisplayTips from './DisplayTips'
// import ListImpactAreas from './ImpactAreaList'

const iframeSrc = "https://airtable.com/embed/shryTzyC4sxv0DkPH?backgroundColor=green&viewControls=on";
const iframeAltText = 'Funding Data Airtable'

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
        <div className="about-the-data">
            <h4>About the Data</h4>
          <p>
            All data contained within the Regional Funding Map are publicly available, and the RDA makes no claim to license over their use or re-use. 
            Whenever possible, the St. Louis Regional Data Alliance referenced direct funding source information, including those published by the IRS and <a target="_blank" href="http://usaspending.gov">usaspending.gov</a>. 
            Additional data was collected and/or confirmed using the Illinois Catalog of State Financial Assistance, Missouri Accountability Portal, 
            United Way Greater St. Louis 2-1-1, Candid, Missouri Department of Elementary and Secondary Education, Illinois State Board of Education, 
            ProPublica Nonprofit Explorer, National Taxonomy of Exempt Entities, annual reports, financial statements, and data requests. 
            These data are not intended for commercial or solicitation purposes. 
            The RDA makes these data available as-is and disclaims all implied or express warrantees of any kind with regard to the data. Please contact <a href="mailto:rda@umsl.edu">rda@umsl.edu</a> with additional questions
          </p>
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
            src={iframeSrc}
            title={iframeAltText}
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