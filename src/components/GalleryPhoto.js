import React from 'react'
import PhotoFooter from './PhotoFooter.js'
import { Link } from 'react-router'

export default React.createClass({
  handleGalleryClick: function(e){
    this.props.galleryClick(this.props.recipientID)
   },

  render () {
    console.log("galleryPhoto ---", this.props )
    return (
      <Link to={`/recipient/${this.props.recipientID}`}>
      <div className='galleryPhoto'>
          <img onClick={this.handleGalleryClick} src={this.props.imgURL} />
          <PhotoFooter galleryClick={this.props.GalleryClick} name={this.props.name} target={this.props.target} received={this.props.received} recipientid={this.props.recipientID} />
      </div>
      </Link>
    )
  }
})
