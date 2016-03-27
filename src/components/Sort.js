import React from 'react'
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Gallery from './Gallery'




export default React.createClass ({

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
        return percentageFunded >= 2 // CHANGE BACK TO 90 % AFTER TESTING DONE
      });
      console.log(initialGallery)
      console.log(newGallery)
      this.props.setGalleryState(newGallery)
    }
},

  generateWhatsPopular: function () {
    if (this.props.gallery[0] !== undefined) {
      var firstGallery = this.props.gallery
       var popularGallery = firstGallery.filter(function(x) {
        var popularProfiles = x.rating
        return popularProfiles >= 4
       });
       this.props.setGalleryState(popularGallery)
    }
  },

  render() {
    return (
      <span className="sort" >
        <DropDownMenu value={this.state.value} onChange={this.generateWhatsPopular}> // sort between 3 methods onChange
          <MenuItem value={1} primaryText="Popular Now"/>
          <MenuItem value={2} primaryText="Almost There"/>
          <MenuItem value={3} primaryText="Latest"/>
        </DropDownMenu>
      </span>
    )
  }
})
