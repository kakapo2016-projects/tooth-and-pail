import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Profile from '../../src/components/Profile'

describe('Profile', () => {
  const props = {
    recipientID: 1,
    target: 1000,
    name: 'John',
    imgURL: 'john.jpg',
    sobStory: 'Sob sob.',
    rating: 3
  }

  it('should render a profile', () => {
    const wrapper = shallow(React.createElement(Profile, props))
    expect(wrapper.find('ProfilePhoto')).to.have.length(1)
    expect(wrapper.find('ProfileName')).to.have.length(1)
    expect(wrapper.find('ProgressBar')).to.have.length(1)
    expect(wrapper.find('DonateForm')).to.have.length(1)
    expect(wrapper.find('SobStory')).to.have.length(1)
    expect(wrapper.find('RateMe')).to.have.length(1)
    expect(wrapper.find('SocialSharing')).to.have.length(1)
  })
})
