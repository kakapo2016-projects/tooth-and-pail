import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Profile from '../../src/components/Profile'

describe('Profile', () => {
  it('should render a profile', () => {
    const wrapper = shallow(React.createElement(Profile))
    expect(wrapper.find('ProfilePhoto')).to.have.length(1)
    expect(wrapper.find('ProfileName')).to.have.length(1)
    expect(wrapper.find('ProgressBar')).to.have.length(1)
    expect(wrapper.find('DonateForm')).to.have.length(1)
    expect(wrapper.find('SobStory')).to.have.length(1)
  })
})
