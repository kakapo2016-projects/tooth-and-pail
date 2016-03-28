import React from 'react'
import ToothIcon from '../images/tooth-icon-medium.js'

export default React.createClass({

  // TODO - refactor to one function
  handleClick1: function(e){
    console.log("handleClick1", e.target)
    this.props.updateRecipientRating(1)
  },
  handleClick2: function(e){
    this.props.updateRecipientRating(2)
  },
  handleClick3: function(e){
    this.props.updateRecipientRating(3)
  },
  handleClick4: function(e){
    this.props.updateRecipientRating(4)
  },
  handleClick5: function(e){
    this.props.updateRecipientRating(5)
  },

  render () {
    let rows = []
    for (let i=0; i < 5; i++) {
        rows.push(<ToothIcon onClick={this.handleClick}/>)
    }
    return (
      <div className="rateMe">
        <div>
          <span className='currentRating'>Current Rating : {this.props.rating}</span>
        </div>
        Rate me now!
        <div className='clickableTeeth'>
          <span className='toothMed' onClick={this.handleClick1} >
            <ToothIcon />
          </span>
          <span className='toothMed' onClick={this.handleClick2} >
            <ToothIcon />
          </span>
          <span className='toothMed' onClick={this.handleClick3} >
            <ToothIcon />
          </span>
          <span className='toothMed' onClick={this.handleClick4} >
            <ToothIcon />
          </span>
          <span className='toothMed' onClick={this.handleClick5} >
            <ToothIcon />
          </span>
        </div>
      </div>
    )
  }
})
