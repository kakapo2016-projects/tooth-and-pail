import React from 'react'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field'

export default class Login extends React.Component {
  render() {
    return (
        <form role='form'>
        <div className='signup'>
          <br/>
          <h2> SIGN UP </h2>
          <TextField multiline={false} type='text' className='username' placeholder='Username' />
          <br/>
          <br/>
          <TextField type='text' className='email' placeholder='Email Address' />
          <br/>
          <br/>
          <TextField type='password' className='password' placeholder='Password' />
          <br/>
          <br/>
          <TextField type='password' className='confirm-password' placeholder='Confirm Password' />
          <br/>
          <br/>
          <RaisedButton label='Submit' onTouchTap={this.handleOpen} />
        </div>
      </form>
    );
  }
}
