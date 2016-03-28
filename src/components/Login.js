// CLEANED

import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field'

export default React.createClass ({
  getInitialState: function () {
    return {
      email: '',
      password: ''
    }
  },

  handleEmailField: function (e) {
    this.setState({
      email: e.target.value
    })
  },

  handlePasswordField: function (e) {
    this.setState({
      password: e.target.value
    })
  },

  render() {
    return (
      <form role='form'>
      <div className='signup'>
        <h2> LOG IN </h2>
        <TextField
          id='email-field'
          type='text'
          className='email'
          value={this.state.email}
          onChange={this.handleEmailField}
          placeholder='Email Address' />
        <br/>
        <br/>
        <TextField
          id='email-field'
          type='password'
          className='password'
          value={this.state.password}
          onChange={this.handlePasswordField}
          placeholder='Password' />
        <br/>
        <br/>
        <RaisedButton
          label='Submit'
          className='login'
          onTouchTap={() => {
            this.props.attemptLogIn(
            this.state.email,
            this.state.password
          )}}
        />
      </div>
    </form>
  )}
})
