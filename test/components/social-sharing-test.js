import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import SocialSharing from '../../src/components/SocialSharing'

describe('SocialSharing', () => {
  it('should show social sharing buttons in a span', () => {
    const wrapper = shallow(React.createElement(SocialSharing))
    expect(wrapper.find('#share')).to.have.length(1)
  })
})