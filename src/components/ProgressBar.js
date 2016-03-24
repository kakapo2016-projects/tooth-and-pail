import React from 'react'


export default React.createClass ({

  // getInitialState: function () {
  //   return {
  //     received: 50,
  //     target: 5000,
  //   }
  // },

  render() {
    return (
      <span id="ProgressBar">
        ${this.props.received} out of ${this.props.target} raised!
      </span>
    )
  }
})