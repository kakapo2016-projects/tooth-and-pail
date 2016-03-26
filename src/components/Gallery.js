import React from 'react'
import GalleryPhoto from './GalleryPhoto'
import _ from 'lodash'

export default React.createClass({
  render () {
    console.log("in gallery", this.props)
    return (
      <div className='gallery'>
        {_.map(this.props.gallery, function(gp){
          return <GalleryPhoto className='galleryPhoto' name={gp.name} imgURL={gp.imgURL} target={gp.target} received={gp.received} recipientID={gp.recipientID} ></GalleryPhoto>
          })
        }
      </div>
    )
  }
})
