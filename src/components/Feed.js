import React from 'react'
import ReactDOM from 'react-dom'
import GetMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import MyTheme from '../theme.js'
import NavBar from './NavBar'
import Header from './Header'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import PeopleIcon from 'material-ui/lib/svg-icons/social/people'

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

  dynamicSort: function (property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  },

  componentDidMount: function () {
    var _this = this
    getRequest('http://localhost:3000/feed', (err, resp) => {
      if (err) { console.log("ERROR!", err); return }
      _this.createFeed(resp)})
  },

  createFeed: function (data) {
    var originalData = data
    originalData = originalData.sort(this.dynamicSort("Date"));
    var textArr = []
    for (var i = 0; i < originalData.length; i++){
      var left = originalData[i].target - originalData[i].received
      var donation = originalData[i]
      var donationText = donation.name + " just received a $" + donation.amount + " donation towards their goal! Only $" + left + " left to go until they reach their target of $" + donation.target + "."
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
          <h2>Recent Activity</h2>
          <List>
            {textsList}
          </List>
        </div>
      </div>
    )
  }
})
