// CLEANED

import React from 'react'
import PhotoFooter from './PhotoFooter.js'
import { Link } from 'react-router'

export default React.createClass({
  // the below is fine but 
  // const { imgUrl, etc } this.props  destructuring is a good practice
  render () {
    return (
      <Link to={`/recipient/${this.props.recipientID}`}>
        <div className='galleryPhoto'>
          <img src={this.props.imgURL} />
          <PhotoFooter
            name={this.props.name}
            target={this.props.target}
            received={this.props.received}
            recipientid={this.props.recipientID}
            rating={this.props.rating}
          />
        </div>
      </Link>
    )
  }
})
