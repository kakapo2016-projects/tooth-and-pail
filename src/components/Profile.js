import React from 'react'
import ReactDOM from 'react-dom'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyTheme from '../theme.js';
import ProfilePhoto from './ProfilePhoto'
import NavBar from './NavBar'
import Header from './Header'
import ProfileName from './ProfileName'
import ProgressBar from './ProgressBar'
import DonateForm from './DonateForm'
import SobStory from './SobStory'
import SocialSharing from './SocialSharing'
import Paper from 'material-ui/lib/paper'

export default React.createClass({

  childContextTypes : {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyTheme),
    };
  },

    getInitialState: function () {
    return {
      amountDonated: 0
    }
  },


  handleDonation: function (p) {
  console.log("hey look this is being passed up!", p, "type", typeof p)
  this.setState({amountDonated: p})
  },

  render: function () {

    return (
      <div className='profile'>
        <div>
          <div className="row">
            <div className="twelve columns">
              <NavBar/>
              <Header header={this.props.recipientID}/>
            </div>
          </div>
          <div className="row">
            <div className="six columns">
              <ProfilePhoto imgurl="http://images6.fanpop.com/image/quiz/948000/948761_1353447278493_500_273.jpg" />
            </div>
            <div className="six columns">
              <ProfileName name='Richard Joe Esq.'/>
              <ProgressBar/>
              <br />
              <DonateForm donateFunction={this.handleDonation.bind(this)} />
            </div>
          </div>
          <div className="row">
            <div className="twelve columns">
              <SobStory sobstory='Cheese and wine squirty cheese cheesy feet. Blue castello lancashire cheesy grin smelly cheese babybel queso squirty cheese mascarpone. Mozzarella smelly cheese cheese triangles cheese on toast cream cheese paneer hard cheese cheese triangles. Cheesecake who moved my cheese airedale airedale dolcelatte cheese strings camembert de normandie bocconcini. Fromage frais cheese on toast fromage smelly cheese mozzarella pecorino cheese on toast cauliflower cheese. Chalk and cheese monterey jack bavarian bergkase cut the cheese cream cheese cream cheese.
                Cheese and wine paneer bavarian bergkase. Paneer croque monsieur cheesy feet dolcelatte feta pecorino stilton edam. Cottage cheese cheese slices feta who moved my cheese babybel fondue fromage frais red leicester. Croque monsieur cheese triangles cottage cheese cheese strings ricotta melted cheese queso stilton. Chalk and cheese mozzarella cheesecake say cheese lancashire stinking bishop cheesy feet mascarpone. Cream cheese blue castello chalk and cheese boursin smelly cheese feta taleggio gouda. Jarlsberg.' />
              <SocialSharing url="http://google.com" title="A Title!" media="https://40.media.tumblr.com/c10a90bda3576ab2e51f5d42ee3b0006/tumblr_n1sgn0Kc6s1shf8zxo6_1280.png" />
            </div>
          </div>
        </div>
      </div>
    )
  }
})
