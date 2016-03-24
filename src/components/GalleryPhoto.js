import React from 'react'
import PhotoFooter from './PhotoFooter.js'

export default React.createClass({
  render () {
    return (
      <div className='galleryPhoto'>
        <img src={this.props.imageurl} />
        <PhotoFooter name={this.props.name} />
      </div>
    )
  }
})
