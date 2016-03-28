// CLEANED

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
          <h2>About Tooth & Pail</h2>
          <p>Tooth & Pail is for those in need of dental care but unable to afford it, and for those seeking to donate towards such care.</p>
          <p>Tooth & Pail was created by Andi Buchanan, Richard Joe, Gaynor Landmark, Joseph Quested and Sharon Rumsey in March 2016 for their final project at Enspiral Dev Academy.</p>
        </div>
      </div>
    )
  }
})
