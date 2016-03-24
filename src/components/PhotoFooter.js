import React from 'react'
import ProgressBar from './ProgressBar'


export default React.createClass({
  handleFooterClick: function(e){
    this.props.galleryClick(this.props.recipientid)
   },
  render () {
    return (
      <div className='photoFooter' onClick={this.handleFooterClick}>
        {this.props.name}
        <p className='galleryProgressBar'>
          <ProgressBar target={this.props.target} received={this.props.received}/>
        </p>
      </div>
    )
  }
})
