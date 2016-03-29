import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Profile from '../../src/components/Profile'
import Header from '../../src/components/Header'
import NavBar from '../../src/components/NavBar'
import ProfilePhoto from '../../src/components/ProfilePhoto'
import ProfileName from '../../src/components/ProfileName'
import ProgressBar from '../../src/components/ProgressBar'
import DonateForm from '../../src/components/DonateForm'
import SobStory from '../../src/components/SobStory'
import RateMe from '../../src/components/RateMe'
import SocialSharing from '../../src/components/SocialSharing'
import HBar from '../../src/components/HBar'


describe('Profile', () => {
  const props = {
    params: {recipientID: 1},
    target: 1000,
    name: 'John',
    imgURL: 'john.jpg',
    sobStory: 'Sob sob.',
    rating: 3
  }

  console.log(props)
  //the props.params.recipientID is not being passed in with the props
  // How to do this????

  // Having talked to Josh - apparently this needs proxyquire and sinon to test the http calls,
  // so leaving this un-tested at this stage
  xit ('the header renders without any props', () => {
     const wrapper = mount(React.createElement(Profile, props))
     expect(wrapper.find(Header)).to.have.length(1)
   })
  // it('should render a profile', () => {
  //   const wrapper = shallow(<Profile />)
  //   expect(wrapper.find(ProfilePhoto)).to.have.length(1)
  //   expect(wrapper.find(ProfileName)).to.have.length(1)
  //   expect(wrapper.find(ProgressBar)).to.have.length(1)
  //   expect(wrapper.find(DonateForm)).to.have.length(1)
  //   expect(wrapper.find(SobStory)).to.have.length(1)
  //   expect(wrapper.find(RateMe)).to.have.length(1)
  //   expect(wrapper.find(SocialSharing)).to.have.length(1)
  // })
  // const wrapper = shallow(<Profile />)
})
