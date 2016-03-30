import React from 'react'
import ReactDOM from 'react-dom'
import GetMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import MyTheme from '../theme.js'
import NavBar from './NavBar'
import Header from './Header'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import PeopleIcon from 'material-ui/lib/svg-icons/social/people'
import _ from 'lodash'
import url from '../../config.js'

import getRequest from '../getRequest.js'

export default React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: GetMuiTheme(MyTheme),
    }
  },

  getInitialState: function () {
    return {
      textArr: [],
    }
  },

  componentDidMount: function () {
    var _this = this
    getRequest(url + '/feed', (err, resp) => {
      if (err) { console.log("ERROR!", err); return }
      _this.createFeed(resp)})
  },


  createDonationText: function (donation, left) {
    var donationText = donation.name + " just received a $" + donation.amount + " donation towards their goal! Only $" + left + " left to go until they reach their target of $" + donation.target + "."
    return donationText
  },

  createFeed: function (data) {
    var originalData = _.orderBy(data, 'Date', 'desc')
    var textArr = []
    for (var i = 0; i < originalData.length; i++){
      var left = originalData[i].target - originalData[i].received
      var donation = originalData[i]
      var donationText = this.createDonationText(donation, left)
      textArr.push(donationText)
    }
    this.setState({'textArr': textArr})
  },

  render: function () {
    var texts = this.state.textArr
    var textsList = texts.map(function(text, index){
      return <ListItem key={index} primaryText={text} leftIcon={<PeopleIcon/>} />
    })
    return (
      <div className='about'>
        <NavBar/>
        <Header />
        <div className='twelve columns' id='feed'>
          <h2 className='recent-activity-header'>Recent Activity</h2>
          <List>
            {textsList}
          </List>
        </div>
      </div>
    )
  }
})
