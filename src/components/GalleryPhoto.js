import React from 'react'
import PhotoFooter from './PhotoFooter.js'

export default React.createClass({
  render () {
    return (
      <div className='galleryPhoto'>
        <image src="{this.props.imageurl}"></image>
        <PhotoFooter name={this.props.name} />
      </div>
    )
  }
})
