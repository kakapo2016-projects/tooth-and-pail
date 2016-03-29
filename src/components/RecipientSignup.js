// SEMI CLEANED

import React from 'react'
import cookie from 'react-cookie'

// components
import NavBar from './NavBar'
import Header from './Header'
import ToggleDisplay from 'react-toggle-display'
import FlatButton from 'material-ui/lib/flat-button'
import RaisedButton from 'material-ui/lib/raised-button'
import TextField from 'material-ui/lib/text-field'

// database functions
import postRequest from '../postRequest.js'
import getRequest from '../getRequest.js'

// material-ui helpers
import GetMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import MyTheme from '../theme.js';

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
      name: "",
      target: 0,
      sobstory: "",
      photo: "",
      isUploaded: false,
      alreadyHasTeeth: false,
      isLoggedIn: false,
      profileURL: ""
    }
  },

  handleName: function (e) {
    this.setState({'name': e.target.value})
  },

  handleTarget: function (e) {
    this.setState({'target': e.target.value})
  },

  handleSobstory: function (e) {
    this.setState({'sobstory': e.target.value})
  },

  photoUploaded: function (error, l){
    this.setState({'photo': l[0].secure_url})
    this.setState({'isUploaded': true})
  },

  componentDidMount: function () {
    if (cookie.load('donorID')) {
      this.setState({'isLoggedIn': true})
    }
    var _this = this
    document.getElementById("upload_widget_opener").addEventListener("click", function () {
      cloudinary.openUploadWidget({ cloud_name: 'toothandpail', upload_preset: 'fasiveib' },
        function (error, result) {
          _this.photoUploaded(error, result)
        })
    }, false)
    this.handleIsUser()
  },

  handleIsUser: function () {
    var _this = this
    getRequest('http://localhost:3000/recipientsbydonor/' + cookie.load('donorID'), _this.handleExistingUser)
  },

  handleExistingUser: function (err, data) {
    console.log("data", data)
    if (data !== undefined) {
      var profileURL = "/recipient/" + data.recipientID 
      this.setState({'profileURL': profileURL})
      this.setState({'alreadyHasTeeth': true})
    }
  },

  handleSubmit: function () {
    let _this = this
    let dataObject = {
      name: this.state.name,
      imgURL: this.state.photo,
      received: 0,
      target: this.state.target,
      sobStory: this.state.sobstory,
      donorID: cookie.load('donorID')
    }
    postRequest('http://localhost:3000/recipients', dataObject, _this.handleIsUser)
  },

  render: function () {
    return (
      <div>
        <NavBar/>
        <Header header={this.props.recipientID}/>
        <div className="twelve columns" id="RecipientForm">
          <ToggleDisplay show={this.state.isLoggedIn}>
            <ToggleDisplay hide={this.state.alreadyHasTeeth}>
              <h2>Submit Your Teeth</h2>
              <p>Need funding for dental treatment? Submit your details here and with the help of our generous donors, the funding you need could be closer than you think.</p>
              Your name
              <br />
              <TextField id={1} type="text" className="name" id="name" onChange={this.handleName} />
              <br />
              How much do you need to raise for your treatment?
              <br />
              <TextField id={2} type="number" className="target" id="target" onChange={this.handleTarget} />
              <br />
              Tell us about why you need funding?
              <br />
              <TextField id={3} type='text' multiLine={true} id="sobstory" rows={8} fullWidth onChange={this.handleSobstory} />
              <br />
              <FlatButton secondary={true} label="Upload picture" backgroundColor='red' id="upload_widget_opener" />
              <br />
              <ToggleDisplay show={this.state.isUploaded}>
                <p>Photo uploaded!</p>
              </ToggleDisplay>
              <br />
              <RaisedButton label="Submit your teeth!" onClick={this.handleSubmit} />
            </ToggleDisplay>
            <ToggleDisplay show={this.state.alreadyHasTeeth}>
              <p>Thank you for requesting funding for your teeth. Please see your profile <a href={this.state.profileURL} id="profilelink">here</a>.</p>
            </ToggleDisplay>
          </ToggleDisplay>
          <ToggleDisplay hide={this.state.isLoggedIn}>
            <h2>Oops!</h2>
            <p>You need to log in before you can request funding!</p>
            <RaisedButton label="Login / Signup" onClick={() => {this.props.history.push('/')}}/>
          </ToggleDisplay>
        </div>
      </div>
    )
  }
})
