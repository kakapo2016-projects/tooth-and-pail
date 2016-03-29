// CLEANED

import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
import CircularProgress from 'material-ui/lib/circular-progress'
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

  handleButtonIcon: function () {
    if (!this.props.loading) {
      return (
        <RaisedButton
          label='Submit'
          className='login-button'
          onTouchTap={() => {
            this.props.attemptLogIn(
            this.state.email,
            this.state.password
          )}}
        />
      )
    } else {
      return (<CircularProgress/>)
    }
  },

  render() {
    return (
      <form role='form' id='loginForm'>
      <div className='signup'>
        <h3> LOG IN </h3>
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
        {this.handleButtonIcon()}
      </div>
    </form>
  )}
})
