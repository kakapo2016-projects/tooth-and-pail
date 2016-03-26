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
      name: "ally"
    }
  },


  handleDonation: function (donorID, recipientID, amount) {
  console.log("handleDonation", this.props)
    //post the donation to the database
    let data = {
      donorID: donorID,
      recipientID: recipientID,
      amount: amount
    }
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
      console.log('recipient details', resp.target, resp.name, resp.imgURL)
      this.setState({target: resp.target, name: resp.name, imgURL: resp.imgURL, sobStory: resp.sobStory})
      getRequest(`http://localhost:3000/donations/recipient/${this.props.params.recipientID} `, (err, resp) => {
        if (err) { console.log("ERROR!", err); return }
        console.log('all donations for recipient from componentdidmount in profile', resp)
        this.donationSetState(resp, this.props.params.recipientID)
      })
    })
  },


  updateRecipientReceived: function (totalReceived){
    //console.log("update", totalReceived)
    let recipientData = {received : totalReceived }
    console.log("update", recipientData)

    putRequest(`http://localhost:3000/recipients/${this.props.params.recipientID}`, recipientData, (err, res) => {
      if (err) { console.log("ERROR!", err); return }
        console.log("no error", res)
    })
  },


  donationSetState: function (donations, recipientID) {
    getRequest(`http://localhost:3000/recipients/${this.props.params.recipientID} `, (err, resp) => {
      if (err) { console.log("ERROR!", err); return }
      console.log('recipient details', resp.target, resp.name)
      var totalReceived = 0
      donations.map(function (x){
        totalReceived += x.amount
      })
      this.setState({target: resp.target, received: totalReceived, name: resp.name})
      this.updateRecipientReceived(totalReceived)

    })
  },

  render: function () {
    console.log("this props in profile", this.props, this.state.name, this.state.target, this.state.received, this.state.imgURL, this.state.sobStory)

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
