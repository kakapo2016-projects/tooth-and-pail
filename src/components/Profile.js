// CLEANED

import React from 'react'
import cookie from 'react-cookie'

// display components
import NavBar from './NavBar'
import Header from './Header'
import HBar from './HBar'
import ProfilePhoto from './ProfilePhoto'
import ProfileName from './ProfileName'
import ProgressBar from './ProgressBar'
import DonateForm from './DonateForm'
import SobStory from './SobStory'
import SocialSharing from './SocialSharing'
import Paper from 'material-ui/lib/paper'
import RateMe from './RateMe'

// material-ui helpers
import GetMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import MyTheme from '../theme.js';

// database functions
import postRequest from '../postRequest.js'
import getRequest from '../getRequest.js'
import putRequest from '../putRequest.js'

export default React.createClass({
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
      amountDonated: 0,
      name: ""
    }
  },

  handleDonation: function (donorID, recipientID, amount) {
    let data = {
      donorID: donorID,
      recipientID: recipientID,
      amount: amount
    }

  postRequest('http://localhost:3000/donations', data, (err, res) => {
    if (err) { console.log("ERROR!", err); return }
      getRequest(`http://localhost:3000/donations/recipient/${recipientID}`, (err, resp) => {
        if (err) { console.log("ERROR!", err); return }
        this.donationSetState(resp, recipientID)
      })
    })
  },

  componentDidMount: function () {
    getRequest(`http://localhost:3000/recipients/${this.props.params.recipientID}`, (err, resp) => {
      if (err) { console.log("ERROR GETTING PROFILES!", err); return }
      this.setState({
        target: resp.target,
        name: resp.name,
        imgURL: resp.imgURL,
        sobStory: resp.sobStory,
        rating: resp.rating
      })
      getRequest(`http://localhost:3000/donations/recipient/${this.props.params.recipientID}`, (err, resp) => {
        if (err) { console.log("ERROR GETTING SPECFIC PROFILE!", err); return }
        this.donationSetState(resp, this.props.params.recipientID)
      })
    })
  },

  updateRecipientReceived: function (totalReceived) {
    let recipientData = {received : totalReceived }
    putRequest(`http://localhost:3000/recipients/${this.props.params.recipientID}`, recipientData, (err, res) => {
      if (err) { console.log("ERROR UPDATING RECIPIENT!", err); return }
    })
  },

  updateRecipientRating: function (newRate){
    let donor = cookie.load('donorID')
    let ratingData = {
      recipientID: this.props.params.recipientID,
      donorID: donor,
      rating: newRate
    }

  getRequest(`http://localhost:3000/ratings/${donor}/recipient/${this.props.params.recipientID}`, (err, resp) => {
    if (err) { console.log("ERROR GETTING RATINGS!", err); return }
    let cnt = 0
    if (resp.length > 0) {
      alert("You have already rated these teeth - Thank you!")
    } else {
      //  do a post to create a new record
      postRequest('http://localhost:3000/ratings', ratingData, (err, respo) => {
        if (err) { console.log("ERROR!", err); return }
        // now getting all the ratings for this recipient
        getRequest(`http://localhost:3000/ratings/${this.props.params.recipientID} `, (err, resp) => {
          if (err) { console.log("ERROR!", err); return }
          // get a total value, get the count
          let totalValue = 0, count = 0
          resp.map(function (x) {
            totalValue += x.rating
            count++
          })
          // find the average by dividing by count then round
          var avrating = Math.floor(totalValue / count)
          // update the state
          this.setState({rating: avrating})
          // update the recipients record in the database
          let recipientData = { rating: avrating }
          putRequest(`http://localhost:3000/recipients/${this.props.params.recipientID}`, recipientData, (err, res) => {
            if (err) { console.log("ERROR!", err); return }
          })
        })
      })}
    })
  },

  donationSetState: function (donations, recipientID) {
    getRequest(`http://localhost:3000/recipients/${this.props.params.recipientID}`, (err, resp) => {
      if (err) { console.log("ERROR!", err); return }
      var totalReceived = 0
      donations.map(function (x){
        totalReceived += x.amount
      })
      this.setState({target: resp.target, received: totalReceived, name: resp.name})
      this.updateRecipientReceived(totalReceived)
    })
  },

  render: function () {
    return (
      <div className='profile'>
        <div>
          <NavBar/>
          <Header/>
          <div className="row">
            <div className="six columns">
              <ProfilePhoto imgurl={this.state.imgURL}/>
              <br />
              <HBar target={this.state.target} received={this.state.received} barColor='#b71c1c'/>
            </div>
            <div className="six columns">
              <ProfileName name={this.state.name}/>
              <ProgressBar target={this.state.target} received={this.state.received}/>
              <br/>
              <DonateForm
                handleDonation={this.handleDonation}
                recipientID={this.props.params.recipientID}
                target={this.state.target}
                received={this.state.received}/>
              <br/>
              
            </div>
            <div className="six columns">
              <RateMe rating={this.state.rating} updateRecipientRating={this.updateRecipientRating}/>
            </div>
          </div>
          <div className="row">
            <div className="twelve columns">
              <SobStory sobstory={this.state.sobStory} />
              <SocialSharing url="http://google.com" title="LOOK AT THESE TEETH!" media="https://40.media.tumblr.com/c10a90bda3576ab2e51f5d42ee3b0006/tumblr_n1sgn0Kc6s1shf8zxo6_1280.png" />
            </div>
          </div>
        </div>
      </div>
    )
  }
})