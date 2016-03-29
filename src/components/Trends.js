// CLEANED

import React from 'react'
import ToggleDisplay from 'react-toggle-display'
import { Chart } from 'react-google-charts'
import getRequest from '../getRequest.js'

// components
import NavBar from './NavBar'
import Header from './Header'
import RaisedButton from 'material-ui/lib/raised-button'
import TrendDonationSize from './TrendDonationSize'
import TrendDonationsTime from './TrendDonationsTime'
import TrendTeethFunded from './TrendTeethFunded'

// material-ui helpers
import GetMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import MyTheme from '../theme.js'

export default React.createClass ({
  childContextTypes : {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: GetMuiTheme(MyTheme),
    }
  },

  getInitialState: function () {
    return {
      isTime: false,
      isSize: false,
      isFunded: false
    }
  },

  handleTime: function() {
    this.setState({isTime: true})
    this.setState({isSize: false})
    this.setState({isFunded: false})
  },

  handleSize: function() {
    this.setState({isTime: false})
    this.setState({isSize: true})
    this.setState({isFunded: false})
  },

  handleFunded: function() {
    this.setState({isTime: false})
    this.setState({isSize: false})
    this.setState({isFunded: true})
  },

  render: function() {
    return (
      <div id="Trends">
        <NavBar/>
        <Header header={this.props.recipientID}/>
        <div className="Trends twelve columns">
          <h2>Trends</h2>
          <p>
            Here at Tooth and Pail we have a proud history in these twilight years of the welfare state of ensuring
            there are still options for people to not die of septic shock or malnutrition due to tooth decay.
            Take a look at these graphs to see how many we've been able to help.
            We'll just leave you to imagine the profits we've been able to make from our cut of this funding.
          </p>
          <span className="TrendButtons">
            <RaisedButton label="Donations over time" id="button1" onClick={this.handleTime} />
          </span>
          <span className="TrendButtons">
            <RaisedButton label="Size of Donations" id="button2" onClick={this.handleSize} />
          </span>
          <span className="TrendButtons">
            <RaisedButton label="Treatments Funded" id="button3" onClick={this.handleFunded} />
          </span>
          <ToggleDisplay show={this.state.isFunded}>
            <TrendTeethFunded/>
          </ToggleDisplay>
          <ToggleDisplay show={this.state.isTime}>
            <TrendDonationsTime/>
          </ToggleDisplay>
          <ToggleDisplay show={this.state.isSize}>
            <TrendDonationSize/>
          </ToggleDisplay>
        </div>
      </div>
    )
  }
})
