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
  "Latest Profiles": function(x) {
    var profileDate = x.createdAt
    console.log("PROFILE DATE", profileDate)
    var unixTime = Date.parse(profileDate)
    console.log("UNIXTIME", unixTime)
    var currentDate = Date.now()  // unix time
    console.log("CURRENT DATE", currentDate)
    var residualTime = currentDate - unixTime
    console.log("RESIDUAL TIME", residualTime)
    console.log("LATEST RESULTS 48 HOURS", residualTime <= 172800)
    return residualTime <= 172800 //go back and check accuracy of this return
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
      <div className='gallery'>
        {_.map(filteredGallery,
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
