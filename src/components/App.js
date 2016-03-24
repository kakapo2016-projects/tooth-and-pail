import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

export default React.createClass({
  render () {
    return (
      <div className='app'>
        <h1>TOOTH AND PAIL!</h1>
      </div>
    )
  }
})
