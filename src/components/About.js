// CLEANED

import React from 'react'
import GetMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import MyTheme from '../theme.js'
import NavBar from './NavBar'
import Header from './Header'

export default React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: GetMuiTheme(MyTheme),
    }
  },

  render: function () {
    return (
      <div className='about'>
        <NavBar/>
        <Header />
        <div className='twelve columns'>
          <h2 className='about-header'>About Tooth & Pail</h2>
          <p>
            Tooth & Pail is for those in need of dental care but unable to afford it,
            and those seeking to donate towards such care. <br/>
            The organisation was originally created by Andi Buchanan, Richard Joe,
            Gaynor Landmark, Joseph Quested and Sharon Rumsey in March 2016 for
            their final project at Enspiral Dev Academy.
            Since then, the community of oral surgery donors and receivers has
            grown at a staggering rate. This is in large part due to Tooth & Pail’s
            accountability infrastructure. Benefactors of our donation service must
            first provide documentation proving the legitimacy of their
            financing request. Usually in the form of a dental quote, we vet these
            requests to establish that all of our recipients are indeed in need,
            and who they say they are. Once the donations start coming in, the
            money doesn’t go straight to the recipient. Tooth & Pail stores the
            finances up until the point when their donation target is reached,
            then pays the money directly to the oral surgeon nominated by the
            candidate. This ensures that all donations on Tooth & Pail really
            do go where they belong. Safety and security have always been our top priority.
          </p>
          <p>
            The changes that even a small amount of dental work can make in somebody’s life are mind-blowing.
          </p>
        </div>
      </div>
    )
  }
})
