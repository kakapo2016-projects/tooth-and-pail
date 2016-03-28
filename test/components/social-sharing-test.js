import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import SocialSharing from '../../src/components/SocialSharing'

describe('SocialSharing', () => {
  it('should show social sharing buttons in a span', () => {
    const wrapper = shallow(React.createElement(SocialSharing))
    expect(wrapper.find('#share')).to.have.length(1)
  })
  it('should show a Facebook share button', () => {
    const wrapper = shallow(React.createElement(SocialSharing))
    expect(wrapper.find('FacebookShareButton')).to.have.length(1)
  })
  it('should show a GooglePlus share button', () => {
    const wrapper = shallow(React.createElement(SocialSharing))
    expect(wrapper.find('GooglePlusShareButton')).to.have.length(1)
  })
  it('should show a Twitter share button', () => {
    const wrapper = shallow(React.createElement(SocialSharing))
    expect(wrapper.find('TwitterShareButton')).to.have.length(1)
  })
  it('should show a PinterestIcon share button', () => {
    const wrapper = shallow(React.createElement(SocialSharing))
    expect(wrapper.find('PinterestShareButton')).to.have.length(1)
  })
  it('should show a Facebook share icon', () => {
    const wrapper = shallow(React.createElement(SocialSharing))
    expect(wrapper.find('FacebookIcon')).to.have.length(1)
  })
  it('should show a GooglePlus share icon', () => {
    const wrapper = shallow(React.createElement(SocialSharing))
    expect(wrapper.find('GooglePlusIcon')).to.have.length(1)
  })
  it('should show a Twitter share icon', () => {
    const wrapper = shallow(React.createElement(SocialSharing))
    expect(wrapper.find('TwitterIcon')).to.have.length(1)
  })
  it('should show a PinterestIcon share icon', () => {
    const wrapper = shallow(React.createElement(SocialSharing))
    expect(wrapper.find('PinterestIcon')).to.have.length(1)
  })
})
