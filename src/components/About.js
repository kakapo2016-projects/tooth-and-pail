// CLEANED

import React from 'react'
import GetMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import RaisedButton from 'material-ui/lib/raised-button'
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
            accountability infrastructure.
            <br/><br/>
            Benefactors of our donation service must
            first provide documentation proving the legitimacy of their
            financing request. Usually in the form of a dental quote, we vet these
            requests to establish that all of our recipients are indeed in need,
            and who they say they are. Once the donations start coming in, the
            money doesn’t go straight to the recipient. Tooth & Pail stores the
            finances up until the point when their donation target is reached,
            then pays the money directly to the oral surgeon nominated by the
            candidate. This ensures that all donations on Tooth & Pail really
            do go where they belong. Safety and security have always been our top priority.
            <br/><br/>
            The changes that even a small amount of dental work can make in
            somebody’s life are mind-blowing. For more inforation of this project,
            or to get involved in the funding of further campaigns, visit the links below.
          </p>
          <span>
            <RaisedButton label="Gallery" onClick={() => {this.props.history.push('/gallery')}}/>
            <RaisedButton label="Apply for Funding" onClick={() => {this.props.history.push('/submitteeth')}}/>
            <RaisedButton label="View Trends" onClick={() => {this.props.history.push('/trends')}}/>
            <RaisedButton label="Recent Donations" onClick={() => {this.props.history.push('/feed')}}/>
          </span>
          <div className='before-and-afters'>
            <h3>Tom. Raised $11,000 in May 2016.</h3>
            <img className='about-image' src='http://saywhitedental.co.uk/images/stories/before-after/implant-010.jpg'/>
            <h3>Danny. Raised $3,000 in January 2016.</h3>
            <img className='about-image' src='http://drmccoy.net/wp-content/uploads/2015/07/website-BT-BA-1.jpg'/>
            <h3>Mary. Raised $2,500 in April 2016.</h3>
            <img className='about-image' src='http://www.rushcreekdentistry.com/images/gallery/gallerylarge05.jpg'/>
          </div>
          <p><br/>For more information on the contributors to this project, please visit:</p>
          <span>
          <a href='https://github.com/andi-crb'><RaisedButton label="Andi"/></a>
          <a href='https://github.com/rjoe19'><RaisedButton label="Richard"/></a>
          <a href='https://github.com/gaynor-landmark'><RaisedButton label="Gaynor"/></a>
          <a href='https://github.com/josephquested'><RaisedButton label="Joseph"/></a>
          <a href='https://github.com/shazzadevacademy'><RaisedButton label="Sharon"/></a>
          </span>
        </div>
      </div>
    )
  }
})
