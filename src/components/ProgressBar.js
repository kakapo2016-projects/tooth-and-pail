import React from 'react'

export default React.createClass ({

  render() {

    return (
        <span id="ProgressBar"  >
          ${this.props.received} out of ${this.props.target} raised!
        </span>
    );
  }
})
