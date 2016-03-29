import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render: function () {
    return (
			<div className="story">
		    {this.props.sobstory}
	    </div>
  	)
	}
})
