import React from 'react'
import ReactDOM from 'react-dom'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyTheme from '../theme.js';
// import ProfilePhoto from './ProfilePhoto'
import NavBar from './NavBar'
import Header from './Header'
import ProfileName from './ProfileName'
import ProgressBar from './ProgressBar'
import DonateForm from './DonateForm'
import SobStory from './SobStory'

export default React.createClass({

  childContextTypes : {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyTheme),
    };
  },

    getInitialState: function () {
    return {
      amountDonated: 0
    }
  },


  handleDonation: function (p) {
  console.log("hey look this is being passed up!", p, "type", typeof p)
  this.setState({amountDonated: p})
  },

  render: function () {
    const { recipientID } = this.props.params

    return (
      <div className='profile'>
        <NavBar/>
        <Header header={recipientID}/>
        <ProfileName name='Richard'/>
        <ProgressBar/>
        <br />
        <DonateForm donateFunction={this.handleDonation.bind(this)} />
        <SobStory sobstory='test sob story' />
      </div>
    )
  }
})
