import React from 'react'
import rdaLogo from '../RDA-Primary-Logo.png'
import daughertyLogo from '../Daugherty_Logo.png'
import './Display.css'

const Footer = (props) => {

  return (
    <div className='support-wrapper'>
      <div className="support-title"><h4>Supported By:</h4></div>
      <div className='img-wrapper'>
        <img src={rdaLogo} width="200" height='auto' alt='Regional Data Alliance Logo'/>
        <img src={daughertyLogo} width="200" height='auto' style={{ marginLeft: '20px' }} alt='Daugherty Business Solutions Logo'/>
      </div>
    </div>
  )
}

export default Footer