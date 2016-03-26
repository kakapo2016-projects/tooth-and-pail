import React from 'react'
import ReactDOM from 'react-dom'
import ToggleDisplay from 'react-toggle-display';
import {Chart} from 'react-google-charts'
import NavBar from './NavBar'
import Header from './Header'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyTheme from '../theme.js';
import RaisedButton from 'material-ui/lib/raised-button';

import getRequest from '../getRequest.js'


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

  getInitialState: function () {
    return {
      isTime: false,
      isSize: false,
      isFunded: false
    };
  },

  componentDidMount: function() {
    console.log("I mounted!")
    getRequest('http://localhost:3000/trends', this.dbSetState)

  },

  dbSetState: function (err, data) {
    this.setState({trenddonations: data})
    console.log("oh hey this is in the trends file do you read me?", this.state.trenddonations)
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
      <div>
        <NavBar/>
        <Header header={this.props.recipientID}/>
        <div className="Trends twelve columns">
          <h2>Trends</h2>
          <p>Here at Tooth and Pail we have a proud history in these twilight years of the welfare state of ensuring there are still options for people to not die of septic shock or malnutrition due to tooth decay. Take a look at these graphs to see how many we've been able to help. We'll just leave you to imagine the profits we've been able to make from our cut of this funding.</p>
          <span className="TrendButtons">
            <RaisedButton label="Donations over time" onClick={this.handleTime} />
          </span>
          <span className="TrendButtons">
            <RaisedButton label="Size of Donations" onClick={this.handleSize} />
          </span>
          <span className="TrendButtons">
            <RaisedButton label="Treatments Funded" onClick={this.handleFunded} />
          </span>
          <ToggleDisplay show={this.state.isFunded}>
            <TrendTeethFunded />
          </ToggleDisplay>
          <ToggleDisplay show={this.state.isTime}>
            <TrendDonationsTime timedata={this.state.trenddonations}  />
          </ToggleDisplay>
          <ToggleDisplay show={this.state.isSize}>
            <TrendDonationSize sizedata={this.state.trenddonations} />
          </ToggleDisplay>
        </div>
      </div>
      )

  }
  


  
})
