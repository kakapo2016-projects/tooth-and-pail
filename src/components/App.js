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
  render () {
    return (
      <div className='app'>
        <NavBar/>
        <Header/>
        <ProfileName/>
        <SobStory sobstory='I AM SO SAD ALL MY TEETH ARE GONE'/>
        <ProgressBar received={134} target={23452}/>
        <DonateForm/>
      </div>
    )
  }
})
