import React from 'react'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/lib/raised-button'
import TextField from 'material-ui/lib/text-field'
import Profile from './Profile'
import cookie from 'react-cookie'

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
    if (this.state.inputValue < 0){
      alert("Donation invalid. That's a really mean thing to do!")
    } else {
      this.props.handleDonation(cookie.load('donorID'), this.props.recipientID, this.state.inputValue)
    }
    this.setState({inputValue: 0})
  },

  render: function () {
    if (this.props.received >= this.props.target){
      return(
        <div>Fully Funded</div>
      )
    } else {
      return (
        <span id="DonateForm">
        $<TextField type="number" className="donateInput" onChange={this.handleChange}  value={this.state.inputValue} />
        <br />
        <RaisedButton label="Donate!" onClick={this.handleDonate} />
        </span>
      )
    }
  }
})
