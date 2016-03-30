import { expect } from 'chai'
import chai from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Feed from '../../src/components/Feed'

describe('Feed', () => {
  it('should show a div with the id feed', () => {
    const wrapper = shallow(React.createElement(Feed))
    expect(wrapper.find('#feed')).to.have.length(1)
  })
  it('should show a page heading with the style h2', () => {
    const wrapper = shallow(React.createElement(Feed))
    expect(wrapper.find('h2')).to.have.length(1)
  })
  it('should show the text Recent Activity in the heading', () => {
  const wrapper = shallow(React.createElement(Feed))
  expect(wrapper.find('h2')).to.have.text("Recent Activity")
  })
  it('should show a List components', () => {
  const wrapper = shallow(React.createElement(Feed))
  expect(wrapper.find('List')).to.have.length(1)
  })
})