import React from 'react'
import './Navbar.css'
import { Toolbar } from '@material-ui/core'
import { AppBar } from '@material-ui/core'

const Navbar = (props) => {

  return (
    <AppBar position="static" backgroundColor="#1B365D">
      <Toolbar>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar