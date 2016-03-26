import React from 'react'
import ReactDOM from 'react-dom'
import ToggleDisplay from 'react-toggle-display';
import {Chart} from 'react-google-charts'
import NavBar from './NavBar'
import Header from './Header'

import TrendDonationSize from './TrendDonationSize'
import TrendDonationsTime from './TrendDonationsTime'
import TrendTeethFunded from './TrendTeethFunded'

export default React.createClass ({

  render: function() {

    return (
      <div className="Trends">
        <TrendTeethFunded />
        <TrendDonationsTime />
        <TrendDonationSize />
      </div>
      )

  }
  


  
})
