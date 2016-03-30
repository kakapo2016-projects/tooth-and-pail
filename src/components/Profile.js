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
      name: 'Mr. Tooth',
      title: 'Fun Teeth!',
      imgURL: 'https://image.freepik.com/free-icon/tooth-outline_318-46885.png',
      pageURL: 'https://toothandpail.herokuapp.com',
      sobStory: `Hello, I'm Mr. Tooth! I keep the peace around here. Try donating a little money to somebody in need.`
    }
  },

  handleDonation: function (donorID, recipientID, amount) {
    let data = {
      donorID: donorID,
      recipientID: recipientID,
      amount: amount
    }

    postRequest(url + '/donations', data, (err, res) => {
      if (err) { console.log("ERROR!", err); return }
      getRequest(url + '/donations/recipient/${recipientID}`, (err, resp) => {
        if (err) { console.log("ERROR!", err); return }
        this.donationSetState(resp, recipientID)
      })
    })
  },

  componentDidMount: function () {
    getRequest(url + '/recipients/${this.props.params.recipientID}`, (err, resp) => {
      if (err) { console.log("ERROR GETTING PROFILES!", err); return }
      this.setState({
        target: resp.target,
        name: resp.name,
        imgURL: resp.imgURL,
        sobStory: resp.sobStory,
        rating: resp.rating,
        title: `Help fund dental care for ${resp.name}`,
        pageURL: `https://toothandpail.herokuapp.com/${this.props.params.recipientID}`
      })
      getRequest(url + '/donations/recipient/${this.props.params.recipientID}`, (err, resp) => {
        if (err) { console.log("ERROR GETTING SPECFIC PROFILE!", err); return }
        this.donationSetState(resp, this.props.params.recipientID)
      })
    })
  },

  updateRecipientReceived: function (totalReceived) {
    let recipientData = {received : totalReceived }
    putRequest(url + '/recipients/${this.props.params.recipientID}`, recipientData, (err, res) => {
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

  getRequest(url + '/ratings/${donor}/recipient/${this.props.params.recipientID}`, (err, resp) => {
    if (err) { console.log("ERROR GETTING RATINGS!", err); return }
    let cnt = 0
    if (resp.length > 0) {
      alert("You have already rated these teeth - Thank you!")
    } else {
      //  create a new rating record
      postRequest(url + '/ratings', ratingData, (err, respo) => {
        if (err) { console.log("ERROR.......!", err); return }
        alert("Thank you for rating these teeth!")
        // all the ratings for this recipient are returned
        // use them to calculate a new average rating
        let totalValue = 0, count = 0
        respo.body.map(function (x) {
          totalValue += x.rating
          count++
        })
        // find the average by dividing by count then round
        var avrating = Math.floor(totalValue / count)
        // update the state
        this.setState({rating: avrating})
        console.log('ave rating', avrating)
        // update the recipients record in the database
        let recipientData = { rating: avrating }
        putRequest(url + '/recipients/${this.props.params.recipientID}`, recipientData, (err, res) => {
            if (err) { console.log("ERROR in put!", err); return }
        })
      })}
    })
  },

  donationSetState: function (donations, recipientID) {
    getRequest(url + '/recipients/${this.props.params.recipientID}`, (err, resp) => {
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
              <br />
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
              <br />
              <br />
              <RateMe rating={this.state.rating} updateRecipientRating={this.updateRecipientRating}/>
              <br />
            </div>
            <div className="six columns">
            </div>
          </div>
          <div className="row">
            <div className="twelve columns">
              <SobStory sobstory={this.state.sobStory} />
              <SocialSharing url={this.state.pageURL} title={this.state.title} media={this.state.imgURL}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
