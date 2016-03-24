import React from 'react'
import GalleryPhoto from './GalleryPhoto'

export default React.createClass({
  render () {
    return (
      <div className='gallery'>
        {this.props.gallery.map(function(gp){
          return <GalleryPhoto name={gp.name} imgurl={gp.imgurl} target={gp.target} received={gp.received} recipientid={gp.recipientid} />
          })
        }
      </div>
    )
  }
})
