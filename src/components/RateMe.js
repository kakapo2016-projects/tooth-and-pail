import React from 'react'
import ToothIcon from '../images/tooth-icon-medium.js'

export default React.createClass({
  handleClick1: function(e){
    console.log('in handleClick1' )
    this.props.updateRecipientRating(1)
  },
  handleClick2: function(e){
    console.log('in handleClick2' )
    this.props.updateRecipientRating(2)
  },
  handleClick3: function(e){
    console.log('in handleClick3' )
    this.props.updateRecipientRating(3)
  },
  handleClick4: function(e){
    console.log('in handleClick4' )
    this.props.updateRecipientRating(4)
  },
  handleClick5: function(e){
    console.log('in handleClick5' )
    this.props.updateRecipientRating(5)
  },

  render () {
    console.log(this.props.rating)
    let rows = []
    for (let i=0; i < 5; i++) {
        rows.push(<ToothIcon onClick={this.handleClick}/>)
    }
    return (
      <div className="rateMe">
        <div>
        Current Rating - {this.props.rating}
        </div>
        Rate me now!
        <div>
          <span onClick={this.handleClick1} >
            <ToothIcon />
          </span>
          <span onClick={this.handleClick2} >
            <ToothIcon />
          </span>
          <span onClick={this.handleClick3} >
            <ToothIcon />
          </span>
          <span onClick={this.handleClick4} >
            <ToothIcon />
          </span>
          <span onClick={this.handleClick5} >
            <ToothIcon />
          </span>
        </div>
      </div>
    )
  }
})
