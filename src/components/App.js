import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

export default React.createClass({
  render () {
    return (
      <div className='app'>
        <NavBar/>
        <Header/>
      </div>
    )
  }
})
