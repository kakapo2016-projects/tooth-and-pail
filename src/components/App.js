// CLEANED

import React from 'react'
import cookie from 'react-cookie'
import Header from './Header'
import NavBar from './NavBar'
import Gallery from './Gallery'
import Sort from './Sort'

// database functions
import getRequest from '../getRequest.js'
import postRequest from '../postRequest.js'

// material-ui helpers
import GetMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import MyTheme from '../theme.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

export default React.createClass({
  childContextTypes : {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: GetMuiTheme(MyTheme),
    };
  },

  getInitialState: function () {
    return {
      amountDonated: 0,
      gallery: []
    }
  },

  componentDidMount: function() {
    // get all the recipients from the database
    getRequest('http://localhost:3000/recipients', this.dbSetState)
  },

  dbSetState: function (err, data) {
    this.setState({gallery: data})
    this.setState({originalGallery: data})
  },

  sortHandleChange: function(event, index, value) {
    this.setState({valueSort:sortName})
  },

  setGalleryState: function (newGallery) {
    this.setState({gallery: newGallery})
  },

  render () {

    return (
      <div className='app'>
        <NavBar/>
        <Header header='TOOTH & PAIL'/>
        <Sort gallery={this.state.originalGallery} setGalleryState={this.setGalleryState}/>
        <Gallery gallery={this.state.gallery}/>
      </div>
    )
  }
})
