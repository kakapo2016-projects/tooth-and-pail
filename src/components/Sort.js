import React from 'react'
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';



export default React.createClass ({

  handleChange:  function (event, index, value) {
    this.setState({value:value})
  },

  getInitialState: function() {
    return {
      value: 1
    }
  },

  render() {
    return (
      <span className="sort" >
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Popular Now"/>
          <MenuItem value={2} primaryText="Almost There"/>
          <MenuItem value={3} primaryText="Latest"/>
        </DropDownMenu>
      </span>
    );
  }
})

// popular now pseudo code:

// 1) user clicks on almost There
// 2) grabs db info re target & recieved
// 3) applies sorting algorythm with this data:
// only display profiles which are 90 or more funded:
// i.e. target/amount received x 100 >=90 %

// 4) displays profiles that meet 3)
