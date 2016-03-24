import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import NavBar from '../../src/components/NavBar'

describe('NavBar', () => {
  it('should render the NavBar', () => {
    const wrapper = shallow(React.createElement(NavBar))
    expect(wrapper.find('AppBar')).to.have.length(1)
  })
})
