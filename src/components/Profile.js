import React from 'react'
import ReactDOM from 'react-dom'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyTheme from '../theme.js';
import ProfilePhoto from './ProfilePhoto'
import NavBar from './NavBar'
import Header from './Header'
import ProfileName from './ProfileName'
import ProgressBar from './ProgressBar'
import DonateForm from './DonateForm'
import SobStory from './SobStory'
import SocialSharing from './SocialSharing'
import Paper from 'material-ui/lib/paper'
import postRequest from '../postRequest.js'
import getRequest from '../getRequest.js'
import putRequest from '../putRequest.js'
import RateMe from './RateMe'
import cookie from 'react-cookie'
import HBar from './HBar'


export default React.createClass({

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
      amountDonated: 0,
      name: ""
    }
  },

  handleDonation: function (donorID, recipientID, amount) {
    //post the donation to the database
    let data = {
      donorID: donorID,
      recipientID: recipientID,
      amount: amount
    }
    console.log('in handledonation in profile', data)
    postRequest('http://localhost:3000/donations', data, (err, res) => {
      if (err) { console.log("ERROR!", err); return }
        getRequest(`http://localhost:3000/donations/recipient/${recipientID}`, (err, resp) => {
          if (err) { console.log("ERROR!", err); return }
          console.log('all donations for recipient', resp)
          // update the received amount for this recipient
          this.donationSetState(resp, recipientID)
      })
    })
  },

  componentDidMount: function () {
    getRequest(`http://localhost:3000/recipients/${this.props.params.recipientID} `, (err, resp) => {
      if (err) { console.log("ERROR!", err); return }
      this.setState({target: resp.target, name: resp.name, imgURL: resp.imgURL, sobStory: resp.sobStory, rating: resp.rating})
      getRequest(`http://localhost:3000/donations/recipient/${this.props.params.recipientID} `, (err, resp) => {
        if (err) { console.log("ERROR!", err); return }
        console.log('all donations for recipient from componentdidmount in profile', resp)
        this.donationSetState(resp, this.props.params.recipientID)
      })
    })
  },

  updateRecipientReceived: function (totalReceived){
    let recipientData = {received : totalReceived }
    putRequest(`http://localhost:3000/recipients/${this.props.params.recipientID}`, recipientData, (err, res) => {
      if (err) { console.log("ERROR!", err); return }
        console.log("no error", res)
    })
  },

  updateRecipientRating: function (newRate){
    var donor = cookie.load('donorID')
    // post a new rating record to the ratings table
    let ratingData = {
      recipientID: this.props.params.recipientID,
      donorID: donor,
      rating: newRate
    }
    getRequest(`http://localhost:3000/ratings/${donor}/recipient/${this.props.params.recipientID}`, (err, resp) => {
      console.log("in callback after get request", resp)
      if (err) { console.log("ERROR!", err); return }
      let cnt = 0
      if (resp.length > 0) {
         alert("You have already rated this recipient -Thank you!")
      } else {
        //  do a post to create a new record
        postRequest('http://localhost:3000/ratings', ratingData, (err, respo) => {
          if (err) { console.log("ERROR!", err); return }
          //now getting all the ratings for this recipient
          getRequest(`http://localhost:3000/ratings/${this.props.params.recipientID} `, (err, resp) => {
            if (err) { console.log("ERROR!", err); return }
            // get a total value , get the count
            var totalValue = 0
            var count = 0
            resp.map(function (x){
              totalValue += x.rating
              count++
            })
            // find the average by dividing by count then round
            var avrating = Math.floor(totalValue / count)   // should be at least one as this is in the callback from the post
            // update the state
            this.setState({rating: avrating})
            // update the recipients record in the database
            let recipientData =
            {
              rating: avrating
            }
            putRequest(`http://localhost:3000/recipients/${this.props.params.recipientID}`, recipientData, (err, res) => {
              if (err) { console.log("ERROR!", err); return }
                console.log("no error", res)
            })
          })
        })
      }
    })
  },

  donationSetState: function (donations, recipientID) {
    getRequest(`http://localhost:3000/recipients/${this.props.params.recipientID} `, (err, resp) => {
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
            <Header />
            <div className="row">
              <div className="six columns">
                <ProfilePhoto imgurl={this.state.imgURL} />
              </div>
              <div className="six columns">
                <ProfileName name={this.state.name}/>
                <ProgressBar target={this.state.target} received={this.state.received}/>
                <br />
                <DonateForm handleDonation={this.handleDonation} recipientID={this.props.params.recipientID} target={this.state.target} received={this.state.received} />
                <br />
                <HBar target={this.state.target} received={this.state.received}/>
              </div>
              <div className="six columns">
                <RateMe rating={this.state.rating} updateRecipientRating={this.updateRecipientRating}/>
              </div>
            </div>
            <div className="row">
              <div className="twelve columns">
                <SobStory sobstory={this.state.sobStory} />
                <SocialSharing url="http://google.com" title="A Title!" media="https://40.media.tumblr.com/c10a90bda3576ab2e51f5d42ee3b0006/tumblr_n1sgn0Kc6s1shf8zxo6_1280.png" />
              </div>
            </div>
          </div>
        </div>
    )
  }
})
