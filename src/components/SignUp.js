import React from 'react'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field'

// to be a separate page from the login pop up

export default class Login extends React.Component {
 
  render() {
    return (
        <form role='form'>
        <div className='signup'>
          <TextField type='text' className='username' placeholder='Username' />
          <TextField type='password' className='password' placeholder='Password' />
        </div>
        <RaisedButton label='Submit' onTouchTap={this.handleOpen} />
      </form>
    );
  }
}


