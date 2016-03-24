import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import SobStory from './SobStory'
import ProgressBar from './ProgressBar'
import DonateForm from './DonateForm'
import ProfileName from './ProfileName'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

export default React.createClass({

    getInitialState: function () {
    return {
      amountDonated: 0
    }
  },

// the handle Donation function can be deleted once DonateForm is part of profile rather than app

  handleDonation: function (p) {
  console.log("hey look this is being passed up!", p, "type", typeof p)
  this.setState({amountDonated: p})
  },

  render () {
    return (
      <div className='app'>
        <NavBar/>
        <Header/>
        <ProfileName/>
        <SobStory sobstory='I AM SO SAD ALL MY TEETH ARE GONE'/>
        <ProgressBar received={134} target={23452}/>
        <DonateForm donateFunction={this.handleDonation.bind(this)} />
      </div>
    )
  }
})
