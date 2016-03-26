import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './SignUp'

// database helpers
import getRequest from '../getRequest.js'
import postRequest from '../postRequest.js'

// material-ui helpers
import GetMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import MyTheme from '../theme.js'

export default React.createClass({
  childContextTypes : {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: GetMuiTheme(MyTheme),
    }
  },

  attemptLogIn: function (email, password) {
    console.log(`http://localhost:3000/donors/email/${email}`)
    getRequest(`http://localhost:3000/donors/email/${email}`, (res) => {
      console.log('RESPONSE: ', res)
      if (res === null) {
        alert(`sorry, we don't have that email address in our database!
        maybe try making a new account?`)
      }
    })
  },

  attemptSignUp: function (username, email, password, confirm) {
    if (password !== confirm) alert ("those passwords don't match, idiot!"); return
    getRequest(`http://localhost:3000/donors/email/${email}`, (res) => {
      console.log('RESPONSE: ', res)
    })
  },

  render() {
    return (
      <div className='home'>
        <NavBar />
        <Header header='TOOTH & PAIL'/>
        <Login attemptLogIn={this.attemptLogIn}/>
        <SignUp attemptSignUp={this.attemptSignUp}/>
      </div>
    )
  }
})
