// CLEANED

import React from 'react'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/lib/raised-button'
import TextField from 'material-ui/lib/text-field'

export default React.createClass ({
  getInitialState: function () {
    return {
      username: '',
      email: '',
      password: '',
      confirm: ''
    }
  },

  handleUsernameField: function (e) {
     this.setState({
         username: e.target.value
     })
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

  handleConfirmField: function (e) {
     this.setState({
         confirm: e.target.value
     })
   },

  render() {
    return (
        <form role='form' id='signupForm'>
        <div className='signup'>
          <br/>
          <h2> SIGN UP </h2>
          <TextField
            id='username-field'
            multiline={false}
            type='text'
            value={this.state.username}
            onChange={this.handleUsernameField}
            className='username'
            placeholder='Username'/>
          <br/>
          <br/>
          <TextField
            id='email-field'
            type='text'
            className='email'
            value={this.state.email}
            onChange={this.handleEmailField}
            placeholder='Email Address'/>
          <br/>
          <br/>
          <TextField
            id='password-field'
            type='password'
            className='password'
            value={this.state.password}
            onChange={this.handlePasswordField}
            placeholder='Password'/>
          <br/>
          <br/>
          <TextField
            id='confirm-field'
            type='password'
            className='confirm-password'
            value={this.state.confirm}
            onChange={this.handleConfirmField}
            placeholder='Confirm Password'/>
          <br/>
          <br/>
          <RaisedButton
            label='Submit'
            onTouchTap={() => {this.props.attemptSignUp(
              this.state.username,
              this.state.email,
              this.state.password,
              this.state.confirm
            )}}
          />
        </div>
      </form>
    )
  }
})
