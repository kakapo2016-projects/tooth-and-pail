import React from 'react'
import { Router } from 'react-router'
import cookie from 'react-cookie'
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
    getRequest(`http://localhost:3000/donors/email/${email}`, (err, res) => {
      if (err) { console.log('ERROR: ', err); return }
      if (res === null) { alert('you call that a valid email address, idiot?'); return }

      postRequest(`http://localhost:3000/unencrypt`, {
        password: password, passwordHash: res.passwordHash}, (err, resp) => {
        if (err) { console.log("ERROR RETRIVING UNENCRIPTING!: ", err); return }
        if (resp.body) {
          alert('sucessfully logged in!')
          cookie.save('donorID', res.donorID, { path: '/'})
          this.props.history.push('/gallery')
        } else {
          alert('incorrect password!')
        }
      })
    })
  },

  attemptSignUp: function (username, email, password, confirm) {
    if (password !== confirm) { alert("those passwords don't match, idiot!"); return }
    getRequest(`http://localhost:3000/donors/email/${email}`, (err, res) => {
      if (err) { console.log('ERROR: ', err); return }
      if (res !== null) { alert('you already have an account, idiot!'); return }

      postRequest(`http://localhost:3000/encrypt`, {password: password}, (err, res) => {
        if (err) { console.log("ERROR RETRIVING ENCRIPTION!: ", err); return }
        let data = {
          donorName: username,
          passwordHash: res.text,
          email: email
        }

        postRequest(`http://localhost:3000/donors`, data, (err, resp) => {
          cookie.save('donorID', resp.text, { path: '/'})
          this.props.history.push('/gallery')
        })
      })
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
