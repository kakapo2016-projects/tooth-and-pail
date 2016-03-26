import React from 'react'
import ReactDOM from 'react-dom'

import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import NavigationHome from 'material-ui/lib/svg-icons/action/home'
import ToothIcon from '../images/tooth-icon.js'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/lib/menus/menu-item'
// import Isvg from 'react-inlinesvg'

import { Link } from 'react-router'

//<ToothIcon />

export default React.createClass({
  render() {
    return (
      <AppBar
        title="TOOTH & PAIL"
        iconElementLeft={<Link to={'gallery'}><ToothIcon/></Link>}
        iconElementRight={
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
          <Link to={'/'}><MenuItem primaryText="Log In" /></Link>
          <Link to={'gallery'}><MenuItem primaryText="Gallery" /></Link>
          <Link to={'trends'}><MenuItem primaryText="Trends" /></Link>
          </IconMenu>
        }
      />
    )
  }
})
