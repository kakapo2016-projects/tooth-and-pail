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

    console.log(this.state.inputValue)
    this.props.donateFunction(this.state.inputValue);
  },

  render: function () {


    return (
      <span id="DonateForm">
      <TextField type="number" onChange={this.handleChange} />
      <br />
      <RaisedButton label="Donate!" onClick={this.handleDonate} />
      </span>
      )
  }
})

