// CLEANED

import React from 'react'
import GalleryPhoto from './GalleryPhoto'
import _ from 'lodash'

const filterfuncMap = {
  "All Profiles": function(x) {return x},
  "Almost There": function(x) {
    var percentageFunded = ((x.received/x.target)*100)
    return percentageFunded >= 90
  },
  "Popular Now": function(x) {
    var popularProfiles = x.rating
    return popularProfiles >= 4
  }
}

export default React.createClass({
  render () {
    var filterFunction = filterfuncMap[this.props.galleryFilter.primaryText]
    var filteredGallery = this.props.gallery.filter(filterFunction)
    return (
      <div className='grid'>
        {_.map(filteredGallery,
          function(gp){ return <div className="four columns gallerydisplay"><GalleryPhoto
            key={gp.recipientID}
            className='galleryPhoto'
            name={gp.name} imgURL={gp.imgURL}
            target={gp.target}
            received={gp.received}
            recipientID={gp.recipientID}
            rating={gp.rating}/></div>
          })
            }
      </div>
    )
  }
})
