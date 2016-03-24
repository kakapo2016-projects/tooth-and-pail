import React from 'react'
import ReactDOM from 'react-dom'

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationHome from 'material-ui/lib/svg-icons/action/home';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default React.createClass({
  render() {
    return (
      <AppBar
        title="TOOTH & PAIL"
        iconElementLeft={<IconButton><NavigationHome /></IconButton>}
        iconElementRight={
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Donate Teeth" />
            <MenuItem primaryText="Buy Used Teeth" />
            <MenuItem primaryText="Perform Amature Sergery" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        }
      />
    )
  }
})