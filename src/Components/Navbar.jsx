import React from 'react'
import './Navbar.css'
import { Toolbar, Typography } from '@material-ui/core'
import { AppBar } from '@material-ui/core'
import STLRegionalFundingMapLogo from '../STLRegionalFundingMapLogo.png'

const Navbar = (props) => {

  return (
    <AppBar position="static" backgroundColor="#1B365D">
      <Toolbar>

        <img src={STLRegionalFundingMapLogo} alt="STL Regional Funding Map Logo" style={{height: '75px', width: 'auto', marginRight: '10px'}} />
        <Typography style={{ flexGrow: 1 }} >
          <h1 className='app-title'>United Way Funding Data</h1>
        </Typography>


      </Toolbar>
    </AppBar>
  )
}

export default Navbar