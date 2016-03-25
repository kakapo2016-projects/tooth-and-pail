import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './SignUp'

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

  render() {
    return (
      <div className='home'>
        <NavBar />
        <Header header='TOOTH & PAIL'/>
        <Login />
        <SignUp />
      </div>
    )
  }
})
