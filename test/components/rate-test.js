import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Rate from '../../src/components/Rate.js'

describe('Rate', () => {
  const props = {
    rating: 3
    }

  it('renders a rating for the recipient', () => {
    const wrapper = mount(React.createElement(Rate, props))
    expect(wrapper.find('div.rate')).to.be.length(1)
  })

  it('renders the correct number of tooth icons for the rating passed in props', () => {
    const wrapper = mount(React.createElement(Rate, props))
    expect(wrapper.find('ToothIcon')).to.have.length(3)
  })

  xit('updates the current rate correctly when a tooth is clicked', () => {
    const wrapper = mount(React.createElement(Rate, props))
    expect()
  })
})
