import React from 'react'
import ReactDOM from 'react-dom'
import GetMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import MyTheme from '../theme.js'
import NavBar from './NavBar'
import Header from './Header'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import SvgIcon from 'material-ui/lib/svg-icon'
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
    getRequest('http://localhost:3000/donations', this.createFeed)
  },

  createFeed: function (data) {
    var originalData = data
    originalData = originalData.sort(dynamicSort("Date"));
    var textArr = []
    for (var i = 0; i < donationArray.length; i++){
      var donation = donationArray[0]
      var donationText = donation.name + "just received a $"+ donation.amount + " towards their goal! Just "+ donation.target-donation.received + "to go!"
      textArr.push(donationText)
    }
    this.setState({'textArr': textArr})
  },

  render: function () {
    var texts = this.state.textArr
    var textsList = texts.map(function(text){
      return <ListItem primaryText={text} leftIcon={<People />} />
    })
    return (
      <div className='about'>
        <NavBar/>
        <Header />
        <div className='twelve columns feed'>
          <h2>Recent Activity</h2>
          <List>
            {textsList}
          </List>
        </div>
      </div>
    )
  }
})
