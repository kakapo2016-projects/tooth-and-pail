import React from 'react'
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Gallery from './Gallery'




export default React.createClass ({

  // handleChange:  function (event, index, value) {
  //   this.setState({value:value})
  // },

  getInitialState: function() {
    return {
      value: 1
    }
  },

  generateNewGallery: function () {
    if (this.props.gallery[0] !== undefined) {
      var initialGallery = this.props.gallery  // initial array of gallery objects
      var newGallery = initialGallery.filter(function(x) {
        var percentageFunded = ((x.received/x.target)*100)
        return percentageFunded >= 2
      });
      console.log(initialGallery)
      console.log(newGallery)
      this.props.setGalleryState(newGallery)
    }
},

  render() {
    return (
      <span className="sort" >
        <DropDownMenu value={this.state.value} onChange={this.generateNewGallery}>
          <MenuItem value={1} primaryText="Popular Now"/>
          <MenuItem value={2} primaryText="Almost There"/>
          <MenuItem value={3} primaryText="Latest"/>
        </DropDownMenu>
      </span>
    )
  }
})
