import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field'

export default React.createClass ({

  handleChange: function (e) {
    this.setState({inputValue: e.target.value})
  },

  handleDonate: function (e) {
    console.log(this.state.inputValue)

  },

  render() {


    return (
      <span id="DonateForm">
      <TextField type="number" onChange={this.handleChange} />
      <br />
      <RaisedButton label="Donate!" onClick={this.handleDonate} />
      </span>
      )
  }
})