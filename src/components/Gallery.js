import React from 'react'
import Gallery from './Gallery.js'
import GalleryPhoto from './GalleryPhoto'

export default React.createClass({
  render () {
    return (
      <div className='gallery'>
        <div className='galleryPhoto'>
          <GalleryPhoto />
        </div>
      </div>
    )
  }
})
