
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
      <div className='success'>
        <NavBar/>
        <Header />
        <div className='twelve columns'>
          <h2>Tooth & Pail Success Stories</h2>
        </div>
        <div className='row'>
          <div className='six columns'>
            <img src="./images/happyteeth.jpg" className='happy'></img>
          </div>
          <div className='six columns'>
          <p>Paragraph about how we love our teeth now</p>
          </div>
        </div>
      </div>
    )
  }
})
