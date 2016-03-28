// CLEANED

import React from 'react'
import GalleryPhoto from './GalleryPhoto'
import _ from 'lodash'

export default React.createClass({
  render () {
    return (
      <div className='gallery'>
        {_.map(this.props.gallery,
          function(gp){ return <GalleryPhoto
            key={gp.recipientID}
            className='galleryPhoto'
            name={gp.name} imgURL={gp.imgURL}
            target={gp.target}
            received={gp.received}
            recipientID={gp.recipientID}
            rating={gp.rating}/>
          })
        }
      </div>
    )
  }
})
