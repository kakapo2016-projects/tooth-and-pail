import React from 'react'
export default React.createClass({


  render () {

    console.log(this.props)
    return (
      <div className='photoFooter'>
        {this.props.name}
      </div>
    )
  }
})
