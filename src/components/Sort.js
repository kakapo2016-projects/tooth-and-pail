import React from 'react'
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Gallery from './Gallery'

export default React.createClass ({


// enables to change between the various sort functions
    handleChange: function (event, index, value) {
      this.props.changeFilter(value)
    },

  render() {
    return (
      <span className="sort" >
        <DropDownMenu value={this.props.galleryFilter.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="All Profiles"/>
          <MenuItem value={2} primaryText="Almost There"/>
          <MenuItem value={3} primaryText="Popular Now"/>
        </DropDownMenu>
      </span>
    )
  }
})
