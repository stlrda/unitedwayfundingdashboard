import React, { Component } from 'react';
import DisplayManager from './DisplayManager';
import NavBar from './Navbar'
import Footer from './Footer'
import { dashboardNames, urls } from '../Constants';
import '../App.css'
import { Select, MenuItem } from '@material-ui/core'

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
        <div className='about-wrapper'>
          <h4 className='about-title'>About</h4>
          <p className='about-text'>
            {/* This report is a summary of the distribution of the year 2017 and the funding throughout the 16 county region that falls within United Way's own funding region.
            This allows you to look at who else, besides United Way, is also funding this region in the same impact areas as United Way.
            These impact areas include; Basic Needs, Financial Stability, Foster Learning, Improve Health, Strengthen Communities, and Others.
            Within these impact areas are topics that further specify what a given grant/award was used for.
            Each dashboard of this report will take you through different levels of detail, so you can explore the data whichever way you like.
            You may look at an overall summary as on this page, or the amount of each award for the organization that received it.
            This report will help provide not only a better idea of which organizations are receiving funding and how much, but also which organizations are providing the funding. */}
            The St. Louis Regional Funding Map tracks public and philanthropic funding awards over $50,000 in 2017, capturing almost $1.5 billion dollars and 2,735 distinct awards across hundreds of funders and recipients. 
            Below, you can navigate a number of visualizations that break these awards down by geography, funder, and recipient — as well as explore and download the source data to conduct your own analysis. 
            These data were collected and cleaned by the St. Louis Regional Data Alliance as part of the United Way’s Community Needs Assessment released in January 2020. 
            Efforts are currently underway to expand these data to add additional years and more granular funding detail.
          </p>
        </div>
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