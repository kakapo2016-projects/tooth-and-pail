import React from 'react'
import PhotoFooter from './PhotoFooter.js'

export default React.createClass({
  handleGalleryClick: function(e){
    this.props.galleryClick(this.props.recipientid)
   },

  render () {
    return (
      <div className='galleryPhoto' >
        <img onClick={this.handleGalleryClick} src={this.props.imgurl} />
        <PhotoFooter galleryClick={this.props.GalleryClick} name={this.props.name} target={this.props.target} received={this.props.received} recipientid={this.props.recipientid} />
      </div>
    )
  }
})
