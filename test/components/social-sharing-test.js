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
  it('has a url prop', () => {
    const wrapper = shallow(React.createElement(SocialSharing))
    expect(wrapper.props().received).to.be.defined
  })
  it('has a title prop', () => {
    const wrapper = shallow(React.createElement(SocialSharing))
    expect(wrapper.props().target).to.be.defined
  })
  it('has a media prop', () => {
    const wrapper = shallow(React.createElement(SocialSharing))
    expect(wrapper.props().received).to.be.defined
  })
})
