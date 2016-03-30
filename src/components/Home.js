import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './SignUp'
import cookie from 'react-cookie'
import url from '../../config.js'

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
    getRequest(url + '/donors/email/' + email, (err, res) => {
      if (err) { console.log('ERROR: ', err); this.setState({loading: false}); return }
      if (res === null) {
        alert(`Oops! We don't have that email address on file. Maybe try signing up?`)
        this.setState({loading: false})
        return
      }
      postRequest(url + '/unencrypt', {
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
    getRequest(url + '/donors/email/' + email, (err, res) => {
      if (err) { console.log('ERROR: ', err); return }
      if (res !== null) { alert('you already have an account, idiot!'); return }

      let userObject = {
        donorName: username,
        password: password,
        email: email
      }

      postRequest(url + '/donors', userObject, (err, res) => {
        if (err) { console.log("ERROR ENCRIPTING!: ", err); return }
        console.log('RES from db: ', res.text)
          cookie.save('donorID', res.text, { path: '/'})
          this.props.history.push('/gallery')
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
        <p className='landing-text'>
          Dental care is unrealistically expensive for most people. <br/>
          Tooth & Pail offers a crowd sourced alternative to the conventional,
          “bankrupt yourself for a nice smile” approach. <br/>
          Wanna donate to teeth in need? Have teeth in need of donation?
          You're in the right place.
        </p>
        <div className='row'>
          <div className='six columns'>
            <Login attemptLogIn={this.attemptLogIn} loading={this.state.loading}/>
          </div>
          <div className='six columns'>
            <SignUp attemptSignUp={this.attemptSignUp}/>
          </div>
        </div>
      </div>
    )
  }
})
