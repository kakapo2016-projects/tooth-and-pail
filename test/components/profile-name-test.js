import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import ProfileName from '../../src/components/ProfileName'

describe('ProfileName', () => {
  it('should render a Profile Name', () => {
    const props = {name: 'Richard'}
    const wrapper = shallow(React.createElement(ProfileName, props))
    expect(wrapper.find('h2')).to.have.length(1)
    expect(wrapper.find('h2').text()).to.equal('Richard')
  })
})
