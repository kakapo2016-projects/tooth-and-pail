import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import ProfileName from '../../src/components/ProfileName'

describe('ProfileName', () => {
  it('should render a Profile Name', () => {
    const wrapper = shallow(React.createElement(ProfileName))
    expect(wrapper.find('h2')).to.have.length(1)
    // add in future tests re pulling name from DB etc...
  })
})
