import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Profile from '../../src/components/Profile'

describe('Profile', () => {
  it('should render a profile', () => {
    const wrapper = shallow(React.createElement(Profile))
    expect(wrapper.find('div')).to.have.length(1)
  })
})
