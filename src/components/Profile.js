import React from 'react'
import ReactDOM from 'react-dom'

// import ProfilePhoto from './ProfilePhoto'
import ProfileName from './ProfileName'
import ProgressBar from './ProgressBar'
import DonateForm from './DonateForm'
import SobStory from './SobStory'

export default React.createClass({

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
        <ProfileName name={recipientID}/>
        <ProgressBar/>
        <DonateForm donateFunction={this.handleDonation.bind(this)} />
        <SobStory sobstory='test sob story' />
      </div>
    )
  }
})
