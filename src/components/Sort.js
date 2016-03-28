import React from 'react'
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Gallery from './Gallery'

export default React.createClass ({

  handleChange:  function (event, index, value) {
    this.setState({value:value})
  },

  getInitialState: function() {
    return {
      value: 1
    }
  },
  // 'Almost there':
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
  // 'Popular Now':
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
 // latest profiles:
  generateLatest: function () {
    if (this.props.gallery[0] !== undefined) {
      var startGallery = this.props.gallery
       var latestGallery = startGallery.filter(function(x) {
        var profileDate = x.createdAt
        console.log("PROFILE DATE", profileDate)
        var unixTime = Date.parse(profileDate)
        console.log("UNIXTIME", unixTime)
        var currentDate = Date.now()  // unix time
        console.log("CURRENT DATE", currentDate)
        var residualTime = currentDate - unixTime
        console.log("RESIDUAL TIME", residualTime)
        console.log("LATEST RESULTS 48 HOURS", residualTime <= 172800)
        return residualTime <= 172800
       });
       this.props.setGalleryState(latestGallery)
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
