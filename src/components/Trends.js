import React from 'react'
import ReactDOM from 'react-dom'
import ToggleDisplay from 'react-toggle-display';
import {Chart} from 'react-google-charts'
import NavBar from './NavBar'
import Header from './Header'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyTheme from '../theme.js';
import RaisedButton from 'material-ui/lib/raised-button';


import TrendDonationSize from './TrendDonationSize'
import TrendDonationsTime from './TrendDonationsTime'
import TrendTeethFunded from './TrendTeethFunded'

export default React.createClass ({

  childContextTypes : {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyTheme),
    };
  },

  render: function() {

    return (
      <div>
        <NavBar/>
        <Header header={this.props.recipientID}/>
        <div className="Trends twelve columns">
          <h2>Trends</h2>
          <p>Here at Tooth and Pail we have a proud history in these twilight years of the welfare state of ensuring there are still options for people to not die of septic shock or malnutrition due to tooth decay. Take a look at these graphs to see how many we've been able to help. We'll just leave you to imagine the profits we've been able to make from our cut of this funding.</p>
          <span className="TrendButtons">
            <RaisedButton label="Donations over time"/>
          </span>
          <span className="TrendButtons">
            <RaisedButton label="Size of Donations" />
          </span>
          <span className="TrendButtons">
            <RaisedButton label="Treatments Funded" />
          </span>
          <TrendTeethFunded />
          <TrendDonationsTime />
          <TrendDonationSize />
        </div>
      </div>
      )

  }
  


  
})
