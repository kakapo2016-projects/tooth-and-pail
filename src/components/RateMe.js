// CLEANED

import React from 'react'
import ToothIcon from '../images/tooth-icon-medium.js'

export default React.createClass({
  handleClick: function (number) {
    this.props.updateRecipientRating(number)
  },

  render () {
    let rows = []
    for (let i=0; i < 5; i++) { rows.push(
      <span className='toothMed' onClick={() => {this.handleClick(i + 1)}}>
      <ToothIcon />
      </span>
    )}

    return (
      <div className="rateMe">
        <div>
          <span className='currentRating'>Current Rating : {this.props.rating}</span>
        </div>
        Rate me now!
        <div className='clickableTeeth'>
          {rows}
        </div>
      </div>
    )
  }
})
