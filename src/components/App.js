import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Gallery from './Gallery'
import GalleryPhoto from './GalleryPhoto'

// database functions
import getRequest from '../getRequest.js'
import postRequest from '../postRequest.js'

// material-ui helpers
import GetMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import MyTheme from '../theme.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

export default React.createClass({
  childContextTypes : {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: GetMuiTheme(MyTheme),
    };
  },

    getInitialState: function () {
    return {
      amountDonated: 0,
      gallery: [
        { name : "Jeff",
          imgURL : 'https://i.ytimg.com/vi/OzVaVVjnjEI/maxresdefault.jpg',
          target : 1000,
          received : 0,
          recipientID : 1
        },
        { name : "Martin",
          imgURL : 'http://1.bp.blogspot.com/-bi3Zn6jq4MM/TwEfw9ZKRXI/AAAAAAAAB1M/jG66N193504/s1600/Funny+Teeth5.JPG',
          target :  3000,
          received : 0,
          recipientID : 2
        },
        { name : "Anne",
          imgURL : 'http://i.dailymail.co.uk/i/pix/2015/12/17/23/2F78BF0F00000578-0-image-m-11_1450396660957.jpg',
          target : 4000,
          received : 100,
          recipientID : 3
        },
        { name : "Jaws",
          imgURL : 'http://i.telegraph.co.uk/multimedia/archive/02910/James-Bond-jaws_2910844b.jpg',
          target : 4000,
          received : 100,
          recipientID : 4
        },
        { name : "Logan",
          imgURL : 'http://id3442.securedata.net/cosmetic-dentistry/images/tetracycline%20teeth%20before%20veneers.jpg',
          target : 4000,
          received : 100,
          recipientID : 4
        },
        { name : "Carol",
          imgURL : 'http://www.healthable.org/wp-content/uploads/2013/11/Teeth-Discoloration.jpg',
          target : 4000,
          received : 100,
          recipientID : 4
        }
      ]
    }
  },

  componentDidMount: function() {
    // get all the recipients from the database
    getRequest('http://localhost:3000/recipients', this.dbSetState)
  },

  dbSetState: function (data) {
    console.log(this.state.gallery)
    this.setState({gallery: data})
    console.log("State", this.state)
  },

  galleryClick: function (recipientID) {
    //  go to the profile page for this recipient
    console.log("gallery click in app.js for ",  recipientID)
  },


  render () {
    return (
      <div className='app'>
        <NavBar/>
        <Header header='TOOTH & PAIL'/>
        <Gallery gallery={this.state.gallery} galleryClick={this.galleryClick} />
      </div>
    )
  }
})
