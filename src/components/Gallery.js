import React from 'react'
import GalleryPhoto from './GalleryPhoto'

export default React.createClass({
  render () {
    var galleryClick = this.props.galleryClick
    return (
      <div className='gallery'>
        {this.props.gallery.map(function(gp){
          return <GalleryPhoto galleryClick={galleryClick} name={gp.name} imgurl={gp.imgurl} target={gp.target} received={gp.received} recipientid={gp.recipientid} />
          })
        }
      </div>
    )
  }
})
