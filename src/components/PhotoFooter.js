import React from 'react'
import ProgressBar from './ProgressBar'

export default React.createClass({
  render () {
    return (
      <div className='photoFooter'>
        {this.props.name}
        <p className='galleryProgressBar'>
          <ProgressBar target={this.props.target} received={this.props.received}/>
        </p>
      </div>
    )
  }
})
