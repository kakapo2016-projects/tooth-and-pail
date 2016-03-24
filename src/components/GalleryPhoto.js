import React from 'react'
import PhotoFooter from './PhotoFooter.js'
import { Link } from 'react-router'

export default React.createClass({
  handleGalleryClick: function(e){
    this.props.galleryClick(this.props.recipientid)
   },

  render () {
    return (
      <Link to={`/recipient/${this.props.recipientid}`}>
      <div className='galleryPhoto'>
          <img onClick={this.handleGalleryClick} src={this.props.imgurl} />
          <PhotoFooter galleryClick={this.props.GalleryClick} name={this.props.name} target={this.props.target} received={this.props.received} recipientid={this.props.recipientid} />
      </div>
      </Link>
    )
  }
})
