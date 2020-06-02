import React from 'react'
import rdaLogo from '../RDA-Primary-Logo.png'
import daughertyLogo from '../Daugherty_Logo.png'
import unitedWayLogo from '../United-Way.png'
import './Display.css'

const Footer = (props) => {

  return (
    <div className="footer">
      <div className='support-wrapper'>
        <p>
          Data were collected, cleaned, and analyzed by the <a target="_blank" rel="noopener noreferrer" href="http://stldata.org">St. Louis Regional Data Alliance</a>, with Liz Deichmann, the RDA’s Data and Research Manager, leading these efforts throughout 2019.
        Data visualizations were created in partnership with <a target="_blank" rel="noopener noreferrer" href="http://daugherty.com">Daugherty Business Solutions</a>, which volunteered consultant time to construct the Tableau dashboard and user interface. <a target="_blank" rel="noopener noreferrer" href="http://helpingpeople.org">United Way of Greater St. Louis</a> was a pivotal supporter and thought partner throughout this process
        </p>
        <img src={rdaLogo} width="220" height='120' style={{ marginLeft: '20px' }} alt='Regional Data Alliance Logo' />
        <img src={daughertyLogo} width="200" height='130' style={{ marginLeft: '20px' }} alt='Daugherty Business Solutions Logo' />
        <img src={unitedWayLogo} width="200" height='140' style={{ marginLeft: '20px' }} alt="United Way of Saint Louis Logo" />
      </div>
    </div>

  )
}

export default Footer