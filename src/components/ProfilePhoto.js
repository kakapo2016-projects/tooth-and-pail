import React from 'react'

export default React.createClass({
  render () {
    return (
      <span className='profilePhoto' >
        <img src={this.props.imgurl} img={this.props.recipientid} />
      </span>
    )
  }
})
