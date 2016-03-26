import React from 'react'
import ReactDOM from 'react-dom'
import ToggleDisplay from 'react-toggle-display';
import NavBar from './NavBar'
import Header from './Header'
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyTheme from '../theme.js';



export default React.createClass ({
  childContextTypes : {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyTheme),
    };
  },

  componentDidMount: function () {
    document.getElementById("upload_widget_opener").addEventListener("click", function() {

      cloudinary.openUploadWidget({ cloud_name: 'toothandpail', upload_preset: 'fasiveib'}, 
        function(error, result) { console.log(error, result) });

    }, false);
  },



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
      <TextField type="text" className="name" onChange={this.handleChange} />
      <br />
      How much do you need to raise for your treatment?
      <br />
      <TextField type="number" className="target" onChange={this.handleChange} />
      <br />
      Tell us about why you need funding?
      <br />
      <TextField type='text' multiLine='true' rows='8' fullWidth />
      <br />
      <FloatingActionButton id="upload_widget_opener" />
      <br />
      <RaisedButton label="Submit your teeth!" onClick={this.handleDonate} />
      </div>
      </div>
      )
  }
})
