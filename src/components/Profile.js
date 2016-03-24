import React from 'react'
import ReactDOM from 'react-dom'

// import ProfilePhoto from './ProfilePhoto'
import ProfileName from './ProfileName'
import ProgressBar from './ProgressBar'
import DonateForm from './DonateForm'
import SobStory from './SobStory'

export default React.createClass({
  render() {
    return (
      <div className='profile'>
        <ProfileName name='test name'/>
        <ProgressBar/>
        <DonateForm/>
        <SobStory sobstory='test sob story'/>
      </div>
    )
  }
})
