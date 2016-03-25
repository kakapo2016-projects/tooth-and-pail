import React from 'react'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field'

export default class Login extends React.Component {
  render() {
    return (
        <form role='form'>
        <div className='signup'>
          <h2> SIGN IN </h2>
          <TextField type='text' className='email' placeholder='Email Address' />
          <br/>
          <br/>
          <TextField type='password' className='password' placeholder='Password' />
          <br/>
          <br/>
          <RaisedButton label='Submit' onTouchTap={this.handleOpen} />
        </div>
      </form>
    );
  }
}
