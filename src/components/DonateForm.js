import React from 'react'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field'
import Profile from './Profile'



export default React.createClass ({


    propTypes : {
  donateFunction: React.PropTypes.func
},


  getInitialState: function () {
    return {
      inputValue: 0
    }
  },


  handleChange: function (e) {
    this.setState({inputValue: e.target.value})
  },

  handleDonate: function (e) {

    console.log("recipientID", this.props.recipientID, this.state.inputValue)

    this.props.handleDonation('1111', this.props.recipientID, this.state.inputValue)
  },

  render: function () {
  //  console.log({this.props.donationClick})

    return (
      <span id="DonateForm">
      <TextField type="number" className="donateInput" onChange={this.handleChange} />
      <br />
      <RaisedButton label="Donate!" onClick={this.handleDonate} />
      </span>
      )
  }
})
