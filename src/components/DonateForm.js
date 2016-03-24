import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field'

export default React.createClass ({
  render() {
    return (
      <span id="DonateForm">
        <RaisedButton />
        <TextField type="number" />
      </span>
    )
  }
})