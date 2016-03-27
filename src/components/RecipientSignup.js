import React from 'react'
import ReactDOM from 'react-dom'
import ToggleDisplay from 'react-toggle-display';
import NavBar from './NavBar'
import Header from './Header'
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyTheme from '../theme.js';
import postRequest from '../postRequest.js'

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
      name: "",
      target: 0,
      sobstory: "",
      photo: "",
      isUploaded: false
    }
  },

  handleName: function (e) {
    this.setState({'name': e.target.value});
  },

  handleTarget: function (e) {
    this.setState({'target': e.target.value});
  },

  handleSobstory: function (e) {
    this.setState({'sobstory': e.target.value});
  },

  photoUploaded: function (error, l){
    this.setState({'photo': l[0].secure_url})
    this.setState({'isUploaded': true})
  },

  componentDidMount: function () {
    var _this = this
    document.getElementById("upload_widget_opener").addEventListener("click", function() {
      cloudinary.openUploadWidget({ cloud_name: 'toothandpail', upload_preset: 'fasiveib'}, 
        function(error, result) {_this.photoUploaded(error, result)} )
    }, false);
  },

  handleSubmit: function (){
    var dataObject = {}
    dataObject.name = this.state.name
    dataObject.imgURL = this.state.photo
    dataObject.received = 0
    dataObject.target = this.state.target
    dataObject.sobStory = this.state.sobstory
    console.log("this is the object", dataObject)
    postRequest('http://localhost:3000/recipients', dataObject, (err, res) => {
      if (err) { console.log("ERROR!", err); return }
    })
  }

  render: function () {
    return (
      <div>
        <NavBar/>
        <Header header={this.props.recipientID}/>
        <div className="RecipientForm twelve columns">
          <h2>Submit Your Teeth</h2>
          <p>Need funding for dental treatment? Submit your details here and with the help of our generous donors, the funding you need could be closer than you think.</p>
          Your name
          <br />
          <TextField type="text" className="name" id="name" onChange={this.handleName} />
          <br />
          How much do you need to raise for your treatment?
          <br />
          <TextField type="number" className="target" id="target" onChange={this.handleTarget} />
          <br />
          Tell us about why you need funding?
          <br />
          <TextField type='text' multiLine='true' id="sobstory" rows='8' fullWidth onChange={this.handleSobstory} />
          <br />
          <FlatButton secondary='true' label="Upload picture" backgroundColor='red' id="upload_widget_opener" />
          <br />
          <ToggleDisplay show={this.state.isUploaded}>
          <p>Photo uploaded!</p>
          </ToggleDisplay>
          <br />
          <RaisedButton label="Submit your teeth!" onClick={this.handleSubmit} />
        </div>
      </div>
    )
  }
})
