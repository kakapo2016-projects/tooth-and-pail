
import React from 'react'
import GetMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import MyTheme from '../theme.js'
import NavBar from './NavBar'
import Header from './Header'

export default React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: GetMuiTheme(MyTheme),
    }
  },

  render: function () {
    return (
      <div className='about'>
        <NavBar/>
        <Header />
        <div className='twelve columns'>
          <h2>Tooth & Pail Success Stories</h2>

        </div>
      </div>
    )
  }
})
