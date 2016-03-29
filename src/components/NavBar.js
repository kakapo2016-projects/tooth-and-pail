// CLEANED

import React from 'react'
import cookie from 'react-cookie'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ToothIcon from '../images/tooth-icon.js'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/lib/menus/menu-item'
import { Link } from 'react-router'

export default React.createClass({

  toggledLoginDisplay: function () {
    if (cookie.load('donorID')) {
      return (<Link to={'/'} onClick={this.handleLogout}><MenuItem primaryText="Log Out"/></Link>)
    } else {
      return (<Link to={'/'}><MenuItem primaryText="Login / Signup"/></Link>)
    }
  },

  handleLogout: function () {
    cookie.remove('donorID', { path: '/' })
  },

  render () {
    return (
      <AppBar
        title={<Link to={'/about'}>TOOTH & PAIL</Link>}
        iconElementLeft={<Link to={'/gallery'}><ToothIcon/></Link>}
        iconElementRight={
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
          <Link to={'/about'}><MenuItem primaryText="About Us"/></Link>
          <Link to={'/gallery'}><MenuItem primaryText="Gallery"/></Link>
          <Link to={'/submitteeth'}><MenuItem primaryText="Submit Teeth"/></Link>
          <Link to={'/feed'}><MenuItem primaryText="Recent Activity"/></Link>
          <Link to={'/trends'}><MenuItem primaryText="Trends"/></Link>
          {this.toggledLoginDisplay()}
          </IconMenu>
        }
        />


    )
  }
})
