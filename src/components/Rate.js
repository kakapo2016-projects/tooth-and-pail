// CLEANED

import React from 'react'
import ToothIcon from '../images/tooth-icon-small.js'

export default React.createClass({
  render () {
    let rating = this.props.rating
    let rows = []
    for (let i=0; i < rating; i++) { rows.push(<ToothIcon />) }
    return <div className='rate'>{rows}</div>
  }
})
