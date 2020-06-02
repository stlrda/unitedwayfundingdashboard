import React, { Component } from 'react';
import DisplayManager from './DisplayManager';
import NavBar from './Navbar'
import Footer from './Footer'
import { dashboardNames, urls } from '../Constants';
import '../App.css'
import { Select, MenuItem } from '@material-ui/core'
import STLRegionalFundingMapLogo from '../STLRegionalFundingMapLogo.png'

class UnitedWayPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenDisplay: "Awards By County",
    }
  }

  handleChange = (e) => {
    return this.setState({ url: urls[e.target.value], chosenDisplay: dashboardNames[e.target.value] })
  }

  render() {
    return (
      <div className="header">
        <NavBar />
        <div className="spacer"></div>
        <div className="funding-logo">
          <img src={STLRegionalFundingMapLogo} alt="STL Regional Funding Map Logo" style={{ height: '150px', width: 'auto', marginTop: '50px' , marginBottom: '50px'}} />
        </div>
        <div className="spacer"></div>
        <div className='about-wrapper'>
          <h4 className='about-title'>About this Project</h4>
          <p className='about-text'>
            The St. Louis Regional Funding Map tracks public and philanthropic funding awards over $50,000 in 2017, capturing almost $1.5 billion dollars and 2,733 distinct awards across hundreds of funders and recipients.
            Below, you can navigate a number of visualizations that break these awards down by geography, funder, and recipient — as well as explore and download the source data to conduct your own analysis.
            These data were collected and cleaned by the St. Louis Regional Data Alliance as part of the <a target="_blank" rel="noopener noreferrer" href="https://helpingpeople.org/communityneeds/">United Way’s Community Needs Assessment</a> released in January 2020.
            Efforts are currently underway to expand these data to add additional years and more granular funding detail.
          </p>
        </div>
        <div className="spacer"><hr /></div>
        <div className="select-wrapper">
          <h4 className='select-header'>Navigate to different boards here: </h4>
          <Select
            onChange={this.handleChange}
            defaultValue={dashboardNames[this.state.chosenDisplay]}
          >
            {Object.keys(dashboardNames).map(name => {
              return <MenuItem value={name}>{name}</MenuItem>
            })}
          </Select>
        </div>
        <DisplayManager display={this.state.chosenDisplay} url={urls[this.state.chosenDisplay]} />
        <Footer />
        
      </div>
    );
  }
}

export default UnitedWayPage;