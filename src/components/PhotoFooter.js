// CLEANED

import React from 'react'
import ProgressBar from './ProgressBar'
import Rate from './Rate'

export default React.createClass({
  render () {
    return (
      <div className='photoFooter'>
        <p className='photo-footer-name'>{this.props.name}</p>
        <p className='galleryProgressBar'>
          <ProgressBar target={this.props.target} received={this.props.received}/>
        </p>
        <Rate rating={this.props.rating}/>
      </div>
    )
  }
})
