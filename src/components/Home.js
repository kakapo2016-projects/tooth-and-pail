// CLEANED

import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './SignUp'
import cookie from 'react-cookie'

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

  getInitialState: function () {
    return {
      loading: false
    }
  },

  attemptLogIn: function (email, password) {
    this.setState({loading: true})
    getRequest(`http://localhost:3000/donors/email/${email}`, (err, res) => {
      if (err) { console.log('ERROR: ', err); this.setState({loading: false}); return }
      if (res === null) {
        alert(`Oops! We don't have that email address on file. Maybe try signing up?`)
        this.setState({loading: false})
        return
      }
      postRequest(`http://localhost:3000/unencrypt`, {
        password: password, passwordHash: res.passwordHash}, (err, resp) => {
        if (err) { console.log("ERROR RETRIVING UNENCRIPTING!: ", err); this.setState({loading: false}); return }
        if (resp.body) {
          cookie.save('donorID', res.donorID, { path: '/'})
          this.props.history.push('/gallery')
        } else {
          this.setState({loading: false})
          alert('Incorrect password!')
        }
      })
    })
  },

  attemptSignUp: function (username, email, password, confirm) {
    if (password !== confirm) { alert("Those passwords don't match, you fool!"); return }
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
        <h2>WHAT GOES AROUND GUMS AROUND</h2>
        <br/>
        <br/>
        <Login attemptLogIn={this.attemptLogIn} loading={this.state.loading}/>
        <SignUp attemptSignUp={this.attemptSignUp}/>
      </div>
    )
  }
})
