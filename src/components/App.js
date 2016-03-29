// CLEANED

import React from 'react'
import cookie from 'react-cookie'
import Header from './Header'
import NavBar from './NavBar'
import Gallery from './Gallery'
import Sort from './Sort'
import url from 'url'

// database functions
import getRequest from '../getRequest.js'
import postRequest from '../postRequest.js'

// material-ui helpers
import GetMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import MyTheme from '../theme.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

const filterMap = {
  1: {value: 1, primaryText: "All Profiles"},
  2: {value: 2, primaryText: "Almost There"},
  3: {value: 3, primaryText: "Latest Profiles"},
  4: {value: 4, primaryText: "Popular Now"}
}

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
      gallery: [],
      galleryFilter: {value: 1, primaryText: "All Profiles"}
    }
  },

  componentDidMount: function() {
    // get all the recipients from the database
    getRequest(url.format(config) + '/recipients', this.dbSetState)
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

  changeFilter: function(value) {
    this.setState({galleryFilter: filterMap[value]})
  },

  render () {
    // console.log("LOG WITH AN APP", this.state)

    return (
      <div className='app'>
        <NavBar/>
        <Header header='TOOTH & PAIL'/>
        <Sort
          filterMap = {filterMap}
          galleryFilter={this.state.galleryFilter}
          changeFilter={this.changeFilter}/>
        <Gallery gallery={this.state.gallery} galleryFilter={this.state.galleryFilter}/>
      </div>
    )
  }
})
